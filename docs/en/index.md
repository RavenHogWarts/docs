---
layout: home
hero:
  name: RavenHogwarts Documentation
  text: Explore, Learn, Create
  tagline: Comprehensive documentation for developers and users
  actions:
    - theme: alt
      text: View on GitHub
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
        <h3>Obsidian Plugins</h3>
      </div>
      <div class="category-items">
        <div class="category-item">
          <a href="/docs/en/obsidian-ravenhogwarts-toolkit/" class="item">
            <div class="item-content">
              <div class="item-header">
                <span class="icon">
                  <Gavel />
                </span>
                <h4>RavenHogwarts Toolkit(OTK)</h4>
              </div>
              <p>Multi-functional toolkit plugin</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
