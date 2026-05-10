<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import AprilFools from "./AprilFools.vue";
import EasterEgg from "./EasterEgg.vue";
import RouteEnhancements from "./RouteEnhancements.vue";
import ThemeLayout from "./ThemeLayout.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <ThemeLayout>
    <template #layout-bottom>
      <RouteEnhancements />
      <AprilFools />
      <EasterEgg />
    </template>
  </ThemeLayout>
</template>
