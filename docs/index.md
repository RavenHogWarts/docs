 ---
layout: home
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

onMounted(() => {
  const router = useRouter()
  // 获取浏览器语言设置
  const userLang = navigator.language || navigator.userLanguage
  
  // 根据用户语言重定向
  if (userLang.includes('zh')) {
    router.go('/docs/zh/')
  } else {
    router.go('/docs/en/')
  }
})
</script>