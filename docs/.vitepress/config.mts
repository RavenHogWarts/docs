import { defineConfig, UserConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';
import { withI18n } from 'vitepress-i18n';
import { VitePressSidebarOptions } from 'vitepress-sidebar/types';
import type { VitePressI18nOptions } from 'vitepress-i18n/types';
import timeline from "vitepress-markdown-timeline"
import taskLists from 'markdown-it-task-checkbox'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import dayjs from 'dayjs'

import { loadEnv } from 'vite'
import packageJson from '../../package.json' with { type: 'json' };
import { createRequire } from 'module'

// 修改这里：使用 process.argv 来获取 --mode 参数
const args = process.argv
const modeIndex = args.findIndex(arg => arg === '--mode')
const mode = modeIndex !== -1 && args[modeIndex + 1] ? args[modeIndex + 1] : (process.env.NODE_ENV || 'development')
const { VITE_BASE_URL } = loadEnv(mode, process.cwd())

console.log('Mode:', mode)
console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('VITE_BASE_URL:', VITE_BASE_URL)

import { existsSync } from 'fs';
import { join } from 'path';

const defaultLocale: string = 'zhHans';
const supportLocales: string[] = [defaultLocale, 'en'];
const editLinkPattern = `${packageJson.repository.url}/edit/master/${VITE_BASE_URL == '/' ? 'docs/' : ''}:path`;

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

const commonSidebarConfig: VitePressSidebarOptions = {
  debugPrint: true,
  manualSortFileNameByPriority: ['index.md', 'guide', 'advanced-usage'],
  excludePattern: ['changelog.md'],
  collapsed: false,
  collapseDepth: 2, // 在指定的深度，菜单组会折叠。
  capitalizeFirst: true, // 菜单名称的第一个字母将强制为大写
  useTitleFromFrontmatter: true, // 根据文件 Frontmatter 中 title 的值显示标题, 优先级高于 h1 标题
  useTitleFromFileHeading: true, // 显示带有 .md 文件中 h1 标题内容的标题
  useFolderTitleFromIndexFile: true, // 使用当前文件夹的 index.md 文件中的信息来获取菜单名称
  frontmatterOrderDefaultValue: 9, // For 'CHANGELOG.md'
  sortMenusByFrontmatterOrder: true, // 对于每个文件夹，按 order 属性的值（数字）升序排序
  excludeFilesByFrontmatterFieldName: 'draft', // 指定前缀字段名称为 true 的文档将从菜单中排除
  includeRootIndexFile: true, // 在侧边栏菜单中包含顶级路径 index.md 文件
  // includeFolderIndexFile: true, // 在侧边栏菜单中包含文件夹路径 index.md 文件
  useFolderLinkFromSameNameSubFile: true, // 当存在与文件夹同名的子文件时,将在文件夹中创建一个链接,用于导航至该文件,而该文件不会显示在子项中
  folderLinkNotIncludesFileName: true, // 在建立文件夹链接时，忽略子项的存在，并仅将链接指定为文件夹路径
};

const vitePressSidebarConfig: VitePressSidebarOptions[] = [
  // 为每个语言的每个插件目录创建独立侧边栏
  ...supportLocales.flatMap((lang): VitePressSidebarOptions[] => {   
    const configs: VitePressSidebarOptions[] = [];
    
    const pluginDirs = [
      'obsidian-ace-code-editor',
      'obsidian-custom-icons', 
      'obsidian-ravenhogwarts-toolkit',
      'obsidian-yearly-glance'
    ];
    
    // 插件自定义配置
    const pluginCustomConfigs: Record<string, Partial<VitePressSidebarOptions>> = {
      // 'obsidian-ravenhogwarts-toolkit': {
      //   manualSortFileNameByPriority: ['index.md', 'features', 'advanced-usage', 'support']
      // }
    };
    
    // 检查当前语言下哪些插件目录实际存在
    const existingPluginDirs = pluginDirs.filter(dir => 
      existsSync(join(process.cwd(), 'docs', lang, dir))
    );
    
    // 主页配置
    configs.push({
      ...commonSidebarConfig,
      documentRootPath: `docs/${lang}`,
      scanStartPath: '',
      resolvePath: defaultLocale === lang ? '/' : `/${lang}/`,
      ...(defaultLocale === lang ? {} : { basePath: `/${lang}/` }),
      ...(existingPluginDirs.length > 0 ? {
        excludePattern: [...(commonSidebarConfig.excludePattern || []), ...existingPluginDirs.map(dir => `${dir}/**`)]
      } : {})
    });
    
    // 只为存在的插件目录创建侧边栏
    existingPluginDirs.forEach(pluginDir => {
      const customConfig = pluginCustomConfigs[pluginDir] || {};
      configs.push({
        ...commonSidebarConfig,
        ...customConfig,
        documentRootPath: `docs/${lang}`,
        scanStartPath: pluginDir,
        resolvePath: defaultLocale === lang ? `/${pluginDir}/` : `/${lang}/${pluginDir}/`,
        ...(defaultLocale === lang ? {} : { basePath: `/${lang}/` }),
        // 合并排除模式和手动排序配置
        excludePattern: customConfig.excludePattern ?? commonSidebarConfig.excludePattern,
        manualSortFileNameByPriority: customConfig.manualSortFileNameByPriority ?? commonSidebarConfig.manualSortFileNameByPriority
      });
    });
    
    return configs;
  })
];

const vitePressI18nConfig: VitePressI18nOptions = {
  locales: supportLocales,
  rootLocale: defaultLocale,
  debugPrint: true,
  searchProvider: 'algolia',
  themeConfig: {
    zhHans: {
      nav: [
        { text: '首页', link: '/' },
        { text: 'Obsidian插件',
          items: [
            { text: 'Ace Code Editor', link: '/obsidian-ace-code-editor/' },
            { text: 'Custom Icons', link: '/obsidian-custom-icons/' },
            { text: 'Yearly Glance', link: '/obsidian-yearly-glance/' },
            { text: 'RavenHogwarts Toolkit(OTK)', link: '/obsidian-ravenhogwarts-toolkit/' },
          ]
        },
        { text: `VitePress ${pkg.version}`, link: 'https://vitepress.dev/zh/', noIcon: true },
      ]
    },
    en: {
      nav: [
        { text: 'Home', link: '/en/', activeMatch: '/en/' },
        { text: 'Obsidian Plugin',
          items: [
            { text: 'Ace Code Editor', link: '/en/obsidian-ace-code-editor/' },
            { text: 'Custom Icons', link: '/en/obsidian-custom-icons/' },
            { text: 'Yearly Glance', link: '/en/obsidian-yearly-glance/' },
            { text: 'RavenHogwarts Toolkit(OTK)', link: '/en/obsidian-ravenhogwarts-toolkit/' },
          ]
        },
        { text: `VitePress ${pkg.version}`, link: 'https://vitepress.dev/', noIcon: true },
      ]
    },
  }
};

// Ref: https://vitepress.dev/reference/site-config
const vitePressConfig: UserConfig = {
  title: "RavenHogwarts Docs",
  description: "Documentation for RavenHogwarts plugins, software, and tools", // 站点描述
  base: VITE_BASE_URL,
  appearance: true, // 主题模式，默认浅色且开启切换
  ignoreDeadLinks: false, //关闭忽略死链，不配置即可，非常不建议设置为true
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  rewrites: {
    'zhHans/:rest*': ':rest*'
  },
  head: [ 
    // 网站 favicon.ico 图标
    ['link', { rel: 'alternate icon',href: `${VITE_BASE_URL}images/avatar/favicon.png`, sizes: '32x32', type: 'image/png' }],
    // 引入 Google Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }],
    // 网页视口
    ['meta', { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no" }],
    // 关键词和描述
    ['meta', { name: "keywords", content: "docs, obsidian" }],
  ],
  sitemap: {
    hostname: packageJson.homepage
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 1600
    },
    plugins: [
      groupIconVitePlugin({
        customIcon: { // https://icon-sets.iconify.design/
          js: 'logos:javascript', //js图标
          md: 'logos:markdown', //markdown图标
          css: 'logos:css-3', //css图标
          pnpm: 'logos:pnpm',
          npm: 'logos:npm-icon',
          yarn: 'logos:yarn',
          bun: 'logos:bun',
          vue: 'logos:vue',
          svelte: 'logos:svelte-icon',
          angular: 'logos:angular-icon',
          react: 'logos:react',
          next: 'logos:nextjs-icon',
          nuxt: 'logos:nuxt-icon',
          solid: 'logos:solidjs-icon',
          rollup: 'logos:rollupjs',
          webpack: 'logos:webpack',
          vite: 'logos:vitejs',
          esbuild: 'logos:esbuild',
        }
      }) //代码组图标
    ],
    server: {
      port: 18089
    }
  },
  markdown: { // markdown 配置
    math: true,
    lineNumbers: true, // 行号显示
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    config: (md) => {
      md.use(timeline)
      md.use(taskLists)
      md.use(groupIconMdPlugin) //代码组图标
    }
  },
  themeConfig: {
    logo: `${VITE_BASE_URL}images/avatar/favicon.png`,
    search: {
      provider: 'algolia',
      options: {
        appId: 'GV7DSMPEGH',
        apiKey: 'd6d36e6a449d989be9c15d20e95d123e',
        indexName: 'docs',
      },
    },
    editLink: {
      pattern: editLinkPattern
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RavenHogWarts/docs' },
      { icon: '', link: 'https://space.bilibili.com/343113645' }
    ],
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },
    footer: { // 页脚
      message: 'Released under the GPL-3.0 license.',
      copyright: `Copyright © 2024-${dayjs().format("YYYY")} RavenHogWarts`
    },
  }
};

export default defineConfig(
  withSidebar(withI18n(vitePressConfig, vitePressI18nConfig), vitePressSidebarConfig)
);