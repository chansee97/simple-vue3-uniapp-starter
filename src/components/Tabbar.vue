<script setup lang="ts">
const { name } = defineProps<{
  name: string
}>()

onShow(() => {
  console.warn('Tabbar Show')
})

function handleChangeItem({ value }: { value: string }) {
  uni.switchTab({
    url: `/pages/${value}/index`,
  })
}
</script>

<template>
  <wd-tabbar :model-value="name" bordered safeareainsetbottom placeholder fixed @change="handleChangeItem">
    <wd-tabbar-item name="index" title="首页" icon="home" />
    <wd-tabbar-item name="order" title="订单" icon="list" />
    <wd-tabbar-item name="message" title="消息" icon="mail" />
    <wd-tabbar-item name="user" title="我的" icon="user" />
  </wd-tabbar>
</template>
