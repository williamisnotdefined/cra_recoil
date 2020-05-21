import { atom } from 'recoil'

export const GithubUsers = atom({
    key: 'GithubUsers',
    default: []
})

export const UserToAdd = atom({
    key: 'UserToAdd',
    default: ''
})
