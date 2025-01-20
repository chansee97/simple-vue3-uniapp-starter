<script setup lang="ts">
const foo = ref(0)

function toFoo() {
  uni.navigateTo({
    url: '/pages/foo/foo',
  })
}
function toLogin() {
  uni.navigateTo({
    url: '/pages/login/index',
  })
}
</script>

<template>
  <view class="min-h-100vh flex flex-col items-center justify-center gap-10rpx">
    <image class="h-200rpx w-200rpx" src="/static/logo.png" />
    <div class="text-50rpx">
      {{ foo }}
    </div>
    <wd-button @click="foo++">
      +1按钮
    </wd-button>
    <wd-button>
      图标示例 <i class="i-icon-park-outline:add-computer" />
    </wd-button>
    <wd-button @click="toLogin">
      去登陆页
    </wd-button>
    <wd-button @click="toFoo">
      测试请求
    </wd-button>
  </view>
</template>

<style lang="scss" scoped></style>
