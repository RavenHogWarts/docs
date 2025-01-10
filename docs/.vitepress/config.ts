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
              text: 'RavenHogwarts Toolkit',
              link: '/zh/obsidian-ravenhogwarts-toolkit/',
              items: [
                { text: '快速开始', link: '/zh/obsidian-ravenhogwarts-toolkit/guide/getting-started' },
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
              text: 'RavenHogwarts Toolkit',
              link: '/en/obsidian-ravenhogwarts-toolkit/',
              items: [
                { text: 'Getting Started', link: '/en/obsidian-ravenhogwarts-toolkit/guide/getting-started' },
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