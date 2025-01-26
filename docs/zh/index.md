---
layout: home
hero:
  name: RavenHogwarts 文档中心
  text: 探索、学习、创造
  tagline: 为开发者和用户提供全面的文档支持
  actions:
    - theme: alt
      text: 查看 GitHub
      link: https://github.com/RavenHogwarts
---
<script setup>
  import { Gavel, Puzzle } from 'lucide-vue-next'
  import "../styles/home.css"
</script>

<div class="home-container">
  <div class="product-categories">
    <div class="category">
      <div class="category-header">
        <span class="category-icon">
          <Puzzle />
        </span>
        <h3>Obsidian 插件</h3>
      </div>
      <div class="category-items">
        <div class="category-item">
          <a href="/docs/zh/obsidian-ravenhogwarts-toolkit/" class="item">
            <div class="item-content">
              <div class="item-header">
                <span class="icon">
                  <Gavel />
                </span>
                <h4>RavenHogwarts Toolkit(OTK)</h4>
              </div>
              <p>多功能工具箱插件</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
