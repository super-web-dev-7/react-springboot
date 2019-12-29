import { combineReducers } from 'redux'

import auth from './Auth'
import register from './Register'

export default combineReducers({
    auth, register
});

