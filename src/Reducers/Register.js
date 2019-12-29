import { createActions, handleActions } from 'redux-actions'

import BaseApi from "../Api/BaseApi";

const initState = {
    user: null,
    fetching: false,
    error: null,
    message: null,
};

export const creators = createActions({
    REGISTER_REQUEST: (user) => ({user}),
    REGISTER_SUCCESS_RESPONSE: (response) => ({response}),
    REGISTER_FAILURE_RESPONSE: (response) => ({response}),
});

const fetchingReducer = (state) => {
    return {...state, fetching: true, error: null};
};

const successReducer = (state, {payload}) => {
    return {...state, fetching: false, error: null, user: payload};
};

const failureReducer = (state, {payload}) => {
    return {...state, fetching: false, error: payload};
};

export default handleActions(
    {
        REGISTER_REQUEST: fetchingReducer,
        REGISTER_SUCCESS_RESPONSE: successReducer,
        REGISTER_FAILURE_RESPONSE: failureReducer,
    },
    initState
);

