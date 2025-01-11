 ---
layout: home
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

onMounted(() => {
  const router = useRouter()
  // 获取浏览器语言设置，转换为小写并处理多种可能的格式
  const userLang = (navigator.language || navigator.userLanguage || '').toLowerCase()
  
  // 检查是否包含中文相关的语言代码
  const isZhLanguage = userLang.includes('zh') || 
                      userLang.includes('cn') || 
                      userLang.startsWith('zh-') || 
                      userLang.startsWith('cn-')
  
  // 根据用户语言重定向
  if (isZhLanguage) {
    router.go('/docs/zh/')
  } else {
    router.go('/docs/en/')
  }
})
</script>