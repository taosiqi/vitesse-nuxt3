import { showNotify } from 'vant'
import { showMessage } from '@/composables/status'
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
export async function useHttp<T>(url: string, options: any = {}): Promise<HttpResponse<T>> {
  options = useGetFetchOptions(options)
  return await useFetch<HttpResponse<T>>(url, options).then((res) => {
    const { error, data } = res
    if (!error.value && data.value && data.value.code === 200) {
      return data.value
    }
    else {
      // 整理错误参数
      const e = {
        code: error.value?.statusCode || data.value?.code,
        message: `${error.value?.name}${error.value?.statusMessage}` || data.value?.message,
        data: '',
      }
      showNotify(showMessage(e.code))
      return Promise.reject(e)
    }
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
