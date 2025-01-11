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
    },
    // search: {
    //   provider: 'local',
    //   options: {
    //     locales: {
    //       zh: {
    //         translations: {
    //           button: {
    //             buttonText: '搜索文档',
    //             buttonAriaLabel: '搜索文档'
    //           },
    //           modal: {
    //             noResultsText: '无法找到相关结果',
    //             resetButtonTitle: '清除查询条件',
    //             footer: {
    //               selectText: '选择',
    //               navigateText: '切换'
    //             }
    //           }
    //         } 
    //       }
    //     },
    //     miniSearch: {
    //       options: {
    //         // 从文档中提取字段值
    //         extractField(document, fieldName) {
    //           return document.frontmatter?.[fieldName] || document[fieldName]
    //         },
    //         // 分词方法：支持中英文，包括单字符中文
    //         tokenize(text) {
    //           const tokens: string[] = []
    //           const matches = text.match(/[\u4e00-\u9fa5]|[a-zA-Z]+/g) || []
              
    //           matches.forEach(match => {
    //             if (/[\u4e00-\u9fa5]/.test(match)) {
    //               // 对于中文文本，既保存单字，也保存连续字符
    //               // 例如 "内置公式" 会产生 ["内", "置", "公", "式", "内置", "公式", "内置公式"]
    //               for (let i = 0; i < match.length; i++) {
    //                 tokens.push(match[i])  // 单字
    //                 for (let j = i + 1; j <= match.length; j++) {
    //                   tokens.push(match.slice(i, j))  // 连续字符
    //                 }
    //               }
    //             } else {
    //               // 英文单词直接添加
    //               tokens.push(match)
    //             }
    //           })
              
    //           // 3. 去重
    //           return [...new Set(tokens)]
    //         },
    //         // 词条处理：对英文转小写，中文保持原样
    //         processTerm(term) {
    //           // 如果是英文则转小写，如果是中文则保持原样
    //           return /[a-zA-Z]+/.test(term) ? term.toLowerCase() : term
    //         },
    //       },
    //       searchOptions: {
    //         fuzzy: 0.2,
    //         prefix: true,
    //         boost: {
    //           title: 3,
    //           headings: 2,
    //           content: 1
    //         },
    //         combineWith: 'AND'
    //       }
    //     }
    //   }
    // }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://s2.loli.net/2024/06/28/bo9WN6lFAwir3ug.png' }]
  ],
  cleanUrls: true
}) 