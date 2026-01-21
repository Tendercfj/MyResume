# MyResume

一个基于 `Vue 3 + Vite + TypeScript` 的在线简历/个人主页项目，包含首页轮播、分区导航、关于我/技能/经历/项目/联系我等模块，并集成了 `TailwindCSS` 与 `vite-plugin-svg-icons`（SVG 雪碧图）。

## 技术栈

- 框架：`Vue 3`
- 构建：`Vite 5`
- 语言：`TypeScript`
- 路由：`vue-router 4`
- 状态管理：`Pinia`
- 样式：`TailwindCSS` + `PostCSS`（`autoprefixer`）
- 动效/组件：`typed.js`、`swiper`、`vite-plugin-svg-icons`
- 代码规范：`ESLint 9`（flat config）

## 功能概览

- 顶部封面轮播 + 打字机文案（`src/components/swiper/mySwiper.vue`）
- 页面分区导航 + 滚动高亮（`src/components/nav/myNav.vue`）
- 简历内容分区：关于我/技能/经历/项目/联系我（`src/views/HomeView.vue`）
- 背景音乐开关（`src/components/bgmusic/myMusic.vue`）
- SVG 图标组件（`src/components/SvgIcon.vue`）+ 自动注册（`vite-plugin-svg-icons`）
- GitHub Pages 自动部署（`.github/workflows/deploy.yml`）

## 环境要求

- Node.js：建议 `>= 18`（GitHub Actions 使用 Node 18）
- 包管理器：推荐 `npm`（仓库同时存在 `package-lock.json` 且 CI 用 `npm install`）

## 快速开始

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

构建生产包：

```bash
npm run build
```

本地预览生产包：

```bash
npm run preview
```

## 项目配置与数据入口

- 页面结构入口：`src/views/HomeView.vue`
- 简历文案/内容数据：`src/json/json.js`
- 轮播图/导航/关于我信息等：`src/store/resumeStore.js`
- 全局样式与 Tailwind 引入：`src/style.css`
- favicon：`public/resume.svg`（在 `index.html` 中引用）

## SVG 图标使用

本项目使用 `vite-plugin-svg-icons` 扫描 `src/assets/svg` 下的 SVG 并注册为雪碧图，同时提供 `SvgIcon` 组件进行渲染：

- 放置 SVG：`src/assets/svg/<name>.svg`
- 使用：

```vue
<SvgIcon name="music" />
```

说明：

- `vite.config.js` 中 `symbolId` 为 `icon-[dir]-[name]`
- `src/components/SvgIcon.vue` 默认 `prefix="icon"`，最终引用 `#icon-xxx`

如果你把 SVG 放在子目录中（例如 `src/assets/svg/social/github.svg`），通常需要用 `name="social-github"`（具体以生成的 `symbolId` 为准）。

## GitHub Pages 部署

仓库已提供 GitHub Actions 工作流：`.github/workflows/deploy.yml`，在 `main` 分支 push 后会自动：

1. `npm install`
2. `npm run build`
3. 将 `dist/` 发布到 `gh-pages` 分支

### 重要：Base 路径（仓库名变更时需同步修改）

当前配置面向 GitHub Pages 的子路径部署（仓库名 `MyResume`）：

- `vite.config.js`：生产环境 `base` 为 `"/MyResume/"`
- `src/router/index.js`：`createWebHistory("/MyResume/")`

如果你的仓库名或部署路径不同，请同时修改这两处为对应路径；若部署到根域名（如自定义域或 `username.github.io` 根目录），通常将它们改为 `"/"`。

## 目录结构

```text
.
├─ .github/workflows/deploy.yml   # GitHub Pages 自动部署
├─ public/                        # 静态资源（不会被打包处理）
├─ src/
│  ├─ assets/                     # 图片、SVG 等资源
│  ├─ components/                 # 业务组件（轮播、导航、模块区块等）
│  ├─ directives/                 # 指令（如懒加载）
│  ├─ json/                       # 简历文案/数据
│  ├─ router/                     # 路由配置
│  ├─ store/                      # Pinia store
│  ├─ views/                      # 页面
│  ├─ App.vue
│  └─ main.js
├─ eslint.config.js
├─ tailwind.config.js
└─ vite.config.js
```

## 常见问题

### 1) `v-lazy-load` 从哪里来？

项目里有指令实现：`src/directives/lazyLoad.js`。如果你需要在页面上使用 `v-lazy-load`，请确保已在入口文件注册（示例）：

```js
// src/main.js
import { lazyLoad } from "./directives/lazyLoad";
app.directive("lazy-load", lazyLoad);
```
