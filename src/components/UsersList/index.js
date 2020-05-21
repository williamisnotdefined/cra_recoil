import React from 'react'
import { useRecoilValue } from 'recoil'

import { UsersWithFollowers } from '../../atoms/Users/selectors'

export default function UsersList() {
    const users = useRecoilValue(UsersWithFollowers)

    return (
        <ul>
            {users.map(user => (
                <li key={user.name}>
                    {user.name} - ({user.followers})
                </li>
            ))}
        </ul>
    )
}
