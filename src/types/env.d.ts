/**
 *后台服务的环境类型
 * - development: 开发环境
 * - production: 生产环境
 */
type ServiceEnvType = 'development' | 'test' | 'production'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent
  export default component
}
interface ImportMetaEnv {
  /** 网站标题，应用名称 */
  readonly VITE_APP_TITLE: string
  /** H5是否需要代理 */
  readonly VITE_HTTP_PROXY: 'Y' | 'N'
  /** 后端服务的环境类型 */
  readonly MODE: ServiceEnvType
}

interface ImportMeta {
  env: ImportMetaEnv
}

declare const __UNI_PLATFORM__:
  | 'h5'
  | 'app'
  | 'mp-alipay'
  | 'mp-baidu'
  | 'mp-jd'
  | 'mp-kuaishou'
  | 'mp-lark'
  | 'mp-qq'
  | 'mp-toutiao'
  | 'mp-weixin'
  | 'quickapp-webview'
  | 'quickapp-webview-huawei'
  | 'quickapp-webview-union'
