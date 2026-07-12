<script setup lang="ts">
import { NCard as NaiveCard } from "naive-ui/es/card";
import { computed, useAttrs } from "vue";
import { withBase } from "vitepress";

const props = defineProps<{
  title?: string;
  link?: string;
  icon?: string;
  leftIcon?: string;
  rightIcon?: string;
}>();

const attrs = useAttrs();
const leadingIcon = computed(() => props.leftIcon ?? props.icon);
const isExternal = computed(() => /^https?:\/\//.test(props.link ?? ""));
const href = computed(() => {
  if (!props.link) return undefined;
  return isExternal.value ? props.link : withBase(props.link);
});

function isRawSvg(icon?: string): icon is string {
  return !!icon && /^\s*<svg[\s>]/i.test(icon);
}
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    class="siiway-n-card"
    :class="{ 'is-link': href }"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <NaiveCard v-bind="attrs" embedded>
      <template v-if="title || leadingIcon || rightIcon" #header>
        <span class="siiway-n-card-title">
          <span
            v-if="isRawSvg(leadingIcon)"
            class="siiway-n-card-icon is-raw-svg"
            v-html="leadingIcon"
            aria-hidden="true"
          />
          <span
            v-else-if="leadingIcon"
            class="siiway-n-card-icon"
            :class="leadingIcon"
            aria-hidden="true"
          />
          <span class="siiway-n-card-title-text">{{ title }}</span>
          <span
            v-if="isRawSvg(rightIcon)"
            class="siiway-n-card-icon is-right is-raw-svg"
            v-html="rightIcon"
            aria-hidden="true"
          />
          <span
            v-else-if="rightIcon"
            class="siiway-n-card-icon is-right"
            :class="rightIcon"
            aria-hidden="true"
          />
        </span>
      </template>
      <slot />
    </NaiveCard>
  </component>
</template>

<style scoped>
.siiway-n-card {
  display: block;
  margin: 16px 0;
  color: inherit;
  text-decoration: none;
}

.siiway-n-card :deep(.n-card) {
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  transition: border-color 0.2s ease;
}

.siiway-n-card :deep(.n-card-header) {
  padding-bottom: 8px;
}

.siiway-n-card :deep(.n-card-header__main) {
  color: var(--vp-c-text-1);
  font-size: 18px;
  font-weight: 700;
}

.siiway-n-card-title {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  color: var(--vp-c-text-1);
  font-size: 18px;
  font-weight: 700;
}

.siiway-n-card-title-text {
  min-width: 0;
}

.siiway-n-card-icon {
  width: 1.1em;
  height: 1.1em;
  flex: 0 0 auto;
  color: var(--vp-c-brand-1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.siiway-n-card-icon.is-raw-svg :deep(svg) {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.siiway-n-card-icon.is-right {
  margin-left: auto;
  color: var(--vp-c-text-3);
}

.siiway-n-card :deep(.n-card__content) {
  color: var(--vp-c-text-2);
  line-height: 1.7;
}

.siiway-n-card.is-link:focus-visible {
  outline: none;
}

.siiway-n-card.is-link:hover :deep(.n-card),
.siiway-n-card.is-link:focus-visible :deep(.n-card) {
  border-color: var(--vp-c-brand-1);
}
</style>
