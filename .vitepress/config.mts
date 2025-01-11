import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SiiWay Team Home",
  description: "SiiWay Team's Official Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'People', link: '/people' },
      { text: 'GitHub', link: 'https://github.com/siiway' }
    ],

    sidebar: [
      {
        text: 'People',
        items: [
          { text: 'wyf9', link: '/people/wyf9' },
          { text: 'xhc861', link: '/people/xhc861' },
          { text: 'Dobastickrn', link: '/people/Dobastickrn' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About us', link: '/about/us' },
          { text: 'About website', link: '/about/website' }
        ]
      },
      {
        text: 'Outlinks', items: [
          { text: 'GitHub', link: 'https://github.com/siiway' },
          { text: 'Discord', link: 'https://discord.gg/mdGamAxC7U' },
          { text: 'Uptime', link: 'https://uptime.siiway.top' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/siiway/blog' }
    ]
  }
})
