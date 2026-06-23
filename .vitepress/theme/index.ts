import DefaultTheme from "vitepress/theme";
import "./style.css";
import type { Theme } from "vitepress";
import CustomLayout from "./CustomLayout.vue";
import NCard from "./NCard.vue";
import NCardRow from "./NCardRow.vue";

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    app.component("NCard", NCard);
    app.component("NCardRow", NCardRow);
  },
} satisfies Theme;
