import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Documentation',
  description: 'Documentation for RavenHogwarts',
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
                { text: '快速开始', link: '/zh/obsidian-ravenhogwarts-toolkit/guide/getting-started' }
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
                { text: 'Getting Started', link: '/en/obsidian-ravenhogwarts-toolkit/guide/getting-started' }
              ]
            }
          ],
        }
      }
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RavenHogWarts' }
    ]
  }
}) 