<!-- 官方的外观切换组件： https://vitepress.dev/zh/guide/extending-default-theme#on-appearance-toggle -->
<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { nextTick, provide } from "vue";

const { isDark } = useData();
const { Layout } = DefaultTheme;
const isBrowser =
  typeof window !== "undefined" && typeof document !== "undefined";

const enableTransitions = () =>
  isBrowser &&
  "startViewTransition" in document &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ];

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: "ease-in",
      fill: "forwards",
      pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
    },
  );
});
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <slot name="nav-bar-title-before" />
    </template>
    <template #nav-bar-content-after>
      <slot name="nav-bar-content-after" />
    </template>
    <template #nav-screen-content-after>
      <slot name="nav-screen-content-after" />
    </template>
    <template #layout-bottom>
      <slot name="layout-bottom" />
    </template>
  </Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
