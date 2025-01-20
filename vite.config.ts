import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from './build/plugins'
import { createViteProxy } from './build/proxy'
import { serviceConfig } from './service.config'

// https://vitejs.dev/config/
export default async ({ mode }: { mode: ServiceEnvType }) => {
  const env = loadEnv(mode, resolve(__dirname, 'env'), '')

  const envConfig = serviceConfig[mode]

  const { UNI_PLATFORM } = process.env

  return defineConfig({
    envDir: './env', // 自定义env目录
    plugins: await createVitePlugins(),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      host: '0.0.0.0',
      hmr: true,
      proxy:
        (env.VITE_HTTP_PROXY === 'Y' && UNI_PLATFORM === 'h5') ? createViteProxy(envConfig) : undefined,
    },
    build: {
      // 非开发环境时，关闭sourcemap
      sourcemap: mode === 'development',
      target: 'es6',
      // 开发环境不用压缩
      minify: mode === 'development' ? false : 'terser',
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: true,
        },
      },
    },
    define: {
      __UNI_PLATFORM__: JSON.stringify(UNI_PLATFORM),
    },
  })
}
