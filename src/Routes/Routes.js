//import modular Routes

import authRoutes from './Auth'
import homeRoutes from './Home'

export default [
    ...homeRoutes,
    ...authRoutes,
]
