<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const siiwayCount = ref(0);
const teamCount = ref(0);
const show = ref(false);

const onDocClick = (e: MouseEvent) => {
  const el = (e.target as HTMLElement | null)?.closest?.(
    ".hero-word-siiway, .hero-word-team",
  ) as HTMLElement | null;
  if (!el) return;
  if (el.classList.contains("hero-word-siiway")) siiwayCount.value++;
  else if (el.classList.contains("hero-word-team")) teamCount.value++;

  if (siiwayCount.value >= 6 && teamCount.value >= 7) {
    show.value = true;
    siiwayCount.value = 0;
    teamCount.value = 0;
  }
};

const onKey = (e: KeyboardEvent) => {
  if (show.value && (e.key === "Escape" || e.key === "Enter")) close();
};

const close = () => {
  show.value = false;
};

onMounted(() => {
  document.addEventListener("click", onDocClick);
  document.addEventListener("keydown", onKey);
});
onUnmounted(() => {
  document.removeEventListener("click", onDocClick);
  document.removeEventListener("keydown", onKey);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="ee-fade">
      <div v-if="show" class="ee-overlay" @click.self="close">
        <div
          class="ee-window"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ee-title"
        >
          <div class="ee-titlebar">
            <div class="ee-traffic">
              <button
                class="ee-light ee-close"
                aria-label="Close"
                @click="close"
              ></button>
              <span class="ee-light ee-min" aria-hidden="true"></span>
              <span class="ee-light ee-max" aria-hidden="true"></span>
            </div>
            <div id="ee-title" class="ee-title">SiiWay</div>
          </div>
          <div class="ee-body">
            <img src="/favicon.svg" class="ee-icon" alt="" />
            <div class="ee-headline">six seven!</div>
            <div class="ee-message">6 7</div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.ee-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.ee-window {
  width: 360px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow:
    0 24px 60px -12px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  font-family:
    -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue",
    system-ui, sans-serif;
  color: #1d1d1f;
}

:global(.dark) .ee-window {
  background: #2c2c2e;
  color: #f5f5f7;
  box-shadow:
    0 24px 60px -12px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(255, 255, 255, 0.08);
}

/* Titlebar */
.ee-titlebar {
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, #ebebeb 0%, #d6d6d6 100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 0 12px;
}

:global(.dark) .ee-titlebar {
  background: linear-gradient(to bottom, #3a3a3c 0%, #2c2c2e 100%);
  border-bottom-color: rgba(0, 0, 0, 0.6);
}

.ee-title {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: #4d4d4d;
  pointer-events: none;
}

:global(.dark) .ee-title {
  color: #d8d8d8;
}

/* Traffic lights */
.ee-traffic {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 8px;
}

.ee-light {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 0.5px solid rgba(0, 0, 0, 0.12);
  padding: 0;
  cursor: default;
  display: inline-block;
}

.ee-close {
  background: #ff5f57;
  cursor: pointer;
}

.ee-close:hover {
  background: #ff453a;
}

.ee-min {
  background: #febc2e;
}

.ee-max {
  background: #28c840;
}

/* Body */
.ee-body {
  padding: 28px 24px 32px;
  text-align: center;
}

.ee-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 14px;
  display: block;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.12));
}

.ee-headline {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
}

.ee-message {
  font-size: 13px;
  color: #6e6e73;
  letter-spacing: 1px;
}

:global(.dark) .ee-message {
  color: #98989d;
}

/* Transitions */
.ee-fade-enter-active,
.ee-fade-leave-active {
  transition: opacity 0.18s ease;
}

.ee-fade-enter-from,
.ee-fade-leave-to {
  opacity: 0;
}

.ee-fade-enter-active .ee-window,
.ee-fade-leave-active .ee-window {
  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.ee-fade-enter-from .ee-window {
  transform: scale(0.9);
}

.ee-fade-leave-to .ee-window {
  transform: scale(0.96);
}
</style>
