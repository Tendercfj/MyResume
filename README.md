# MyResume

一个基于 `Vue 3 + Vite + TypeScript` 的在线简历/个人主页项目，包含首页轮播、分区导航、关于我/技能/经历/项目/联系我等模块，并集成了 `Tailwind CSS`、SVG 雪碧图与动效能力。

## 技术栈

- 框架：`Vue 3`
- 构建：`Vite 5`
- 语言：`TypeScript`
- 路由：`vue-router 4`
- 状态管理：`Pinia`
- 样式：`Tailwind CSS` + `PostCSS`（`autoprefixer`）
- 组件/动效：`swiper`、`typed.js`、`vue3-lottie`、`reka-ui`、`vite-plugin-svg-icons`
- 代码规范：`ESLint 9`（flat config，见 `eslint.config.ts`）

## 功能概览

- 顶部封面轮播 + 打字机文案（`src/components/swiper/mySwiper.vue`）
- 页面分区导航 + 滚动高亮（`src/components/nav/myNav.vue`）
- 简历内容分区：关于我/技能/经历/项目/联系我（`src/views/HomeView.vue`）
- 背景音乐开关（`src/components/bgmusic/myMusic.vue`）
- SVG 图标组件（`src/components/SvgIcon.vue`）+ 自动注册（`vite-plugin-svg-icons`）
- 区块进入视口动效（`v-lazy-load`：`src/directives/lazyLoad.ts`）
- GitHub Pages 自动部署（`.github/workflows/deploy.yml`）

## 环境要求

- Node.js：建议 `>= 18`（GitHub Actions 使用 Node 18）
- 包管理器：推荐 `pnpm`（仓库提供 `pnpm-lock.yaml`）

## 快速开始

安装依赖：

```bash
pnpm install
```

启动开发环境：

```bash
pnpm dev
```

构建生产包：

```bash
pnpm build
```

本地预览生产包：

```bash
pnpm preview
```

提示：当前路由基路径固定为 `"/MyResume/"`（见 `src/router/index.ts`）。本地开发若访问根路径白屏/404，可直接打开 `http://localhost:5173/MyResume/`。

## 项目配置与数据入口

- 页面结构入口：`src/views/HomeView.vue`（组合各个区块组件）
- 简历文案/内容数据：`src/json/json.ts`（技能/经历/项目/联系方式等）
- 轮播图/导航/关于我卡片等：`src/store/resumeStore.ts`
- 全局样式与 Tailwind 引入：`src/style.css`
- 入口文件：`src/main.ts`（注册路由、Pinia、指令与 SVG 雪碧图）
- favicon：`public/resume.svg`（在 `index.html` 中引用）

## SVG 图标使用

本项目使用 `vite-plugin-svg-icons` 扫描 `src/assets/svg` 下的 SVG 并注册为雪碧图，同时提供 `SvgIcon` 组件进行渲染：

- 放置 SVG：`src/assets/svg/<name>.svg`
- 使用：

```vue
<SvgIcon name="music" />
```

说明：

- `vite.config.ts` 中 `symbolId` 为 `icon-[dir]-[name]`
- `src/main.ts` 需要引入 `virtual:svg-icons-register` 以完成注册（项目已配置）
- `src/components/SvgIcon.vue` 默认 `prefix="icon"`，最终引用 `#icon-xxx`

如果你把 SVG 放在子目录中（例如 `src/assets/svg/social/github.svg`），通常需要用 `name="social-github"`（具体以生成的 `symbolId` 为准）。

## `v-lazy-load` 指令使用

项目内置了一个基于 `IntersectionObserver` 的进入视口动效指令：`src/directives/lazyLoad.ts`，并已在 `src/main.ts` 全局注册为 `v-lazy-load`。

使用示例：

```vue
<section v-lazy-load="{ animation: 'fade-up', duration: 680, delay: 140 }">
  ...
</section>
```

## GitHub Pages 部署

仓库已提供 GitHub Actions 工作流：`.github/workflows/deploy.yml`，在 `main` 分支 push 后会自动：

1. `npm install`
2. `npm run build`
3. 将 `dist/` 发布到 `gh-pages` 分支

### 重要：Base 路径（仓库名变更时需同步修改）

当前配置面向 GitHub Pages 的子路径部署（仓库名 `MyResume`）：

- `vite.config.ts`：生产环境 `base` 为 `"/MyResume/"`
- `src/router/index.ts`：`createWebHistory("/MyResume/")`

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
│  └─ main.ts
├─ eslint.config.ts
├─ tailwind.config.ts
└─ vite.config.ts
```

## 常见问题

### 1) `v-lazy-load` 从哪里来？

项目里有指令实现：`src/directives/lazyLoad.ts`。如果你需要在页面上使用 `v-lazy-load`，请确保已在入口文件注册（项目已完成，示例）：

```ts
// src/main.ts
import { lazyLoad } from "./directives/lazyLoad";
app.directive("lazy-load", lazyLoad);
```

### 2) 为什么本地开发需要访问 `/MyResume/`？

当前路由基路径写死为 `createWebHistory("/MyResume/")`（见 `src/router/index.ts`），因此开发/预览时建议直接打开 `http://localhost:<port>/MyResume/`。如果你希望本地始终以根路径访问，可将路由基路径改为 `"/"` 并同步调整 `vite.config.ts` 的生产 `base` 配置。

### 3) `index.html` 里为什么有外链脚本？

`index.html` 通过 CDN 引入了 APlayer / MetingJS 相关资源，用于音乐播放能力（见 `src/components/bgmusic/myMusic.vue`）。若你需要离线/内网部署，请将相关资源改为本地依赖或移除对应能力。
