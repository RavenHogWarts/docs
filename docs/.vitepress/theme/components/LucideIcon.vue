<template>
  <component 
    :is="iconComponent" 
    v-bind="$attrs" 
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
  />
</template>

<script setup>
import { computed, getCurrentInstance } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: 24
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  strokeWidth: {
    type: [String, Number],
    default: 2
  }
})

const instance = getCurrentInstance()
const lucideIcons = instance?.appContext.config.globalProperties.$lucideIcons

const iconComponent = computed(() => {
  if (!lucideIcons || !props.name) {
    return null
  }
  
  // 获取对应的图标组件
  const IconComponent = lucideIcons[props.name]
  
  if (!IconComponent) {
    console.warn(`Icon "${props.name}" not found in lucide-vue-next`)
    // 返回一个默认图标或者 null
    return lucideIcons.HelpCircle || null
  }
  
  return IconComponent
})
</script>

<style>
.lucide.inline-icon {
  display: inline-flex;
}
</style>