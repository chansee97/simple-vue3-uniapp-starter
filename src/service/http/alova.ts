import { useUserStore } from '@/store'
import { platform } from '@/utils/platform'
import AdapterUniapp from '@alova/adapter-uniapp'
import { createAlova } from 'alova'
import qs from 'qs'

interface Config {
  baseURL: string
  timeout?: number
}
export function createAlovaInstance(config: Config) {
  return createAlova({
    cacheFor: null,
    timeout: 10000, // 10s
    ...config,
    ...AdapterUniapp(),
    beforeRequest: (method) => {
      if (method.meta?.isFormPost) {
        method.config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        method.data = qs.stringify(method.data)
      }

      // 请求头添加平台信息
      method.config.headers.platform = platform

      // 请求头添加token
      const userStore = useUserStore()
      const { token } = userStore.userInfo
      method.config.headers.Authorization = `Bearer ${token}`

      // 请求显示loading
      uni.showLoading({
        title: '数据请求中',
        mask: true,
      })
    },
    responded: {
      onSuccess: async (response, _method) => {
        const { statusCode, data } = response as UniNamespace.RequestSuccessCallbackResult
        const userStore = useUserStore()

        if (statusCode >= 500) {
          uni.showToast({
            icon: 'none',
            title: '服务器错误',
          })
        }
        if (statusCode === 401) {
          // 401错误  -> 清理用户信息，跳转到登录页
          uni.showToast({
            icon: 'none',
            title: '登录过期，请重新登录',
          })
          userStore.clearUserInfo()
          uni.navigateTo({ url: '/pages/login/login' })
        }
        return data || null
      },
      // onError 回调是请求错误的捕获函数，onSuccess 中抛出错误不会触发 onError
      // https://alova.js.org/zh-CN/tutorial/getting-started/basic/global-interceptor
      onError: (err, _method) => {
        uni.showToast({
          icon: 'none',
          title: err.message,
        })
      },
      onComplete: async (_method) => {
        // 处理请求完成逻辑
        uni.hideLoading()
      },
    },
  })
}
