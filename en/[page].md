---
head:
  - - meta
    - name: robots
      content: noindex, nofollow
  - - meta
    - http-equiv: X-Robots-Tag
      content: none
---

<!-- @content -->

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vitepress'

onMounted(() => {
  const router = useRouter()
  const route = useRoute()

  const newPath = route.path.replace(/^\/en\//, '/zh/').replace('.html', '')

  router.go(newPath)
})
</script>
