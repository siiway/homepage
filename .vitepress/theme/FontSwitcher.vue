<script setup lang="ts">
import { useData } from "vitepress";
import { computed, onMounted, onUnmounted, ref } from "vue";

type FontKey = "default" | "kai" | "sans" | "system";

const STORAGE_KEY = "siiway-font";

const { lang } = useData();

const labels = computed<Record<FontKey, string>>(() =>
  lang.value.startsWith("en")
    ? {
        default: "Default",
        kai: "LXGW WenKai",
        sans: "Noto Sans SC",
        system: "Browser default",
      }
    : {
        default: "默认",
        kai: "霞鹜文楷",
        sans: "思源黑体",
        system: "浏览器默认",
      },
);

const menuLabel = computed(() =>
  lang.value.startsWith("en") ? "Font" : "字体",
);

const order: FontKey[] = ["default", "kai", "sans", "system"];

const current = ref<FontKey>("default");
const open = ref(false);
const root = ref<HTMLElement | null>(null);

function apply(value: FontKey) {
  current.value = value;
  if (typeof document !== "undefined") {
    document.documentElement.dataset.font = value;
  }
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* ignore storage failures (private mode, etc.) */
  }
}

function select(value: FontKey) {
  apply(value);
  open.value = false;
}

function onDocClick(e: MouseEvent) {
  if (root.value && !root.value.contains(e.target as Node)) open.value = false;
}

function onKey(e: KeyboardEvent) {
  if (e.key === "Escape") open.value = false;
}

onMounted(() => {
  // Sync with whatever the early head script already applied.
  const stored = document.documentElement.dataset.font as FontKey | undefined;
  if (stored && order.includes(stored)) current.value = stored;
  document.addEventListener("click", onDocClick);
  document.addEventListener("keydown", onKey);
});

onUnmounted(() => {
  document.removeEventListener("click", onDocClick);
  document.removeEventListener("keydown", onKey);
});
</script>

<template>
  <div ref="root" class="font-switcher" :class="{ open }">
    <button
      class="font-trigger"
      type="button"
      :aria-label="menuLabel"
      :title="menuLabel"
      aria-haspopup="true"
      :aria-expanded="open"
      @click="open = !open"
    >
      <svg
        class="font-icon"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13z"
        />
      </svg>
    </button>

    <Transition name="font-flyout">
      <div v-show="open" class="font-menu" role="menu">
        <button
          v-for="key in order"
          :key="key"
          class="font-item"
          :class="{ active: current === key }"
          type="button"
          role="menuitemradio"
          :aria-checked="current === key"
          :data-font-preview="key"
          @click="select(key)"
        >
          <span class="font-check" aria-hidden="true">
            <svg
              v-if="current === key"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path
                fill="currentColor"
                d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
              />
            </svg>
          </span>
          <span class="font-label">{{ labels[key] }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.font-switcher {
  position: relative;
  display: flex;
  align-items: center;
}

/* Separate the trigger from the preceding social links / appearance toggle.
   The divider is desktop-only; in the mobile nav screen the switcher is a
   standalone full-width item that needs no leading rule. */
@media (min-width: 768px) {
  .font-switcher {
    margin-left: 8px;
    padding-left: 8px;
    border-left: 1px solid var(--vp-c-divider);
  }
}

.font-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: var(--vp-c-text-2);
  transition:
    color 0.25s,
    background-color 0.25s;
}

.font-trigger:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-default-soft);
}

.font-switcher.open .font-trigger {
  color: var(--vp-c-brand-1);
}

.font-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 168px;
  padding: 6px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
  z-index: 100;
}

.font-item {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.2;
  color: var(--vp-c-text-1);
  text-align: left;
  white-space: nowrap;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.font-item:hover {
  background-color: var(--vp-c-default-soft);
}

.font-item.active {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.font-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--vp-c-brand-1);
}

/* Preview each option in its own font so the choice is self-evident. */
.font-item[data-font-preview="kai"] .font-label {
  font-family: "LXGW WenKai Screen", system-ui, sans-serif;
}
.font-item[data-font-preview="sans"] .font-label {
  font-family: "Noto Sans SC", system-ui, sans-serif;
}
.font-item[data-font-preview="system"] .font-label {
  font-family: system-ui, sans-serif;
}

.font-flyout-enter-active,
.font-flyout-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}

.font-flyout-enter-from,
.font-flyout-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
