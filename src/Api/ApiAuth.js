import BaseApi from "./BaseApi";

const ApiAuth = () => {
    const _api = BaseApi.api;

    const login = (payload) => {
        return _api.post('auth/login', payload);
    };

    const register = (payload) => {
        return _api.post('/auth/register', {params: payload})
    };

    return {
        login,
        register
    };
};

export default ApiAuth();
