<template>
  <div class="siiway-n-card-row">
    <slot />
  </div>
</template>

<style scoped>
.siiway-n-card-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 16px 0;
}

.siiway-n-card-row :deep(.siiway-n-card) {
  margin: 0;
}
</style>
