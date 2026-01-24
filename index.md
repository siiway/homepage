---
layout: false
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  // 访问根域名时，直接跳到中文版
  router.go('/zh_cn/')
})
</script>
