import { DefaultTheme } from 'vitepress'
export const zhSidebar: DefaultTheme.Sidebar = {
  '/obsidian-ravenhogwarts-toolkit/': [
    {
      text: '入门',
      collapsed: false,
      items: [
        { text: '插件介绍', link: '/obsidian-ravenhogwarts-toolkit/' },
        { text: '下载', link: '/obsidian-ravenhogwarts-toolkit/getting-started/installation' }
      ]
    },
    {
      text: '指南',
      collapsed: false,
      items: [
        { text: '文档属性排序',
          collapsed: true,
          link: '/obsidian-ravenhogwarts-toolkit/features/frontmatter-sorter/',
          items: []
        },
        { text: '快速路径',
          collapsed: true,
          link: '/obsidian-ravenhogwarts-toolkit/features/quick-path/',
          items: []
        },
        { text: '目录导航',
          collapsed: true,
          link: '/obsidian-ravenhogwarts-toolkit/features/reading-progress/',
          items: [
            { text: '阅读时间', link: '/obsidian-ravenhogwarts-toolkit/features/reading-progress/reading-time' },
            { text: '文档内目录', link: '/obsidian-ravenhogwarts-toolkit/features/reading-progress/table-of-contents' }
          ]
        },
        { text: '表格增强',
          collapsed: true,
          link: '/obsidian-ravenhogwarts-toolkit/features/table-enhancements/',
          items: [
            { text: '内置公式', link: '/obsidian-ravenhogwarts-toolkit/features/table-enhancements/formula' }
          ]
        }
      ]
    },
    {
      text: '高级配置',
      collapsed: false,
      items: [
        { text: '样式定制', link: '/obsidian-ravenhogwarts-toolkit/advanced/styling'},
        { text: '开发者模式', link: '/obsidian-ravenhogwarts-toolkit/advanced/developer-mode'}
      ]
    },
    {
      text: '支持',
      collapsed: true,
      items: [
        {text: '已知问题', link: '/obsidian-ravenhogwarts-toolkit/support/known-issues'}
      ]
    }
  ],
  '/obsidian-yearly-glance/': [
    {
      text: '入门',
      collapsed: false,
      items: [
        { text: '插件介绍', link: '/obsidian-yearly-glance/' },
        { text: '下载', link: '/obsidian-yearly-glance/getting-started/installation' }
      ]
    },
    {
      text: '指南',
      collapsed: false,
      items: [
        { text: '导入导出', link: ''},
        { text: '', link: ''},
        { text: '', link: ''},
        { text: '', link: ''},
        { text: '', link: ''},
      ]
    },
    {
      text: '支持',
      collapsed: true,
      items: [
        { text: '更新日志', link: ''},
      ]
    }
  ],
}