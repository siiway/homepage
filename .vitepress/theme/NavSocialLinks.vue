<script setup lang="ts">
import { useData } from "vitepress";
import { computed, nextTick, onMounted, onUnmounted, ref } from "vue";
import socialLinksData from "../data/social-links";
import type { SocialIcon } from "../data/social-links";

const { lang } = useData();
const open = ref(false);
const el = ref<HTMLElement>();

const label = computed(() => (lang.value === "zh" ? "社交链接" : "Social Links"));

const links = computed(() => socialLinksData[lang.value] ?? []);

function isFileIcon(icon: SocialIcon): icon is { src: string } {
  return typeof icon === "object";
}

function fileIconStyle(icon: { src: string }) {
  return { "--icon": `url('${icon.src}')` };
}

onMounted(async () => {
  await nextTick();
  if (!el.value) return;
  const spans = el.value.querySelectorAll<HTMLElement>("[data-icon]");
  spans.forEach((span) => {
    const icon = span.dataset.icon!;
    const style = getComputedStyle(span);
    if ((style.maskImage || (style as any).webkitMaskImage) === "none") {
      span.style.setProperty(
        "--icon",
        `url('https://api.iconify.design/simple-icons/${icon}.svg')`,
      );
    }
  });
});

function onBlur() {
  open.value = false;
}

function clickOutside(e: MouseEvent) {
  if (el.value && !el.value.contains(e.target as Node)) {
    open.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", clickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", clickOutside);
});
</script>

<template>
  <div
    ref="el"
    class="nav-social-links"
    :class="{ open }"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <button
      type="button"
      class="trigger"
      aria-haspopup="true"
      :aria-expanded="open"
      :aria-label="label"
      @click="open = !open"
      @blur="onBlur"
    >
      <span class="link-icon file-icon" aria-hidden="true" />
      <span class="trigger-label">{{ label }}</span>
      <span class="vpi-chevron-down chevron" :class="{ rotated: open }" />
    </button>

    <Transition name="dropdown">
      <div v-show="open" class="dropdown-panel">
        <a
          v-for="link in links"
          :key="link.link"
          class="social-item"
          :href="link.link"
          target="_blank"
          rel="noopener"
          :aria-label="link.label"
        >
          <span class="item-icon">
            <span
              v-if="isFileIcon(link.icon)"
              class="file-icon"
              :style="fileIconStyle(link.icon)"
              aria-hidden="true"
            />
            <span
              v-else
              :class="`vpi-social-${link.icon}`"
              :data-icon="link.icon"
              aria-hidden="true"
            />
          </span>
          <span class="item-label">{{ link.label }}</span>
        </a>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.nav-social-links {
  position: relative;
  display: flex;
  align-items: center;
  height: var(--vp-nav-height);
}

.trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
  height: 38px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.25s, background-color 0.25s;
  white-space: nowrap;
}

.trigger:hover {
  color: var(--vp-c-brand-1);
}

.link-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  --icon: url("/svg/share.svg");
}

.chevron {
  font-size: 12px;
  transition: transform 0.25s;
}

.chevron.rotated {
  transform: rotate(180deg);
}

.dropdown-panel {
  position: absolute;
  top: calc(var(--vp-nav-height) - 4px);
  right: 0;
  min-width: 180px;
  padding: 8px;
  background: var(--vp-nav-bg-color);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  z-index: 30;
}

.dark .dropdown-panel {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.social-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.2s, color 0.2s;
}

.social-item:hover {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: inherit;
}

.file-icon,
.item-icon :deep([class^="vpi-social-"]) {
  width: 20px;
  height: 20px;
  background-color: currentColor;
}

.file-icon {
  display: inline-block;
  mask: var(--icon) center / contain no-repeat;
  -webkit-mask: var(--icon) center / contain no-repeat;
}

.link-icon.file-icon {
  width: 16px;
  height: 16px;
}

.item-label {
  white-space: nowrap;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>

<style>
.VPNavBar .nav-social-links {
  display: none;
}

@media (min-width: 768px) {
  .VPNavBar .nav-social-links {
    display: flex;
  }
}
</style>
