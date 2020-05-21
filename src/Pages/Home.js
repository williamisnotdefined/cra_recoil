import React from 'react'

import UserInput from '../components/UserInput'
import UsersList from '../components/UsersList'
import Loader from '../components/Loader'

export default function Home() {
    return (
        <div>
            <h1>Github Users</h1>
            <UserInput />

            <React.Suspense fallback={<Loader />}>
                <UsersList />
            </React.Suspense>
        </div>
    )
}
