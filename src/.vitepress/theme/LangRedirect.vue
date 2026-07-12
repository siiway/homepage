<!--
  当用户访问没有语言前缀的路径 (例如 /about/contact) 时，
  VitePress 会把它当作 404 渲染到此 not-found 槽。
  这里用 router.go 进行客户端跳转 (不刷新整页)，
  跳转到浏览器语言对应的版本 (/zh 或 /en)。

  若路径本身已带 /zh 或 /en 前缀却仍未找到，则是真正的 404，
  此时展示常规的 404 内容。
-->
<script setup lang="ts">
import { useData, useRoute, useRouter, withBase } from "vitepress";
import { computed, onMounted, ref } from "vue";

const router = useRouter();
const route = useRoute();
const { theme } = useData();

// 是否正在重定向 (用于决定展示「跳转中」还是常规 404)
const redirecting = ref(false);

function resolveTarget(rawPath: string): string | null {
  const cleanPath = rawPath.replace(/\.html$/, "");
  // 已带语言前缀 -> 真正的 404，不重定向
  if (/^\/(zh|en)(\/|$)/.test(cleanPath)) return null;

  const lang = (
    navigator.language ||
    (navigator as any).userLanguage ||
    "en"
  ).toLowerCase();
  const prefix = lang.startsWith("zh") ? "/zh" : "/en";
  // 根路径已由 index.md 处理，这里兜底拼接
  return prefix + cleanPath;
}

onMounted(() => {
  const target = resolveTarget(route.path);
  if (target) {
    redirecting.value = true;
    router.go(target);
  }
});

const homeLink = computed(() => {
  const lang = (
    navigator.language ||
    (navigator as any).userLanguage ||
    "en"
  ).toLowerCase();
  return lang.startsWith("zh") ? "/zh/" : "/en/";
});
</script>

<template>
  <!-- 重定向期间留空，避免 404 内容一闪而过 -->
  <div v-if="!redirecting" class="NotFound">
    <p class="code">{{ theme.notFound?.code ?? "404" }}</p>
    <h1 class="title">{{ theme.notFound?.title ?? "PAGE NOT FOUND" }}</h1>
    <div class="divider" />
    <blockquote class="quote">
      {{
        theme.notFound?.quote ??
        "But if you don't change your direction, and if you keep looking, you may end up where you are heading."
      }}
    </blockquote>

    <div class="action">
      <a
        class="link"
        :href="withBase(homeLink)"
        :aria-label="theme.notFound?.linkLabel ?? 'go to home'"
      >
        {{ theme.notFound?.linkText ?? "Take me home" }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}

.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}

.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
}

.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.quote {
  margin: 0 auto;
  max-width: 256px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.action {
  padding-top: 20px;
}

.link {
  display: inline-block;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 16px;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition:
    border-color 0.25s,
    color 0.25s;
}

.link:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-2);
}
</style>
