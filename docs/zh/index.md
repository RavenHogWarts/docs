---
layout: home
home: true
lang: zh-CN

hero:
  name: 文档中心
  text: 探索、学习、创造
  tagline: 收录 RavenHogwarts 开发的各类插件、软件工具及实用程序的详细教程与使用指南
  image:
    src: /logo.png
    alt: Vitest
  actions:
    - theme: alt
      text: 查看 GitHub
      link: https://github.com/RavenHogwarts
---
<script setup lang="ts">
  import Home from "../.vitepress/theme/components/Home.vue"
  import { VITE_BASE_URL } from "../.vitepress/config/share.ts"

  const categories = [
    {
      icon: 'Puzzle',
      title: 'Obsidian 插件',
      items: [
        {
          icon: 'Gavel',
          title: 'RavenHogwarts Toolkit(OTK)',
          description: '多功能工具包，提升工作效率',
          link: '/obsidian-ravenhogwarts-toolkit/'
        },
        {
          icon: 'CodeXml',
          title: 'Ace Code Editor',
          description: '使用 Ace 编辑器直接编辑代码文件',
          link: '/obsidian-ace-code-editor/'
        },
        {
          icon: 'Telescope',
          title: 'Yearly Glance',
          description: '年度事件概览，支持自定义管理',
          link: '/obsidian-yearly-glance/'
        },
        {
          icon: 'Image',
          title: 'Custom Icons',
          description: '为工作区与文档提供图标自定义',
          link: '/obsidian-custom-icons/'
        },
      ]
    }
  ]
</script>

<HomeUnderline />

<Home :categories="categories" />