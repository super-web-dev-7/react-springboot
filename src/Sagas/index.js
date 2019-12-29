import { takeLatest, all } from 'redux-saga/effects';

import { login, register} from './AuthSaga';

export default function * root () {
    yield all([
        takeLatest('LOGIN_REQUEST', login),
        takeLatest('REGISTER_REQUEST', register)
    ]);
}
