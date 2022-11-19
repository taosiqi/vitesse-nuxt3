import { acceptHMRUpdate, defineStore } from 'pinia'
interface User {
  user: string
}
export const useUserStore = defineStore('user', {
  state: (): User => {
    return {
      user: 'taosiqi',
    }
  },
  actions: {
    updateUserInfo(info: User) {
      Object.assign(this, { ...info })
    },
  },
  getters: {
    currentOrg: (state) => {
      return `${state.user}-getters`
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
