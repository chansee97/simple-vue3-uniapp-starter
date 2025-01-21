<script setup lang="ts">
onLaunch(() => {
  // eslint-disable-next-line no-console
  console.log('App Launch')
  uni.hideTabBar()
})
onShow(() => {
  // eslint-disable-next-line no-console
  console.log('App Show')
})
onHide(() => {
  // eslint-disable-next-line no-console
  console.log('App Hide')
})
</script>
