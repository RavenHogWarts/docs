<script setup>
  import * as icons from 'lucide-vue-next'
  const iconMap = icons
  // 定义组件的属性
  defineProps({
    // 可以通过属性传入不同的产品类别
    categories: {
      type: Array,
      default: () => []
    }
  })
</script>

<template>
  <div class="home-container">
    <div class="product-categories">
      <div v-for="(category, catIndex) in categories" :key="`category-${catIndex}`" class="category">
        <div class="category-header">
          <span class="category-icon">
            <component :is="iconMap[category.icon]" />
          </span>
          <h3>{{ category.title }}</h3>
        </div>
        <div class="category-items">
          <div v-for="(item, itemIndex) in category.items" :key="`item-${itemIndex}`" class="category-item">
            <a :href="item.link" class="item">
              <div class="item-content">
                <div class="item-header">
                  <span class="icon">
                    <component :is="iconMap[item.icon]" />
                  </span>
                  <h4>{{ item.title }}</h4>
                </div>
                <p>{{ item.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* -----------------------------
 * Home Page Container
 * ---------------------------- */
 .home-container {
  width: 100%;
}

/* -----------------------------
 * Product Categories Container
 * ---------------------------- */
.home-container .product-categories {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.home-container .product-categories a {
  text-decoration: none;
}

/* -----------------------------
 * Category Section
 * ---------------------------- */
.home-container .category {
  margin-bottom: 3rem;
}

/* Category Header */
.home-container .category-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;
  gap: 0.5rem;
}

.home-container .category h3 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--vp-c-text-1);
  font-weight: 600;
}

/* Category Grid */
.home-container .category-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 1.5rem;
  padding: 0.5rem;
}

.home-container .category-item {
  display: contents;
}

/* -----------------------------
 * Item Card
 * ---------------------------- */
.home-container .item {
  position: relative;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  color: inherit;
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  height: 100%;
  display: block;
}

.home-container .item:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.home-container .item-content {
  padding: 1.5rem;
}

.home-container .item-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.home-container .item h4 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
}

.home-container .item p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

/* -----------------------------
 * Icons
 * ---------------------------- */
.home-container .lucide-icon {
  width: 1.5em;
  height: 1.5em;
  stroke-width: 1.5;
  color: var(--vp-c-text-1);
}

.home-container .category-icon .lucide-icon {
  width: 1.8rem;
  height: 1.8rem;
}

.home-container .item .lucide-icon {
  width: 2rem;
  height: 2rem;
}

/* -----------------------------
 * Dark Mode
 * ---------------------------- */
.home-container .dark .item {
  background: var(--vp-c-bg-soft);
}

.home-container .dark .item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* -----------------------------
 * Responsive
 * ---------------------------- */
@media (max-width: 640px) {
  .home-container .product-categories {
    padding: 1rem 0.5rem;
  }

  .home-container .category-items {
    padding: 0;
    gap: 1rem;
  }
  
  .home-container .category-header {
    padding: 0;
  }
  
  .home-container .item-content {
    padding: 1rem;
  }
}
</style>