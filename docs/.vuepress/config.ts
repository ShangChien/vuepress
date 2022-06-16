import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/bacterial.svg' }]
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "Vast Lab",
      description: "Computational chemistry tools, chemical information display",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "万事屋",
      description: "计算化学工具，化学信息展示",
    },
  },
  theme,
});
