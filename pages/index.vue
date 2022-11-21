<template>
  <div>
    <Suspense>
      <div>
        <van-button type="primary" @click="go">
          go hi
        </van-button>
        <p />
        <van-button type="primary" class="mt-50!" @click="getGoodsListData">
          获取接口数据
        </van-button>
        <div v-for="item in goodData" :key="item.name">
          {{ item.name }}
        </div>
      </div>
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import type { GoodDataList } from '@/api/api'
import { getGoodsList } from '@/api/api'

const router = useRouter()
const goodData = ref<Array<GoodDataList>>([])

const go = () => {
  router.push(`/hi/${encodeURIComponent('思淇大大')}`)
}

const getGoodsListData = async () => {
  // 用这种方式，是和页面同步输出
  // const res = await useFetch('https://api.virapi.com/vir_github24hahb0a455de/demo/goods', {
  //   page: 1,
  //   page_size: 20,
  //   headers: {
  //     'app-token': '$2a$10$6a5alD8TIZIPqjczCd9um.AJLXb6LS.3vOMLS1QQjUPzfwC3SbxsC',
  //   },
  // })
  // console.log(res)
  // data.value = count.value.data.list
  getGoodsList({ page: 1, page_size: 20 }).then((res) => {
    goodData.value = res.data.list
  })
}
getGoodsListData()
</script>

<style lang="scss">

</style>
