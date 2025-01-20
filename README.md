## 🚀 simple-vue3-uniapp-starter

一个 uniapp 精简快速开始模版，使用 uniapp + vue3 + typescript + unocss

## 特性

- 整合 [unocss](https://github.com/unocss/unocss) 作为 css 框架
- 整合 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 自动导入 API
- 整合 [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp) 做类名转换
- 使用 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 作为基础配置，用户可根据需求自行修改
- 使用 simple-git-hooks + lint-staged 拦截 git 提交并检查代码
- 使用 @uni-helper/vite-plugin-uni-manifest 自动生成 manifest.json
- 使用 [wot-design-uni](https://wot-design-uni.cn/) 作为组件库
- 使用 [alova](https://alova.js.org/) 进行接口请求和管理

## 在本地运行

安装依赖

```bash
pnpm install
```

启动项目

- 微信小程序，可以使用下面命令启动，其他平台可查看 package.json 中的 scripts

```bash
pnpm dev:mp-weixin
```
