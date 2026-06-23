---
layout: home
---

<script setup>
import Typewriter from "../.vitepress/theme/Typewriter.vue"
// 这里是英文版的时间轴数据，如果需要修改文案请在这里改
// const timelineData = [
//   { year: '2024', title: 'SiiWay Cloud 2.0', content: 'Logged into wrong account...', tag: 'Latest' },
//   { year: '2023', title: 'Open Source', content: '10k followers?', tag: 'Milestone' },
//   { year: '2022', title: 'Incubation', content: 'Just saying something.', tag: 'Origin' },
//   { year: '2021', title: 'Hello World', content: 'Where it all started.', tag: 'Start' }
// ]
</script>

<!-- 装饰色带 -->
<div class="ribbon ribbon-tl"></div>
<div class="ribbon ribbon-br"></div>

<div class="custom-layout">
  
  <!-- 左侧主区域 -->
  <div class="left-main-section">
    <!-- Hero 内容 -->
    <div class="hero-content">
      <h1 class="hero-name"><span class="hero-word-siiway">SiiWay</span> <span class="hero-word-team">Team</span></h1>
      <p class="hero-tagline">Welcome to SiiWay Team's Official Homepage!</p>
      <!-- 按钮区域 -->
      <div class="hero-actions">
        <!-- 按钮1: GitHub -->
        <a class="VPButton medium brand" href="https://github.com/siiway" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.79.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
          <span>GitHub</span>
        </a>
        <!-- 按钮2: Members -->
        <a class="VPButton medium alt" href="/en/members">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          <span>Members</span>
        </a>
        <!-- 按钮3: Contact -->
        <a class="VPButton medium alt" href="/en/about/contact">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          <span>Contact</span>
        </a>
      </div>
    </div>
    <!-- 横向时间轴 -->
    <!-- <div class="horizontal-timeline">
      <div class="timeline-track">
        <div v-for="(item, index) in timelineData" :key="index" class="h-timeline-item">
          <div class="h-line"></div>
          <div class="h-dot"></div>
          <div class="h-content-card">
            <div class="h-meta">
              <span class="h-year">{{ item.year }}</span>
              <span v-if="item.tag" class="h-tag">{{ item.tag }}</span>
            </div>
            <h4 class="h-title">{{ item.title }}</h4>
            <p class="h-desc">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div> -->
  </div>

  <!-- 右侧区域：Logo -->
  <div class="right-visual-section">
    <div class="hero-logo-wrapper">
       <img src="/favicon.svg" alt="SiiWay Logo" class="hero-logo" />
    </div>
  </div>

</div>

