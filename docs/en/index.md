---
layout: home
home: true
lang: en

hero:
  name: Documentation
  text: Explore, Learn, Create
  tagline: Comprehensive tutorials and guides for plugins, software and utilities developed by RavenHogwarts
  image:
    src: /images/avatar/logo.png
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
          icon: 'Gavel',
          title: 'RavenHogwarts Toolkit(OTK)',
          description: 'Multi-functional toolkit for enhanced productivity',
          link: '/obsidian-ravenhogwarts-toolkit/'
        },
        {
          icon: 'CodeXml',
          title: 'Ace Code Editor',
          description: 'Edit code files directly using the Ace editor',
          link: '/obsidian-ace-code-editor/'
        },
        {
          icon: 'Telescope',
          title: 'Yearly Glance',
          description: 'Annual events overview with customizable management.',
          link: '/obsidian-yearly-glance/'
        },
        {
          icon: 'Image',
          title: 'Custom Icons',
          description: 'Customize icons for workspaces and documents',
          link: '/obsidian-custom-icons/'
        },
      ]
    }
  ]
</script>

<HomeUnderline />

<Home :categories="categories" />