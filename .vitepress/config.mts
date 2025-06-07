import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SiiWay Team Home",
  description: "SiiWay Team's Official Site",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
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
          { text: 'NT-AUTHORITY', link: '/members/nt' },
          { text: 'Murasame', link: '/members/Murasame' }
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
          { text: 'QQ Group / 群组', link: 'https://siiway.top/t/qq' },
          { text: 'QQ Channel / 频道', link: 'https://siiway.top/t/pd' },
          { text: 'Discord', link: 'https://siiway.top/t/dc' },
          { text: 'GitHub', link: 'https://siiway.top/t/gh' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'qq', ariaLabel: 'QQ', link: 'https://siiway.top/t/qq' },
      { icon: 'discord', ariaLabel: 'Discord', link: 'https://siiway.top/t/dc' },
      { icon: 'github', ariaLabel: 'GitHub', link: 'https://siiway.top/t/gh' }
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
