import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RavenHogwarts Docs',
  description: 'Documentation for RavenHogwarts plugins, software, and tools',
  base: '/docs/',

  locales: {
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: 'Obsidian插件',
            items: [
              { text: 'RavenHogwarts Toolkit', link: '/zh/obsidian-ravenhogwarts-toolkit/' }
            ]
          }
        ],

        sidebar: {
          '/zh/obsidian-ravenhogwarts-toolkit/': [
            {
              text: '入门',
              collapsed: false,
              items: [
                { text: '插件介绍', link: '/zh/obsidian-ravenhogwarts-toolkit/' },
                { text: '下载', link: '/zh/obsidian-ravenhogwarts-toolkit/getting-started/installation' }
              ]
            },
            {
              text: '指南',
              collapsed: false,
              items: [
                { text: '文档属性排序',
                  collapsed: true,
                  link: '/zh/obsidian-ravenhogwarts-toolkit/features/frontmatter-sorter/',
                  items: []
                },
                { text: '快速路径',
                  collapsed: true,
                  link: '/zh/obsidian-ravenhogwarts-toolkit/features/quick-path/',
                  items: []
                },
                { text: '阅读进度',
                  collapsed: true,
                  link: '/zh/obsidian-ravenhogwarts-toolkit/features/reading-progress/',
                  items: []
                },
                { text: '表格增强',
                  collapsed: true,
                  link: '/zh/obsidian-ravenhogwarts-toolkit/features/table-enhancements/',
                  items: [
                    { text: '内置公式', link: '/zh/obsidian-ravenhogwarts-toolkit/features/table-enhancements/formula' }
                  ]
                }
              ]
            },
            {
              text: '定制化',
              collapsed: false,
              items: [
                { text: '样式定制', link: '/zh/obsidian-ravenhogwarts-toolkit/advanced/styling' }
              ]
            }
          ]
        }
      }
    },

    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Obsidian Plugin',
            items: [
              { text: 'RavenHogwarts Toolkit', link: '/en/obsidian-ravenhogwarts-toolkit/' }
            ]
          }
        ],
    
        sidebar: {
          '/en/obsidian-ravenhogwarts-toolkit/': [
            {
              text: 'Getting Started',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/en/obsidian-ravenhogwarts-toolkit/' },
                { text: 'Installation', link: '/en/obsidian-ravenhogwarts-toolkit/getting-started/installation' }
              ]
            },
            {
              text: 'Features',
              collapsed: false,
              items: [
                {
                  text: 'Front Matter Sort',
                  collapsed: true,
                  link: '/en/obsidian-ravenhogwarts-toolkit/features/frontmatter-sorter/',
                  items: []
                },
                {
                  text: 'Quick Path',
                  collapsed: true,
                  link: '/en/obsidian-ravenhogwarts-toolkit/features/quick-path/',
                  items: []
                },
                {
                  text: 'Reading Progress',
                  collapsed: true,
                  link: '/en/obsidian-ravenhogwarts-toolkit/features/reading-progress/',
                  items: []
                },
                {
                  text: 'Table Enhancement',
                  collapsed: true,
                  link: '/en/obsidian-ravenhogwarts-toolkit/features/table-enhancements/',
                  items: [
                    { text: 'Formula', link: '/en/obsidian-ravenhogwarts-toolkit/features/table-enhancements/formula' }
                  ]
                }
              ]
            },
            {
              text: 'Customization',
              collapsed: false,
              items: [
                { text: 'Styling', link: '/en/obsidian-ravenhogwarts-toolkit/advanced/styling' }
              ]
            }
          ],
        }
      }
    },
  },
  themeConfig: {
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RavenHogWarts' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present RavenHogWarts'
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://s2.loli.net/2024/06/28/bo9WN6lFAwir3ug.png' }]
  ],
  cleanUrls: true
}) 