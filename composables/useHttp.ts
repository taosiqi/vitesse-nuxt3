import { showNotify } from 'vant'
import { showMessage } from '@/api/status'
export const fetchConfig = {
  baseURL: 'https://api.virapi.com/vir_github24hahb0a455de/',
}
export interface HttpResponse<T = unknown> {
  code: number
  message: string
  data: T
}
// 请求体封装
function useGetFetchOptions(options: any = {}) {
  options.baseURL = options.baseURL ?? fetchConfig.baseURL
  options.headers = {
    'app-token': '$2a$10$6a5alD8TIZIPqjczCd9um.AJLXb6LS.3vOMLS1QQjUPzfwC3SbxsC',
  }
  return options
}

// http请求封装
export async function useHttp<T>(url: string, options: any = {}) {
  options = useGetFetchOptions(options)
  return await useFetch<HttpResponse<T>>(url, options).then((res) => {
    if (res.error.value)
      showNotify(showMessage(res.error.value.statusCode))
    return res
  })
}

// GET请求
export function useHttpGet<T>(url: string, options: any = {}) {
  options.method = 'GET'
  return useHttp<T>(url, options)
}

// POST请求
export function useHttpPost<T>(url: string, options: any = {}) {
  options.method = 'POST'
  return useHttp<T>(url, options)
}
