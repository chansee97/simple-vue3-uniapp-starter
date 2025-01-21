<script setup>
const name = 'COMPANY_NAME'
</script>

<template>
  <view class="p-30rpx">
    <view class="mb-30rpx text-xl font-bold">
      {{name}}基本功能隐私政策
    </view>
    <scroll-view>
      <text>
        {{name}}（以下或称“我们”）非常注重保护用户（“您”）的个人信息及隐私，我们深知个人信息对您的重要性，并将按照法律法规要求和业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。我们希望通过本《{{name}}基本功能隐私政策》向您清晰地介绍在使用我们的产品/服务时，我们如何处理您的个人信息，以及我们为您提供的访问、更正、删除和保护这些信息的方式。
      </text>
      <!-- 在这里添加更多的隐私政策内容 -->
    </scroll-view>
  </view>
</template>
