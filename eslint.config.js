const antfu = require('@antfu/eslint-config').default
const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat()

module.exports = antfu({
  unocss: true,
  formatters: true,
},

// Legacy config
...compat.config({
  globals: {
    wx: 'readonly', // 微信小程序
    uni: 'readonly', // uniapp
  },
}))
