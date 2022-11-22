## ![image.png](https://static-1253419794.cos.ap-nanjing.myqcloud.com/img/image.png)
## 特点

-  💚 Nuxt 3 - 服务端渲染, 约定式路由, 组件、模块自动导入
-  ⚡️ Vite - 快速热更新
-  🎨 UnoCSS - 即时按需原子CSS引擎
-  😃 使用纯CSS中任何图标集中的图标，由UnoCSS提供支持
-  🔥 使用`<script setup>` 语法
-  🍍 通过Pinia进行状态管理
-  📑 Layout布局系统
-  📥 Composition API、composables、VueUse API自动引入
-  🦾 使用TypeScript
-  💽 VW自适应方案
-  👩‍💻 使用Vant移动端组件库
-  🧐 Scss预处理器
-  🔋 Http请求封装
## nuxt模块

- [VueUse](https://github.com/vueuse/vueuse) - 有用的组合式API集合
- [UnoCSS](https://github.com/antfu/unocss) - 即时按需原子CSS引擎
- [Pinia](https://pinia.esm.dev/) - 状态管理工具
## 依赖版本
```json
{
  "private": true,
  "packageManager": "pnpm@7.9.0",
  "scripts": {
    "build": "nuxi build",
    "dev": "nuxi dev",
    "start": "node .output/server/index.mjs",
    "lint": "eslint .",
    "postinstall": "nuxi prepare",
    "generate": "nuxi generate"
  },
  "devDependencies": {
    "@antfu/eslint-config": "^0.30.1",
    "@iconify-json/carbon": "^1.1.10",
    "@iconify-json/twemoji": "^1.1.5",
    "@pinia/nuxt": "^0.4.3",
    "@unocss/nuxt": "^0.46.5",
    "@vueuse/nuxt": "^9.5.0",
    "@xianzhengquan/postcss-px-2-vw": "^0.0.1",
    "eslint": "^8.27.0",
    "nuxt": "^3.0.0",
    "pinia": "^2.0.23",
    "sass": "^1.56.1",
    "typescript": "^4.9.3"
  },
  "dependencies": {
    "vant": "^4.0.0-rc.8"
  }
}

```
## nuxt.config
```typescript
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
    externalVue: true,
  },
  app: {
    head: {
      title: '移动端Nuxt3模版',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,height=device-height,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { name: 'description', content: '只是一个管理后台' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
      style: [],
      script: [],
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  postcss: {
    plugins: {
      '@xianzhengquan/postcss-px-2-vw': {
        unitToConvert: 'px', // 要转化的单位
        viewportWidth: 375, // UI设计稿的宽度
        viewportHeight: 667, // UI
        unitPrecision: 6, // 转换后的精度，即小数点位数
        // propList: 当有些属性的单位我们不希望转换的时候，可以添加在数组后面，并在前面加上!号，如propList: ["*","!letter-spacing"],这表示：所有css属性的属性的单位都进行转化，除了letter-spacing的
        propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
        // 转换的黑名单，在黑名单里面的我们可以写入字符串，只要类名包含有这个字符串，就不会被匹配。比如selectorBlackList: ['wrap'],它表示形如wrap,my-wrap,wrapper这样的类名的单位，都不会被转换
        selectorBlackList: ['ignore'], // 指定不转换为视窗单位的类名，
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否转换后直接更换属性值
        // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
        // include: [/node_modules/],
        landscape: false, // 是否处理横屏情况
      },
    },
  },
})

```
## clone

```bash
git clone https://github.com/taosiqi/vitesse-nuxt3.git
cd vitesse-nuxt3
pnpm instll
pnpm run dev
```
## github

[GitHub直达](https://github.com/taosiqi/vitesse-nuxt3)
## 感谢
该模版基于[antfu/vitesse-nuxt3](https://github.com/antfu/vitesse-nuxt3) 二次开发，[完善移动端所需配置👉]()
