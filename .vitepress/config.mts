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
      { text: 'Members', link: '/members' },
      { text: 'About', link: '/about/contact' }
    ],

    sidebar: [
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
          { text: 'QQ Group / 群组', link: '/t/qq' },
          { text: 'QQ Channel / 频道', link: '/t/pd' },
          { text: 'Discord', link: '/t/dc' },
          { text: 'Telegram Group / 群组', link: '/t/tg' },
          { text: 'Telegram Channel / 频道', link: '/t/tgc' },
          { text: 'GitHub', link: '/t/gh' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'qq', ariaLabel: 'QQ Group', link: '/t/qq' },
      { icon: 'discord', ariaLabel: 'Discord', link: '/t/dc' },
      { icon: 'telegram', ariaLabel: 'Telegram Group', link: '/t/tg' },
      { icon: 'github', ariaLabel: 'GitHub', link: '/t/gh' }
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
