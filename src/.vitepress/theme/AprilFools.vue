<script setup lang="ts">
import { ref, onMounted } from "vue";

const visible = ref(false);

onMounted(() => {
  const now = new Date();
  if (now.getMonth() === 3 && now.getDate() === 1) {
    visible.value = true;
    document.body.style.overflow = "hidden";
  }
});

function enterSite() {
  visible.value = false;
  document.body.style.overflow = "";
}

function exitSite() {
  window.location.href = "https://www.google.com";
}
</script>

<template>
  <Teleport to="body">
    <div v-if="visible" class="af-bg"></div>
    <div v-if="visible" class="af-overlay">
      <div class="af-modal">
        <div class="af-content">
          <img class="af-logo" src="/siiwayhub.svg" alt="Siiway logo" />

          <h3 class="af-heading">This is an adult website</h3>

          <p class="af-body">
            <span class="af-body-text"
              >This website contains age-restricted materials including nudity
              and explicit depictions of sexual activity. By entering, you
              affirm that you are at least 18 years of age or the age of
              majority in the jurisdiction you are accessing the website from
              and you consent to viewing sexually explicit content.</span
            >
          </p>

          <button class="af-btn af-btn-enter" @click="enterSite">
            I am 18 or older - Enter
          </button>
          <button class="af-btn af-btn-exit" @click="exitSite">
            I am under 18 - Exit
          </button>

          <br /><br /><br />

          <p class="af-bottom-text">
            <span class="af-body-text"
              >Our parental controls page explains how you can easily</span
            ><br />
            <span class="af-body-text">block access to this site.</span>
          </p>

          <br /><br />

          <div class="af-footer">
            <span class="af-copyright">&copy; siiway.org, 2026</span>
          </div>

          <p class="af-april-fools">Happy April Fools' Day! :)</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.af-bg {
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000001;
  background: #000;
}

.af-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000002;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
}

.af-modal {
  background: #000;
  max-width: 750px;
  width: 90%;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
  animation: af-fadeIn 0.3s ease;
}

@keyframes af-fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.af-content {
  padding: 40px 50px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.af-logo {
  height: 80px;
  width: auto;
  margin: 0 auto 30px;
  display: block;
  object-fit: contain;
}

.af-heading {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin: 0 0 20px;
  font-family: Arial, Helvetica, sans-serif;
}

.af-body {
  margin: 0 0 25px;
  line-height: 1.6;
}

.af-body-text {
  background-color: rgb(0, 0, 0);
  color: rgb(204, 204, 204);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}

.af-btn {
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 10px auto;
  padding: 14px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  transition:
    background-color 0.2s,
    opacity 0.2s;
  text-align: center;
  text-decoration: none;
}

.af-btn-enter {
  background-color: #f90;
  color: #000;
}

.af-btn-enter:hover {
  background-color: #ffa31a;
}

.af-btn-exit {
  background-color: #333;
  color: #ccc;
}

.af-btn-exit:hover {
  background-color: #444;
  color: #fff;
}

.af-bottom-text {
  margin: 0;
  line-height: 1.6;
}

.af-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}

.af-copyright {
  color: #666;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
}

.af-april-fools {
  margin-top: 20px;
  font-size: 11px;
  color: #444;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
}

@media (max-width: 640px) {
  .af-content {
    padding: 30px 20px;
  }

  .af-logo {
    height: 60px;
    width: auto;
  }

  .af-heading {
    font-size: 20px;
  }

  .af-btn {
    font-size: 14px;
    padding: 12px 20px;
  }
}
</style>
