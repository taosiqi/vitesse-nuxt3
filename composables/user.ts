import { acceptHMRUpdate, defineStore } from 'pinia'
interface User {
  user: string
}
export const useUserStore = defineStore('user', {
  state: (): User => {
    return {
      user: '',
    }
  },
  actions: {
    updateUserInfo(info: User) {
      Object.assign(this, { ...info })
    },
  },
  getters: {
    currentOrg: (state) => {
      return `研发部${state.user}`
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
