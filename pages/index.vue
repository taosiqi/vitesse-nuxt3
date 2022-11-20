<template>
  <div>
    <Suspense>
      <van-button type="primary" @click="go">go hi</van-button>
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const go = () => {
  router.push(`/hi/${encodeURIComponent('思淇大大')}`)
}
</script>

<style lang="scss">

</style>
