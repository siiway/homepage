---
layout: false
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  // 访问根域名时，按浏览器语言跳转到对应语言版本
  const lang = (navigator.language || navigator.userLanguage || 'en').toLowerCase()
  router.go(lang.startsWith('zh') ? '/zh/' : '/en/')
})
</script>
