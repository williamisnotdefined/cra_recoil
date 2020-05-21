import React from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

import { UserToAdd, GithubUsers } from '../../atoms/Users'

export default function UserInput() {
    const [userToAdd, setUserToAdd] = useRecoilState(UserToAdd)
    const resetUserToAdd = useResetRecoilState(UserToAdd)

    const [gitUsers, addGitUsers] = useRecoilState(GithubUsers)

    function onChange(event) {
        setUserToAdd(event.target.value.trim())
    }

    function submit() {
        if (userToAdd) {
            const findedUser = gitUsers.find(user => user.name === userToAdd)
            if (!findedUser) {
                addGitUsers([...gitUsers, { name: userToAdd }])
            }

            resetUserToAdd()
        }
    }

    return (
        <div>
            <input type="text" value={userToAdd} onChange={onChange} />
            <button onClick={submit}>Add Github User</button>
        </div>
    )
}
