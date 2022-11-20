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
export async function useHttp(url: string, options: any = {}): Promise<any> {
  options = useGetFetchOptions(options)
  options.key = url
  return await $fetch(url, options).then((res: any) => {
    return res
  }).catch((err) => {
    const msg = err?.data?.data
    if (process.client)
      return { data: undefined, error: msg }
  })
}

// GET请求
export function useHttpGet<T>(url: string, options: any = {}): Promise<HttpResponse<T>> {
  options.method = 'GET'
  return useHttp(url, options)
}

// POST请求
export function useHttpPost<T>(url: string, options: any = {}): Promise<HttpResponse<T>> {
  options.method = 'POST'
  return useHttp(url, options)
}
