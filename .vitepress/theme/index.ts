import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

export default {
    extends: DefaultTheme,
    enhanceApp() {
        if (typeof window !== 'undefined') {
            const searchParams = new URLSearchParams(window.location.search)
            const forceSecret = searchParams.has('secret')
            const random = Math.random()
            if (forceSecret || random < 0.001) {
                const userLang = navigator.language || navigator.languages?.[0] || 'en'
                const isChinese = userLang.toLowerCase().startsWith('zh')

                const targetUrl = isChinese
                    ? 'https://www.bilibili.com/video/BV1GJ411x7h7'
                    : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

                window.location.href = targetUrl
            }
        }
    }
} satisfies Theme
