---
layout: home
home: true
lang: en

hero:
  name: Documentation
  text: Explore, Learn, Create
  tagline: Comprehensive tutorials and guides for plugins, software and utilities developed by RavenHogwarts
  image:
    src: /images/avatar/logo.webp
    alt: Vitest
  actions:
    - theme: alt
      text: View on GitHub
      link: https://github.com/RavenHogwarts
---

<script setup>
  import Home from "../.vitepress/theme/components/Home.vue"

  const categories = [
    {
      icon: 'Puzzle',
      title: 'Obsidian Plugins',
      items: [
        
        {
          icon: 'CodeXml',
          title: 'Ace Code Editor',
          description: 'Edit code files directly using the Ace editor',
          link: '/en/obsidian-ace-code-editor/'
        },
        {
          icon: 'Image',
          title: 'Custom Icons',
          description: 'Customize icons for workspaces and documents',
          link: '/obsidian-custom-icons/'
        },
        {
          icon: 'TableOfContents',
          title: 'Next TOC',
          description: 'New Generation Floating Table of Contents Navigation',
          link: '/obsidian-next-toc/'
        },
        {
          icon: 'Gavel',
          title: 'RavenHogwarts Toolkit(OTK)',
          description: 'Multi-functional toolkit for enhanced productivity',
          link: '/obsidian-ravenhogwarts-toolkit/'
        },
        {
          icon: 'Telescope',
          title: 'Yearly Glance',
          description: 'Annual events overview with customizable management.',
          link: '/obsidian-yearly-glance/'
        },
        
      ]
    },
    {
      icon: 'Wrench',
      title: 'Utilities',
      items: [
        {
          icon: 'FolderOpen',
          title: 'Obsidian Folder Opener',
          description: 'Right-click to open folders as Obsidian vaults in Windows',
          link: '/obsidian-folder-opener/'
        }
      ]
    }
  ]
</script>

<HomeUnderline />

<Home :categories="categories" />