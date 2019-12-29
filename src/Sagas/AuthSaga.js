import { call, put } from 'redux-saga/effects';

import {creators as AuthActions } from "../Reducers/Auth";

import ApiAuth from '../Api/ApiAuth';

export function * login({payload}) {
    try{
        const response = yield call(ApiAuth.login, payload);
        if (response.status === 200 ) {
            yield put(AuthActions.loginSuccessResponse(response.data));
        }

    } catch (e) {
        yield put(AuthActions.loginFailureResponse(e));
    }
}

export function * register({payload}) {
    try{
        console.log('payload >>>>>>>>>>>' , payload)
        const response = yield call(ApiAuth.register, payload);

        if (response.status === 200 ) {
            yield put(AuthActions.loginSuccessResponse(response.data));
        }

    } catch (e) {
        yield put(AuthActions.loginFailureResponse(e));
    }
}
