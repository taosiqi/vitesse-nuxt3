export const fetchConfig = {
  baseURL: 'http://localhost:3000/api/',
}

// 请求体封装
function useGetFetchOptions(options: any = {}) {
  options.baseURL = options.baseURL ?? fetchConfig.baseURL
  return options
}

// http请求封装
export async function useHttp(url: string, options: any = {}) {
  options = useGetFetchOptions(options)
  const data = ref(null)
  const error = ref(null)

  return await $fetch(url, options)
    .then((res: any) => {
      data.value = res.data
      return { data, error }
    })
    .catch((err) => {
      const msg = err?.data?.data
      if (process.client)
      // ElMessage.error(msg || '服务端错误')
        error.value = msg
      return { data, error }
    })
}

// GET请求
export function useHttpGet(url: string, options: any = {}) {
  options.method = 'GET'
  return useHttp(url, options)
}

// POST请求
export function useHttpPost(url: string, options: any = {}) {
  options.method = 'POST'
  return useHttp(url, options)
}
