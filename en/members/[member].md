<!-- @content -->

<script setup>
import { useRouter } from 'vitepress';
const router = useRouter();

const newPath = window.location.pathname.replace('/en/', '/zh/').replace('.html', '');
router.go(newPath)
</script>