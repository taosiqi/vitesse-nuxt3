<template>
  <div>
    <van-button type="primary">
      {{ currentOrg }}
    </van-button>
    <p class="mt-50" />
    <van-button type="primary" @click="show = true">
      Vant组件{{ date }}
    </van-button>
    <van-calendar v-model:show="show" @confirm="onConfirm" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
const route = useRoute()
const userStore = useUserStore()
userStore.updateUserInfo({ user: String(route.params.name) })
const { currentOrg } = storeToRefs(userStore)

const date = ref<Date>()
const show = ref(false)

const onConfirm = (value: Date) => {
  show.value = false
  date.value = value
}

definePageMeta({
  layout: 'home',
})
</script>
