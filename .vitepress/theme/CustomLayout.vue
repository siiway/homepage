<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import AprilFools from "./AprilFools.vue";
import EasterEgg from "./EasterEgg.vue";
import LangRedirect from "./LangRedirect.vue";
import NavSocialLinks from "./NavSocialLinks.vue";
import RouteEnhancements from "./RouteEnhancements.vue";
import SidebarToggle from "./SidebarToggle.vue";
import ThemeLayout from "./ThemeLayout.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <ThemeLayout>
    <template #nav-bar-title-before>
      <SidebarToggle />
    </template>
    <template #nav-bar-content-after>
      <NavSocialLinks />
    </template>
    <template #nav-screen-content-after>
      <NavSocialLinks />
    </template>
    <template #not-found>
      <LangRedirect />
    </template>
    <template #layout-bottom>
      <RouteEnhancements />
      <AprilFools />
      <EasterEgg />
    </template>
  </ThemeLayout>
</template>
