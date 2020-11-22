import { selector, atom } from 'recoil'

export const usernameState = atom({
  key: 'usernameState',
  default: ''
})

export const usernameSelector = selector({
  key: 'usernameSelector',
  get: ({ get }) => {
    const username = get(usernameState)
    if (username !== '') {
      return username
    }
    const localName = window.localStorage.getItem('empire:username')
    return localName
  },
  set: ({ set }, newVal) => {
    window.localStorage.setItem('empire:username', newVal)
    set(usernameState, newVal)
  }
})
