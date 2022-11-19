import { useHttpGet, useHttpPost } from '@/composables/useHttp'
// 获取文章列表
export const useArticleData = (params?: any) => useHttpGet('article', { lazy: true, params })
// 新增文件
export const fetchArticleAdd = (params?: any) => useHttpPost('article/add', { lazy: true, params })
// 获取标签列表
export const useTagsData = (params?: any) => useHttpGet('tags', { lazy: true, params })
