<script setup lang="ts">
definePage({
  name: 'home',
  layout: 'tabbar',
  style: {
    navigationBarTitleText: '首页',
  },
})

const router = useRouter()
const {
  theme,
  toggleTheme,
  currentThemeColor,
  showThemeColorSheet,
  themeColorOptions,
  openThemeColorPicker,
  closeThemeColorPicker,
  selectThemeColor,
} = useManualTheme()

const isDark = computed({
  get() {
    return theme.value === 'dark'
  },
  set() {
    toggleTheme()
  },
})

// 页面跳转方法
function navigateTo(name: string) {
  router.push({
    name,
  })
}

// 处理主题色选择
function handleThemeColorSelect(option: any) {
  selectThemeColor(option)
}
</script>

<template>
  <view class="box-border py-3">
    <demo-block title="基础设置" transparent>
      <wd-cell-group border custom-class="rounded-2! overflow-hidden">
        <wd-cell title="暗黑模式">
          <wd-switch v-model="isDark" size="18px" />
        </wd-cell>
        <wd-cell title="选择主题色" is-link @click="openThemeColorPicker">
          <view class="flex items-center justify-end gap-2">
            <view
              class="h-4 w-4 rounded-full"
              :style="{ backgroundColor: currentThemeColor.primary }"
            />
            <text>{{ currentThemeColor.name }}</text>
          </view>
        </wd-cell>
      </wd-cell-group>
    </demo-block>

    <demo-block title="工具链介绍" transparent>
      <wd-cell-group border custom-class="rounded-2! overflow-hidden">
        <wd-cell title="🚦 Router 路由管理" is-link @click="navigateTo('router')" />
        <wd-cell title="🌐 Alova 网络请求" is-link @click="navigateTo('request')" />
        <wd-cell title="🎨 Icon 图标" is-link @click="navigateTo('icon')" />
        <wd-cell title="🍍 Pinia 持久化" is-link @click="navigateTo('pinia')" />
        <wd-cell title="💬 Fedback 反馈组件" is-link @click="navigateTo('feedback')" />
        <wd-cell title="🦾  uni-ku/root" is-link @click="navigateTo('root')" />
        <wd-cell title="📊 uni-echarts" is-link @click="navigateTo('echartsAsync')" />
      </wd-cell-group>
    </demo-block>

    <!-- 主题色选择 ActionSheet -->
    <wd-action-sheet
      v-model="showThemeColorSheet"
      title="选择主题色"
      :close-on-click-action="true"
      @cancel="closeThemeColorPicker"
    >
      <view class="px-4 pb-4">
        <view
          v-for="option in themeColorOptions"
          :key="option.value"
          class="flex items-center justify-between border-b border-gray-100 py-3 last:border-b-0 dark:border-gray-700"
          @click="handleThemeColorSelect(option)"
        >
          <view class="flex items-center gap-3">
            <view
              class="h-6 w-6 border-2 border-gray-200 rounded-full dark:border-gray-600"
              :style="{ backgroundColor: option.primary }"
            />
            <text class="text-4 text-gray-800 dark:text-gray-200">
              {{ option.name }}
            </text>
          </view>
          <wd-icon
            v-if="currentThemeColor.value === option.value"
            name="check"
            :color="option.primary"
            size="20px"
          />
        </view>
      </view>
      <wd-gap :height="50" />
    </wd-action-sheet>
  </view>
</template>
