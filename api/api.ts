import { useHttpGet, useHttpPost } from '@/composables/useHttp'
interface Page {
  page: number
  page_size: number
}
export interface GoodDataListType {
  id: string
  name: string
  price: number
  picture: string
  describe: string
  tags: Array<string>
  address: string
}
export interface GoodDataType {
  list: Array<GoodDataListType>
  total: number
}
export interface ContentType {
  id: string
  content: string
  imgs?: Array<string> | string
}

export const getHttpGoodsList = (params: Page) => {
  return useHttpGet<GoodDataType>('demo/goods', { lazy: true, params })
}
export const setHttpGoodsContent = (params: ContentType) => {
  return useHttpPost('demo/comment', { lazy: true, params })
}
