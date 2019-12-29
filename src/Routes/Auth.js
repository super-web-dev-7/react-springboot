import React from 'react'

export default [
    {
        path: '/login',
        exact: true,
        auth: false,
        component: React.lazy(() => import('../Components/Auth/SignIn'))
    },
    {
        path: '/register',
        exact: true,
        auth: false,
        component: React.lazy(() => import('../Components/Auth/SignUp'))
    }
]
