<script setup lang="ts">
import { useData } from "vitepress";
import { onBeforeUnmount, onMounted, ref } from "vue";
import typewriterData from "../data/typewriter";

const { lang } = useData();
const displayText = ref("");

let timer = 0;
let currentTextIndex = 0;

const config = typewriterData[lang.value];
if (!config) {
  throw new Error(`No typewriter config for locale: ${lang.value}`);
}

const texts = config.texts;
const cursor = config.cursor;
const cursorChar = ref(cursor);
const typeSpeed = config.typeSpeed;
const deleteSpeed = config.deleteSpeed;
const pauseBeforeDelete = config.pauseBeforeDelete;
const pauseBeforeNext = config.pauseBeforeNext;

cursorChar.value = cursor;

enum Phase {
  TYPING,
  PAUSED_AFTER_TYPE,
  DELETING,
  PAUSED_AFTER_DELETE,
}

let phase = Phase.TYPING;

function clearTimer() {
  clearTimeout(timer);
}

function schedule(fn: () => void, delay: number) {
  clearTimer();
  timer = window.setTimeout(fn, delay);
}

function typeNextChar() {
  const text = texts[currentTextIndex];
  const i = displayText.value.length;
  if (i < text.length) {
    displayText.value = text.slice(0, i + 1);
    schedule(typeNextChar, typeSpeed);
  } else {
    phase = Phase.PAUSED_AFTER_TYPE;
    schedule(startDelete, pauseBeforeDelete);
  }
}

function startDelete() {
  phase = Phase.DELETING;
  deletePrevChar();
}

function deletePrevChar() {
  if (displayText.value.length > 0) {
    displayText.value = displayText.value.slice(0, -1);
    schedule(deletePrevChar, deleteSpeed);
  } else {
    phase = Phase.PAUSED_AFTER_DELETE;
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    schedule(startTyping, pauseBeforeNext);
  }
}

function startTyping() {
  phase = Phase.TYPING;
  typeNextChar();
}

onMounted(() => {
  startTyping();
});

onBeforeUnmount(() => {
  clearTimer();
});
</script>

<template>
  <p class="hero-tagline typewriter">
    <span class="typewriter-text">{{ displayText }}</span
    ><span class="typewriter-cursor">{{ cursorChar }}</span>
  </p>
</template>

<style scoped>
.typewriter-cursor {
  animation: tw-blink 1s step-end infinite;
}

@keyframes tw-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
