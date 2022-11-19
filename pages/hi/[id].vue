<script setup lang="ts">
import { storeToRefs } from 'pinia'
const route = useRoute()
const userStore = useUserStore()
const { user, currentOrg } = storeToRefs(userStore)
const date = ref('')
const show = ref(false)

const onConfirm = (value: Date) => {
  show.value = false
  date.value = `${value.getMonth() + 1}/${value.getDate()}`
  userStore.updateUserInfo({ user: String(route.params.id) })
}

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div>
    <van-button type="primary" @click="show = true">
      {{ user }}-{{ date }}-{{ currentOrg }}
    </van-button>
    <van-calendar v-model:show="show" @confirm="onConfirm" />
  </div>
</template>
