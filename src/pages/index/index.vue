<script setup lang="ts">
import Tabbar from '@/components/Tabbar.vue'
import { useUserStore } from '@/store'

const userStore = useUserStore()

function toFoo() {
  uni.navigateTo({
    url: '/pages/foo/foo',
  })
}

function setInfo() {
  userStore.setUserInfo({
    username: '张三',
    token: 'token-test-0000000000000000000',
  })
}
</script>

<template>
  <view class="flex flex-col items-center justify-center gap-10rpx">
    <wd-button>
      图标示例 <i class="i-icon-park-outline:add-computer" />
    </wd-button>
    <wd-button @click="toFoo">
      测试请求
    </wd-button>
    <view class="flex gap-1">
      <wd-button @click="setInfo">
        设置userInfo
      </wd-button>
      <wd-button @click="userStore.clearUserInfo">
        清除userInfo
      </wd-button>
    </view>
    <view>
      {{ userStore.userInfo }}
    </view>
  </view>
  <Tabbar name="index" />
</template>

<style lang="scss" scoped></style>
