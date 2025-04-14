import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SiiWay Team Home",
  description: "SiiWay Team's Official Site",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-sZEG1jYPbp' }] // baidu verify
    // ↑ <meta name="baidu-site-verification" content="codeva-sZEG1jYPbp" />
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Members', link: '/members' },
      { text: 'About', link: '/about/contact' }
    ],

    sidebar: [
      {
        text: 'Projects / 项目',
        items: [
          { text: 'Projects / 项目列表', link: '/projects' }
        ]
      },
      {
        text: 'Members / 成员',
        items: [
          { text: 'xhc861', link: '/members/xhc861' },
          { text: 'wyf9', link: '/members/wyf9' },
          { text: 'Dobastickrn', link: '/members/Dobastickrn' },
          { text: 'Shattered', link: '/members/Shattered' },
          { text: 'NT-AUTHORITY', link: '/members/nt' }
        ]
      },
      {
        text: 'About / 关于',
        items: [
          { text: 'Contact / 联系', link: '/about/contact' },
          { text: 'About us / 关于我们', link: '/about/us' },
          { text: 'About website / 关于此网站', link: '/about/website' },
          { text: 'Join us / 招新公告', link: '/about/join' }
        ]
      },
      {
        text: 'Outlinks / 外链', items: [
          { text: 'QQ Group / QQ 群', link: 'https://qm.qq.com/q/HcXaJ87W2O' },
          { text: 'QQ Channel / QQ 频道', link: 'https://pd.qq.com/s/ap03pjd80' },
          { text: 'Discord', link: 'https://discord.gg/mdGamAxC7U' },
          { text: 'Telegram Group / Telegram 群组', link: 'https://t.me/siiwayofficial' },
          { text: 'Telegram Channel / Telegram 频道', link: 'https://t.me/siiwaychan' },
          { text: 'GitHub', link: 'https://github.com/siiway' },
          { text: 'Uptime / 状态页', link: 'https://uptime.siiway.top' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'qq', ariaLabel: 'QQ Group', link: 'https://qm.qq.com/q/HcXaJ87W2O' },
      { icon: 'discord', ariaLabel: 'Discord', link: 'https://discord.gg/mdGamAxC7U' },
      { icon: 'telegram', ariaLabel: 'Telegram Group', link: 'https://t.me/siiwayofficial' },
      { icon: 'github', ariaLabel: 'GitHub', link: 'https://github.com/siiway' }
    ],

    editLink: {
      pattern: 'https://github.com/siiway/blog/edit/main/:path',
      text: 'Edit on GitHub'
    }
  },
  lastUpdated: true,
  sitemap: {
    hostname: 'https://siiway.top'
  }
})
