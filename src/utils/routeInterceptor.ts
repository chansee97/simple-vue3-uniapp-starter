import { useUserStore } from '@/store'

const loginRoute = '/pages/login/index'

// 不需要登录的白名单路由
const whiteList = [
  loginRoute, // 登录页
  '/pages/login/username', // 账号登录页
  '/pages/login/privacy', // 隐私协议
  '/pages/login/protocol', // 用户协议
  '/pages/index/index', // 首页
  '/pages/foo/foo', // demo页，可删除
]

function isLogined() {
  const userStore = useUserStore()
  return userStore.isLogined
}

// 黑名单登录拦截器 - （适用于大部分页面不需要登录，少部分页面需要登录）
const navigateToInterceptor = {
  // 注意，这里的url是 '/' 开头的，如 '/pages/index/index'，跟 'pages.json' 里面的 path 不同
  invoke({ url }: { url: string }) {
    const path = url.split('?')[0]

    if (whiteList.includes(path)) {
      return true
    }
    const hasLogin = isLogined()
    if (hasLogin) {
      return true
    }

    // 未登录，提示错误信息
    uni.showToast({
      title: '请先登录后访问页面',
      icon: 'none',
    })
    // 跳转到登录页
    const redirectRoute = `${loginRoute}?redirect=${encodeURIComponent(url)}`
    uni.navigateTo({ url: redirectRoute })

    return false
  },
}

export const routeInterceptor = {
  install() {
    uni.addInterceptor('navigateTo', navigateToInterceptor)
    uni.addInterceptor('reLaunch', navigateToInterceptor)
    uni.addInterceptor('redirectTo', navigateToInterceptor)
    uni.addInterceptor('switchTab', navigateToInterceptor)
  },
}
