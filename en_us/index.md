---
layout: home
---

<script setup>
// 这里是英文版的时间轴数据，如果需要修改文案请在这里改
const timelineData = [
  { year: '2024', title: 'SiiWay Cloud 2.0', content: 'Logged into wrong account...', tag: 'Latest' },
  { year: '2023', title: 'Open Source', content: '10k followers?', tag: 'Milestone' },
  { year: '2022', title: 'Incubation', content: 'Just saying something.', tag: 'Origin' },
  { year: '2021', title: 'Hello World', content: 'Where it all started.', tag: 'Start' }
]
</script>

<!-- 装饰色带 -->
<div class="ribbon ribbon-tl"></div>
<div class="ribbon ribbon-br"></div>

<div class="custom-layout">
  
  <!-- 左侧主区域 -->
  <div class="left-main-section">
    <!-- Hero 内容 -->
    <div class="hero-content">
      <h1 class="hero-name">SiiWay Team Home</h1>
      <p class="hero-tagline">Welcome to SiiWay Team's Official Homepage!</p>
      <!-- 按钮区域 -->
      <div class="hero-actions">
        <!-- 按钮1: GitHub -->
        <a class="VPButton medium brand" href="https://github.com/siiway" target="_blank" rel="noopener">GitHub</a>
        <!-- 按钮2: Members -->
        <a class="VPButton medium alt" href="/en_us/members">Members</a>
        <!-- 按钮3: Contact -->
        <a class="VPButton medium alt" href="/en_us/about/contact">Contact</a>
      </div>
    </div>
    <!-- 横向时间轴 -->
    <div class="horizontal-timeline">
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
    </div>
  </div>

  <!-- 右侧区域：Logo -->
  <div class="right-visual-section">
    <div class="hero-logo-wrapper">
       <img src="/favicon.svg" alt="SiiWay Logo" class="hero-logo" />
    </div>
  </div>

</div>
