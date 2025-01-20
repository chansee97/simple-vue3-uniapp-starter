const initState = {
  username: '',
  token: '',
}
type UserInfo = typeof initState

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({ ...initState })

    const setUserInfo = (val: UserInfo) => {
      userInfo.value = val
    }

    const clearUserInfo = () => {
      userInfo.value = { ...initState }
    }
    // 一般没有reset需求，不需要的可以删除
    const reset = () => {
      userInfo.value = { ...initState }
    }
    const isLogined = computed(() => !!userInfo.value.token)

    return {
      userInfo,
      setUserInfo,
      clearUserInfo,
      isLogined,
      reset,
    }
  },
  {
    persist: true,
  },
)
