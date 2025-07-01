<template>
  <img 
    :src="currentSrc" 
    :alt="alt"
    :class="className"
    :style="style"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

interface Props {
  lightSrc: string
  darkSrc?: string
  alt?: string
  className?: string
  style?: string | Record<string, any>
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  className: '',
  style: ''
})

// 获取当前主题
const { isDark } = useData()

// 计算当前应该显示的图片源
const currentSrc = computed(() => {
  // 如果没有提供暗色图片，始终使用亮色图片
  if (!props.darkSrc) {
    return props.lightSrc
  }
  
  // 根据当前主题返回对应的图片
  return isDark.value ? props.darkSrc : props.lightSrc
})
</script>