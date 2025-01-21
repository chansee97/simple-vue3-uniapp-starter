import { createSSRApp } from 'vue'
import App from './App.vue'
import pinia from './store'
import { routeInterceptor } from './utils/routeInterceptor'
import '@/style/index.scss'

import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(routeInterceptor)
  return {
    app,
  }
}
