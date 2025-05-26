import { DefaultTheme } from 'vitepress'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

// 中文导航
export const zhNav: DefaultTheme.NavItem[] = [
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