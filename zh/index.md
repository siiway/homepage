---
layout: home
---

<script setup>
import Typewriter from "../.vitepress/theme/Typewriter.vue"
//const timelineData = [
//  { year: '2024', title: 'SiiWay Cloud 2.0', content: '登错号了...', tag: 'Latest' },
//  { year: '2023', title: '开源社区成立', content: '10k follow?', tag: 'Milestone' },
//  { year: '2022', title: '项目孵化', content: '随便说点什么。', tag: 'Origin' },
//  { year: '2021', title: 'Hello World', content: '一切的开始', tag: 'Start' }
//]
</script>

<!-- 装饰色带 -->
<div class="ribbon ribbon-tl"></div>
<div class="ribbon ribbon-br"></div>

<div class="custom-layout">
  
  <!-- 左侧主区域：包含 Hero 文字 + 按钮 + 横向时间轴 -->
  <div class="left-main-section">
    <!-- 上半部分：文字 & 按钮 -->
    <div class="hero-content">
      <h1 class="hero-name"><span class="hero-word-siiway">SiiWay</span> <span class="hero-word-team">Team</span></h1>
      <Typewriter />
      <div class="hero-actions">
        <!-- 按钮1: GitHub主页 -->
        <a class="VPButton medium brand" href="https://github.com/siiway">
          <span class="svg-icon" style="--svg-icon: url('/svg/github.svg')" aria-hidden="true"></span>
          <span>GitHub 主页</span>
        </a>
        <!-- 按钮2: Members -->
        <a class="VPButton medium alt" href="/zh/members">
          <span class="svg-icon" style="--svg-icon: url('/svg/group.svg')" aria-hidden="true"></span>
          <span>成员简介</span>
        </a>
        <!-- 按钮3: Contact -->
        <a class="VPButton medium alt" href="/zh/about/contact">
          <span class="svg-icon" style="--svg-icon: url('/svg/mail.svg')" aria-hidden="true"></span>
          <span>联系我们</span>
        </a>
      </div>
    </div>
    <!-- 下半部分：横向时间轴 -->
    <!-- <div class="horizontal-timeline">
      <div class="timeline-track">
        <div v-for="(item, index) in timelineData" :key="index" class="h-timeline-item">
          <div class="h-line"></div> <! -- 连接线 -- >
          <div class="h-dot"></div>  <! -- 圆点 -- >
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

  <!-- 右侧区域：纯净的悬浮 Logo -->
  <div class="right-visual-section">
    <div class="hero-logo-wrapper">
       <img src="/favicon.svg" alt="SiiWay Logo" class="hero-logo" />
    </div>
  </div>

</div>

