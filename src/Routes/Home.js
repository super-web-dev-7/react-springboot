import React from 'react'

export default [
    {
        path: '/',
        exact: true,
        auth: true,
        component: React.lazy(() => import('../Layout/Components/Layout'))
    }
]
