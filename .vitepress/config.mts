import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bitcoin Cash Simple",
  description: "Bitcoin Cash para todos",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Contacto", link: "/contacto" },
    ],

    sidebar: [
      {
        text: "",
        items: [
          { text: "Primeros pasos", link: "/primeros_pasos" },
          { text: "Privacidad", link: "/privacidad" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    logo: "/bch.png",
  },
});
