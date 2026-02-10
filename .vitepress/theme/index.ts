import DefaultTheme from 'vitepress/theme'
import './style.css' // 引入你的自定义样式
import type { Theme } from 'vitepress'


export default {
    extends: DefaultTheme
} satisfies Theme
