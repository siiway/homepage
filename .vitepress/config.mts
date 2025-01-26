import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SiiWay Team Home",
  description: "SiiWay Team's Official Site",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-sZEG1jYPbp' }] // <meta name="baidu-site-verification" content="codeva-sZEG1jYPbp" />
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Member', link: '/member' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Projects', link: '/projects' }
        ]
      },
      {
        text: 'Member',
        items: [
          { text: 'xhc861', link: '/member/xhc861' },
          { text: 'wyf9', link: '/member/wyf9' },
          { text: 'Dobastickrn', link: '/member/Dobastickrn' },
          { text: 'Shattered', link: '/member/Shattered' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'Contact', link: '/about/contact' },
          { text: 'About us', link: '/about/us' },
          { text: 'About website', link: '/about/website' },
          { text: 'Join us', link: '/about/join' }
        ]
      },
      {
        text: 'Outlinks', items: [
          { text: 'GitHub', link: 'https://github.com/siiway' },
          { text: 'Discord', link: 'https://discord.gg/mdGamAxC7U' },
          { text: 'QQ', link: 'https://qm.qq.com/q/HcXaJ87W2O' },
          { text: 'Uptime', link: 'https://uptime.siiway.top' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'qq', link: 'https://qm.qq.com/q/HcXaJ87W2O' },
      { icon: 'discord', link: 'https://discord.gg/mdGamAxC7U' },
      { icon: 'github', link: 'https://github.com/siiway' }
    ]
  },
  lastUpdated: true,
  sitemap: {
    hostname: 'https://www.siiway.top'
  }
})
