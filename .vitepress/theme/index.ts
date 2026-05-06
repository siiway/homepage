import DefaultTheme from "vitepress/theme";
import "./style.css";
import type { Theme } from "vitepress";
import CustomLayout from "./CustomLayout.vue";

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
} satisfies Theme;
