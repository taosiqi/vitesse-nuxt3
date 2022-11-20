## Layouts
这个目录中的Vue组件被用作布局。  
默认情况下，将使用“default.vue ”,除非在路线元中指定了替代方案。
```html
<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
</script>
```
https://v3.nuxtjs.org/guide/directory-structure/layouts
