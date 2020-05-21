import { selector } from 'recoil'

import api from '../../services/api'

import { GithubUsers } from './index'

export const UsersWithFollowers = selector({
    key: 'UsersWithFollowers',
    get: async ({ get }) => {
        const users = get(GithubUsers)

        if (users.length === 0) return []
        try {
            const resp = await Promise.all(users.map(user => api.get(`/users/${user.name}`)))
            return resp.map(user => ({ name: user.login, followers: user.followers }))
        } catch (err) {
            console.log(err)
            // precisa remover o usuário da lista de users pq ele n existe no git
            return []
        }
    }
})
