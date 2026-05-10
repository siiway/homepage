<script setup lang="ts">
import { useRouter } from "vitepress";
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

const router = useRouter();
const progress = ref(0);
const visible = ref(false);

let creepRaf = 0;
let hideTimer = 0;
let resetTimer = 0;
let prevBefore: typeof router.onBeforeRouteChange;
let prevAfter: typeof router.onAfterRouteChange;

function start() {
  cancelAnimationFrame(creepRaf);
  clearTimeout(hideTimer);
  clearTimeout(resetTimer);
  visible.value = true;
  progress.value = 8;
  const step = () => {
    if (progress.value < 80) {
      progress.value += (80 - progress.value) * 0.06;
      creepRaf = requestAnimationFrame(step);
    }
  };
  creepRaf = requestAnimationFrame(step);
}

function done() {
  cancelAnimationFrame(creepRaf);
  progress.value = 100;
  hideTimer = window.setTimeout(() => {
    visible.value = false;
    resetTimer = window.setTimeout(() => {
      progress.value = 0;
    }, 300);
  }, 200);
}

function triggerRouteFade() {
  const el = document.querySelector<HTMLElement>(".VPContent");
  if (!el) return;
  el.classList.remove("route-fade-in");
  // Force reflow so the animation restarts on every navigation.
  void el.offsetWidth;
  el.classList.add("route-fade-in");
}

function enhanceImages() {
  const imgs = document.querySelectorAll<HTMLImageElement>(
    ".VPDoc img:not([data-skeleton])",
  );
  imgs.forEach((img) => {
    img.setAttribute("data-skeleton", "");
    if (img.complete && img.naturalWidth > 0) return;
    img.classList.add("img-loading");
    const onDone = () => {
      img.classList.remove("img-loading");
      img.classList.add("img-loaded");
      img.removeEventListener("load", onDone);
      img.removeEventListener("error", onDone);
    };
    img.addEventListener("load", onDone);
    img.addEventListener("error", onDone);
  });
}

onMounted(async () => {
  prevBefore = router.onBeforeRouteChange;
  prevAfter = router.onAfterRouteChange;

  router.onBeforeRouteChange = async (to) => {
    const r = await prevBefore?.(to);
    if (r === false) return false;
    start();
  };
  router.onAfterRouteChange = async (to) => {
    await prevAfter?.(to);
    done();
    await nextTick();
    triggerRouteFade();
    enhanceImages();
  };

  await nextTick();
  enhanceImages();
});

onBeforeUnmount(() => {
  router.onBeforeRouteChange = prevBefore;
  router.onAfterRouteChange = prevAfter;
  cancelAnimationFrame(creepRaf);
  clearTimeout(hideTimer);
  clearTimeout(resetTimer);
});
</script>

<template>
  <div
    class="route-progress"
    :class="{ 'is-visible': visible }"
    :style="{ transform: `scaleX(${progress / 100})` }"
    aria-hidden="true"
  />
</template>
