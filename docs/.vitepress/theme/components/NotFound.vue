<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <div class="error-icon">
        <AlertTriangle v-if="errorType === 'translation_missing'" :size="80" />
        <FileX v-else-if="errorType === 'page_deleted'" :size="80" />
        <MapPin v-else-if="errorType === 'wrong_path'" :size="80" />
        <Edit3 v-else-if="errorType === 'typo'" :size="80" />
        <Move v-else-if="errorType === 'moved'" :size="80" />
        <HelpCircle v-else :size="80" />
      </div>
      <h1>{{ errorInfo.title }}</h1>
      <p class="description">{{ errorInfo.description }}</p>
      
      <!-- 错误类型提示 -->
      <div v-if="errorInfo.type" class="error-type">
        <span class="error-badge">
          <AlertCircle :size="16" />
          {{ errorInfo.typeLabel }}
        </span>
      </div>
      
      <div class="actions">
        <button v-if="showLanguageSwitch" @click="goToDefaultLanguage" class="btn-primary">
          <Languages :size="18" />
          {{ switchLanguageText }}
        </button>
        <button @click="goHome" class="btn-secondary">
          <Home :size="18" />
          {{ goHomeText }}
        </button>
        <button @click="goBack" class="btn-tertiary">
          <ArrowLeft :size="18" />
          {{ goBackText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute, useData } from 'vitepress'
import { 
  AlertTriangle, 
  FileX, 
  MapPin, 
  Edit3, 
  Move, 
  HelpCircle,
  AlertCircle,
  Languages,
  Home,
  ArrowLeft
} from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()
const { site } = useData()

// 判断当前是否为英文路径
const isEnPath = computed(() => route.path.startsWith('/en/'))
// 当前语言：英文路径为 'en'，其他为 'zhHans'（默认中文）
const currentLang = computed(() => isEnPath.value ? 'en' : 'zhHans')

// 错误类型枚举
const ERROR_TYPES = {
  TRANSLATION_MISSING: 'translation_missing',
  PAGE_NOT_FOUND: 'page_not_found',
  WRONG_PATH: 'wrong_path',
  GENERAL: 'general'
}

// 多语言文本配置
const messages = {
  zhHans: {
    title: '页面未找到',
    description: '抱歉，您访问的页面不存在。',
    switchLanguageText: '切换到英文版',
    goHomeText: '返回首页',
    goBackText: '返回上级',
    errorTypes: {
      [ERROR_TYPES.TRANSLATION_MISSING]: {
        title: '页面未翻译',
        description: '该页面可能尚未翻译完成，您可以切换到英文版本查看。',
        typeLabel: '翻译缺失'
      },
      [ERROR_TYPES.PAGE_NOT_FOUND]: {
        title: '页面不存在',
        description: '该页面可能已被删除或移动到其他位置。',
        typeLabel: '页面不存在'
      },
      [ERROR_TYPES.WRONG_PATH]: {
        title: '路径错误',
        description: '请检查URL是否正确，或者该页面可能已更改路径。',
        typeLabel: '路径错误'
      },
      [ERROR_TYPES.GENERAL]: {
        title: '页面未找到',
        description: '抱歉，您访问的页面不存在。',
        typeLabel: '未知错误'
      }
    }
  },
  en: {
    title: 'Page Not Found',
    description: 'Sorry, the page you are looking for does not exist.',
    switchLanguageText: 'Switch to Chinese',
    goHomeText: 'Go Home',
    goBackText: 'Go Back',
    errorTypes: {
      [ERROR_TYPES.TRANSLATION_MISSING]: {
        title: 'Page Not Translated',
        description: 'This page may not be translated yet, you can switch to Chinese version.',
        typeLabel: 'Translation Missing'
      },
      [ERROR_TYPES.PAGE_NOT_FOUND]: {
        title: 'Page Not Found',
        description: 'This page may have been deleted or moved to another location.',
        typeLabel: 'Page Not Found'
      },
      [ERROR_TYPES.WRONG_PATH]: {
        title: 'Wrong Path',
        description: 'Please check if the URL is correct, or the page may have changed its path.',
        typeLabel: 'Wrong Path'
      },
      [ERROR_TYPES.GENERAL]: {
        title: 'Page Not Found',
        description: 'Sorry, the page you are looking for does not exist.',
        typeLabel: 'Unknown Error'
      }
    }
  }
}

// 检测错误类型 - 简化版本，适用于VitePress
const detectErrorType = () => {
  const path = route.path
  
  // 检查是否为翻译缺失
  if (checkTranslationMissing()) {
    return ERROR_TYPES.TRANSLATION_MISSING
  }
  
  // 检查是否为深层路径（可能是路径错误）
  if (checkDeepPath(path)) {
    return ERROR_TYPES.WRONG_PATH
  }
  
  return ERROR_TYPES.GENERAL
}

// 检查翻译缺失 - 基于路径模式判断
const checkTranslationMissing = () => {
  const path = route.path
  
  // 如果是英文路径，检查是否存在对应的中文路径模式
  if (isEnPath.value) {
    // 英文路径通常有对应的中文版本
    return true
  } else {
    // 中文路径，检查是否可能有英文版本
    // 这里可以根据实际的文档结构来判断
    return path.includes('obsidian-') // 插件相关页面通常有英文版
  }
}

// 检查是否为深层路径
const checkDeepPath = (path) => {
  const pathParts = path.split('/').filter(Boolean)
  // 如果路径层级超过2层，可能是路径错误
  return pathParts.length > 2
}

// 错误信息
const errorType = ref(ERROR_TYPES.GENERAL)
const errorInfo = computed(() => {
  const errorConfig = messages[currentLang.value].errorTypes[errorType.value]
  return {
    title: errorConfig.title,
    description: errorConfig.description,
    typeLabel: errorConfig.typeLabel,
    type: errorType.value
  }
})

// 是否显示语言切换按钮
const showLanguageSwitch = computed(() => {
  return errorType.value === ERROR_TYPES.TRANSLATION_MISSING
})

// 计算属性
const switchLanguageText = computed(() => messages[currentLang.value].switchLanguageText)
const goHomeText = computed(() => messages[currentLang.value].goHomeText)
const goBackText = computed(() => messages[currentLang.value].goBackText)

// 切换到默认语言
const goToDefaultLanguage = () => {
  let targetPath
  
  if (isEnPath.value) {
    // 从英文切换到中文
    targetPath = route.path.replace('/en/', '/')
    if (targetPath === '/') {
      targetPath = '/'
    }
  } else {
    // 从中文切换到英文
    if (route.path === '/') {
      targetPath = '/en/'
    } else {
      targetPath = '/en' + route.path
    }
  }
  
  router.go(targetPath)
}

// 返回首页
const goHome = () => {
  const homePath = isEnPath.value ? '/en/' : '/'
  router.go(homePath)
}

// 智能返回上级页面
const goBack = () => {
  const path = route.path
  const pathParts = path.split('/').filter(Boolean)
  
  if (pathParts.length <= 1) {
    // 如果已经在根级别，返回首页
    goHome()
    return
  }
  
  // 构建父级路径
  let parentPath
  if (isEnPath.value) {
    // 英文路径
    if (pathParts.length === 2) {
      // /en/something -> /en/
      parentPath = '/en/'
    } else {
      // /en/a/b/c -> /en/a/b/
      const parentParts = pathParts.slice(0, -1)
      parentPath = '/' + parentParts.join('/') + '/'
    }
  } else {
    // 中文路径
    if (pathParts.length === 1) {
      // /something -> /
      parentPath = '/'
    } else {
      // /a/b/c -> /a/b/
      const parentParts = pathParts.slice(0, -1)
      parentPath = '/' + parentParts.join('/') + '/'
    }
  }
  
  router.go(parentPath)
}

// 页面加载时的初始化
onMounted(() => {
  // 检测错误类型
  errorType.value = detectErrorType()
  
  console.log(`404 Error detected: ${errorType.value} for path: ${route.path}`)
})
</script>

<style scoped>
.not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
}

.not-found-content {
  text-align: center;
  max-width: 600px;
}

.error-icon {
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-3);
  display: flex;
  justify-content: center;
}

.not-found-content h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.error-type {
  margin-bottom: 1.5rem;
}

.error-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-dark);
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn-primary,
.btn-secondary,
.btn-tertiary {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

.btn-primary:hover {
  background-color: var(--vp-c-brand-2);
}

.btn-secondary {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.btn-secondary:hover {
  background-color: var(--vp-c-gray-light-4);
}

.btn-tertiary {
  background-color: transparent;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider-light);
}

.btn-tertiary:hover {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

@media (max-width: 640px) {
  .not-found-content h1 {
    font-size: 2rem;
  }
  
  .actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary,
  .btn-secondary,
  .btn-tertiary {
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }
}
</style>