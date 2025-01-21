<script setup lang="ts">
const isAgree = ref(false)

function toPrivacy() {
  uni.navigateTo({
    url: '/pages/login/privacy',
  })
}
function toProtocol() {
  uni.navigateTo({
    url: '/pages/login/protocol',
  })
}

function validateAgree() {
  if (!isAgree.value) {
    uni.vibrateShort()
    uni.showToast({
      title: '请先阅读并勾选用户协议和隐私政策',
      icon: 'none',
    })
    return false
  }
  return true
}

function loginByPhone() {
  if (!validateAgree())
    return

  uni.showToast({
    title: '已同意',
    icon: 'none',
  })
  // uni.navigateTo({
  //   url: '/pages/login/phone',
  // })
}

function loginByUserName() {
  if (!validateAgree())
    return
  uni.navigateTo({
    url: '/pages/login/username',
  })
}
</script>

<template>
  <view class="min-h-full flex flex-col items-center justify-center gap-10rpx">
    <image class="my-130rpx h-200rpx w-200rpx" src="/static/logo.svg" />
    <view>LOGIN</view>
    <view class="w-full p-60rpx">
      <wd-button block :round="false" size="large" @click="loginByPhone">
        手机号一键登录
      </wd-button>
      <view class="mt-30rpx">
        <wd-button plain block :round="false" size="large" @click="loginByUserName">
          用户名登录
        </wd-button>
      </view>
      <view class="mt-80rpx flex flex-wrap justify-center">
        <wd-checkbox v-model="isAgree" />
        我已阅读并同意
        <wd-text type="primary" text="《隐私政策》" @click="toPrivacy" />、
        <wd-text type="primary" text="《用户协议》" @click="toProtocol" />
      </view>
    </view>
  </view>
</template>
