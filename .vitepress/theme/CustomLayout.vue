<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import AprilFools from "./AprilFools.vue";
import EasterEgg from "./EasterEgg.vue";
import ThemeLayout from "./ThemeLayout.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <ThemeLayout>
    <template #layout-bottom>
      <AprilFools />
      <EasterEgg />
    </template>
  </ThemeLayout>
</template>
