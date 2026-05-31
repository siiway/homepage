<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isBelow960 = useMediaQuery("(max-width: 959px)");

function toggleSidebar() {
  const btn = document.querySelector<HTMLElement>(".VPLocalNav .menu");
  if (btn) {
    btn.click();
    return;
  }
  const navScreenBtn = document.querySelector<HTMLButtonElement>(
    ".VPNavBarHamburger"
  );
  if (navScreenBtn) {
    navScreenBtn.click();
  }
}
</script>

<template>
  <button
    v-if="isBelow960"
    class="sidebar-toggle-btn"
    aria-label="Toggle sidebar"
    @click="toggleSidebar"
  >
    <span class="vpi-align-left sidebar-toggle-icon" />
  </button>
</template>

<style scoped>
.sidebar-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.sidebar-toggle-btn:hover {
  color: var(--vp-c-brand-1);
}

.sidebar-toggle-icon {
  font-size: 18px;
}
</style>
