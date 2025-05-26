import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline"
import taskLists from 'markdown-it-task-checkbox'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

import { loadEnv } from 'vite'
const mode = process.env.NODE_ENV || 'development'
export const { VITE_BASE_URL } = loadEnv(mode, process.cwd())

console.log('Mode:', process.env.NODE_ENV)
console.log('VITE_BASE_URL:', VITE_BASE_URL)

export const sharedConfig = defineConfig({
  rewrites: { // 很重要，
    'zh/:rest*': ':rest*'
  },
  metaChunk: true,
  lang: 'zh-CN', // 语言
  title: "RavenHogwarts Docs", // 站点名称
  description: "Documentation for RavenHogwarts plugins, software, and tools", // 站点描述
  head: [ 
    // 网站 favicon.ico 图标
    ['link', { rel: 'alternate icon',href: `${VITE_BASE_URL}favicon.png`, sizes: '32x32', type: 'image/png' }],
    // 引入 Google Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }],
    // 网页视口
    ['meta', { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no" }],
    // 关键词和描述
    ['meta', { name: "keywords", content: "xxx,xxx" }],
  ],
  appearance: true, // 主题模式，默认浅色且开启切换
  base: VITE_BASE_URL,
  lastUpdated: true, // 上次更新
  cleanUrls:true, // 开启纯净链接
  ignoreDeadLinks: false, //关闭忽略死链，不配置即可，非常不建议设置为true
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
  themeConfig: { // 主题设置
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            // 从文档中提取字段值
            extractField(document, fieldName) {
              return document.frontmatter?.[fieldName] || document[fieldName]
            },
            // 分词方法：支持中英文，包括单字符中文
            tokenize(text) {
              const tokens: string[] = []
              const matches = text.match(/[\u4e00-\u9fa5]|[a-zA-Z]+/g) || []
              
              matches.forEach(match => {
                if (/[\u4e00-\u9fa5]/.test(match)) {
                  // 对于中文文本，既保存单字，也保存连续字符
                  // 例如 "内置公式" 会产生 ["内", "置", "公", "式", "内置", "公式", "内置公式"]
                  for (let i = 0; i < match.length; i++) {
                    tokens.push(match[i])  // 单字
                    for (let j = i + 1; j <= match.length; j++) {
                      tokens.push(match.slice(i, j))  // 连续字符
                    }
                  }
                } else {
                  // 英文单词直接添加
                  tokens.push(match)
                }
              })
              
              // 3. 去重
              return [...new Set(tokens)]
            },
            // 词条处理：对英文转小写，中文保持原样
            processTerm(term) {
              // 如果是英文则转小写，如果是中文则保持原样
              return /[a-zA-Z]+/.test(term) ? term.toLowerCase() : term
            },
          },
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: {
              title: 3,
              headings: 2,
              content: 1
            },
            combineWith: 'AND'
          }
        }
      },
    },
    logo: `${VITE_BASE_URL}favicon.png`,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RavenHogWarts' }
    ],
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },
  }
})