import { createActions, handleActions } from 'redux-actions'

import BaseApi from '../Api/BaseApi';

const initState = {
    isAuthenticate: !!localStorage.getItem('bm_token'),
    token: localStorage.getItem('bm_token'),
    user: null,
    fetching:false,
    error: null
};

export const creators = createActions({
    LOGIN_REQUEST: ({ email, password }) => ({ email, password }),
    LOGIN_SUCCESS_RESPONSE: () => ({}),
    LOGIN_FAILURE_RESPONSE: () => ({}),
    LOGOUT: () => ({}),
    AUTH_CHECK: () => ({}),
    // REGISTER_REQUEST: ({ email, username, password }) => ({ email, username, password }),
    // REGISTER_SUCCESS_RESPONSE: () => ({}),
    // REGISTER_FAILURE_RESPONSE: () => ({}),
});

const fetchingReducer = (state) => {
    return {...state, fetching: true, error: null};
};

const loginSuccessReducer = (state, {payload}) => {
    BaseApi.authToken = payload.token;
    localStorage.setItem('bm_token', payload.token);

    return {
        ...state,
        isAuthenticate: true,
        token: payload.token,
        user: payload.user,
        fetching: false,
        error: null
    }
};

const failureReducer = (state, {payload}) => {
    return {...state, fetching: false, error: payload};
};

const logoutReducer = (state) => {
    BaseApi.authToken = null;
    localStorage.removeItem('bm_token');
    return {...state, isAuthenticate: false, token: null}
};

const authCheckReducer = (state) => {
    state = Object.assign({}, state, {
        isAuthenticate: !!localStorage.getItem('bm_token')
    });

    return state;
};

export default handleActions(
    {
        LOGIN_REQUEST: fetchingReducer,
        LOGIN_SUCCESS_RESPONSE: loginSuccessReducer,
        LOGIN_FAILURE_RESPONSE: failureReducer,
        LOGOUT: logoutReducer,
        AUTH_CHECK: authCheckReducer,
    },
    initState
)

