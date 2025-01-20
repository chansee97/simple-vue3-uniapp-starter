<script setup lang="ts">
import { fetchFormPost, fetchGet, fetchPost, fetchServerError } from '@/service/api/foo'
import { useUserStore } from '@/store'

const userStore = useUserStore()

function setInfo() {
  userStore.setUserInfo({
    username: '张三',
    token: 'token-test-0000000000000000000',
  })
}
function testGet() {
  fetchGet().then((res) => {
    console.warn(res)
  })
}
function testPost() {
  fetchPost({ data: 111 }).then((res) => {
    console.warn(res)
  })
}
function testFormPost() {
  fetchFormPost({ data: 111 }).then((res) => {
    console.warn(res)
  })
}
function testServerError() {
  fetchServerError({ data: 111 }).then((res) => {
    console.warn(res)
  })
}
function toBar() {
  uni.navigateTo({
    url: '/pages/foo/bar',
  })
}
</script>

<template>
  <view class="flex flex-col items-center justify-center gap-10rpx">
    <wd-button @click="testGet">
      GET
    </wd-button>
    <wd-button @click="testPost">
      POST
    </wd-button>
    <wd-button @click="testFormPost">
      POST(form-data)
    </wd-button>
    <wd-button type="error" @click="testServerError">
      服务器错误
    </wd-button>
    <view class="flex gap-1">
      <wd-button @click="setInfo">
        设置userInfo
      </wd-button>
      <wd-button @click="userStore.clearUserInfo">
        清除userInfo
      </wd-button>
      <wd-button @click="toBar">
        无token拦截去登录
      </wd-button>
    </view>
    <view>
      {{ userStore.userInfo }}
    </view>
  </view>
</template>
