import { enNav } from '../navbar'
import { enSidebar } from '../sidebar'
import dayjs from 'dayjs'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { VITE_BASE_URL } from './share'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: { // 主题设置
    nav: enNav,
    sidebar: enSidebar, // 侧边栏
    footer: { // 页脚
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2024-${dayjs().format("YYYY")} RavenHogWarts.`
    },
    outline: { // 大纲显示 1-6 级标题
      level: [1, 6],
    },
    editLink: {
      pattern: `https://github.com/RavenHogWarts/docs/edit/master/${VITE_BASE_URL == '/' ? 'docs/' : ''}:path`,
      text: 'Edit this page on GitHub'
    },
  }
}