const { resolve } = require('path')
const VueTypeImports = require('vite-plugin-vue-type-imports')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite",
    "disableTelemetry": true
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config) {
    return { ...config,
      resolve: {
        alias: {
          '@': resolve(__dirname, '..', 'src'),
          vue: 'vue/dist/vue.esm-bundler.js'
        }
      },
      plugins: [...config.plugins, VueTypeImports.default()]
    };
  }
}