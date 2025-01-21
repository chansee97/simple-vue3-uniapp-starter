<script setup lang="ts">
import { useToast } from 'wot-design-uni'

const { success: showSuccess } = useToast()

const formRef = ref()
const formRules = {
  username: [
    { required: true, message: '请填写用户名' },
  ],
  password: [
    { required: true, message: '请填写密码' },
  ],
}
const formModel = ref({
  username: '',
  password: '',
})

async function handleSubmit() {
  const { valid, errors } = await formRef.value.validate()
  if (valid) {
    showSuccess({
      msg: '校验通过',
    })
  }
  else {
    console.warn(errors, 'error')
  }
}
</script>

<template>
  <view class="min-h-full flex flex-col items-center justify-center gap-10rpx">
    <wd-toast />
    <image class="my-130rpx h-200rpx w-200rpx" src="/static/logo.svg" />
    <view>LOGIN</view>
    <view class="w-full p-60rpx">
      <wd-form ref="formRef" :model="formModel" :rules="formRules">
        <wd-cell-group border>
          <wd-input
            v-model="formModel.username"
            label="用户名"
            label-width="100px"
            prop="username"
            clearable
            placeholder="请输入用户名"
          />
          <wd-input
            v-model="formModel.password"
            label="密码"
            label-width="100px"
            prop="password"
            show-password
            clearable
            placeholder="请输入密码"
          />
        </wd-cell-group>
        <view class="mt-30rpx">
          <wd-button type="primary" size="large" block :round="false" @click="handleSubmit">
            登录
          </wd-button>
        </view>
      </wd-form>
    </view>
  </view>
</template>
