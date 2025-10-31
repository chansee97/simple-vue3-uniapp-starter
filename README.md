## 🚀 simple-vue3-uniapp-starter

一个 uniapp 精简快速开始模版，使用 uniapp + vue3 + typescript + unocss

## 特性

- 🧩 **Wot UI** - 深度整合 Wot Design Uni 组件库
- 🚦 **Router** - 基于 uni-mini-router 的路由管理
- 🌐 **Alova** - 优雅的网络请求方案
- 🎨 **UnoCSS** - 原子化 CSS 引擎
- 🍍 **Pinia** - 状态管理与持久化
- 📊 **Echarts** - 数据可视化图表
- 🔄 **异步分包** - 支持跨分包异步组件引用

### 安装依赖

```bash
pnpm install
```

### 开发

基础调试库配置版本：3.7.7
微信开发者工具 -> 详情 -> 本地设置 -> 基础调试库

- 微信小程序，可以使用下面命令启动，其他平台可查看 package.json 中的 scripts

```bash
# H5
pnpm dev

# 微信小程序
pnpm dev:mp-weixin

# 支付宝小程序
pnpm dev:mp-alipay
```

### 构建

```bash
# H5
pnpm build

# 微信小程序
pnpm build:mp-weixin
```

## 异步跨分包引用

项目支持 uni-app 异步跨分包组件引用，通过添加 `?async` 后缀实现组件按需加载，避免重复打包。

### 使用方法

```typescript
// 在组件路径后添加 ?async 查询参数，实现跨分包异步引用
import BarChart from '@/subAsyncEcharts/components/BarChart.vue?async'
import PieChart from '@/subAsyncEcharts/components/PieChart.vue?async'
```
