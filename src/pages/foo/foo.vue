<script setup lang="ts">
import { fetchFormPost, fetchGet, fetchPost, fetchServerError } from '@/service/api/foo'

const code = ref()
function testGet() {
  fetchGet().then((res) => {
    code.value = res
  })
}
function testPost() {
  fetchPost({ data: 111 }).then((res) => {
    code.value = res
  })
}
function testFormPost() {
  fetchFormPost({ data: 111 }).then((res) => {
    code.value = res
  })
}
function testServerError() {
  fetchServerError({ data: 111 }).then((res) => {
    code.value = res
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
    <pre>{{ code }}</pre>
  </view>
</template>
