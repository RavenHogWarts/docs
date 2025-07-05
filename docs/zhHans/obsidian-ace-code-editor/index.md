# Ace Code Editor

::: info 简介
在 Obsidian 中直接便捷编辑代码文件，提供语法高亮和基础补全功能的强大代码编辑器插件。

**项目地址**：[GitHub - obsidian-ace-code-editor](https://github.com/RavenHogWarts/obsidian-ace-code-editor)

**商店安装**：[Obsidian 插件商店](https://obsidian.md/plugins?id=ace-code-editor)
:::

## 主要特性

- **语法高亮**：支持 110+ 种语言的语法高亮
- **主题适配**：20+ 种编辑器主题，自动适配 Obsidian 明暗模式
- **智能补全**：基于语言特性的代码补全和提示
- **多种键盘模式**：支持 Vim、Emacs、VS Code、Sublime 等编辑器快捷键
- **搜索替换**：支持正则表达式的搜索替换功能
- **CSS 片段管理**：可视化管理 Obsidian CSS 自定义样式
- **文件预览**：支持代码文件在 markdown 的引用预览
- **实时保存**：自动保存编辑内容，防止数据丢失

## 使用场景

### 开发者
- **脚本管理**：管理自动化脚本和工具
- **配置文件**：编辑各种配置文件
- **代码片段**：收集和管理代码片段

### 主题开发者
- **CSS 开发**：可视化编辑 Obsidian 主题
- **片段管理**：轻松管理多个 CSS 片段
- **实时预览**：即时查看样式效果

### 笔记用户
- **技术文档**：在笔记中嵌入和编辑代码
- **学习记录**：记录编程学习过程
- **项目文档**：维护项目相关的技术文档

## 创作团队

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/RavenHogwarts.png',
    name: 'RavenHogwarts',
    title: 'Creator & Developer',
    links: [
      { icon: 'github', link: 'https://github.com/RavenHogwarts' },
      { icon: '', link: 'https://space.bilibili.com/343113645' }
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />