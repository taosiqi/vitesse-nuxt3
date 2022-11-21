import { useHttpGet } from '@/composables/useHttp'
interface Page {
  page: number
  page_size: number
}
export interface GoodDataList {
  id: string
  name: string
  price: number
  picture: string
  describe: string
  tags: Array<string>
  address: string
}
export interface GoodData {
  list: Array<GoodDataList>
  total: number
}

export const getGoodsList = (params: Page) => {
  return useHttpGet<GoodData>('demo/goods', { lazy: true, params })
}

