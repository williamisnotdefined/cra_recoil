import React from 'react'
import { useRecoilState } from 'recoil'

import { GithubUsers } from '../../atoms/Users'

export default function Users() {
    const [users] = useRecoilState(GithubUsers)
    return (
        <ul>
            {users.map(user => (
                <li>{user}</li>
            ))}
        </ul>
    )
}
