import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig(() => {
  // 判断当前构建目标平台
  // Cloudflare Pages 会设置 CF_PAGES 环境变量
  // GitHub Actions 可以设置自定义环境变量
  // const isCloudflare = process.env.CF_PAGES === "1";
  const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
  
  // Cloudflare 用根路径，GitHub Pages 用子路径
  const base = isGitHubActions ? "/MyResume/" : "/";

  // console.log("Building for:", isCloudflare ? "Cloudflare" : isGitHubActions ? "GitHub Pages" : "local");
  // console.log("Base path:", base);

  return {
    base,
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
        symbolId: "icon-[dir]-[name]",
        customDomId: "__svg__icons__dom__",
      }),
    ],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});