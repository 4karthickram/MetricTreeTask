import * as loginTypes from '../actionTypes/Login';

export const doLogin = (data) => {
    return {
        type: loginTypes.DO_LOGIN,
        data,
    }
};

export const doLoginSuccess = (data) => {
    return {
        type: loginTypes.DO_LOGIN_SUCCESS,
        data,
    }
};

export const doLoginFail = (data) => {
    return {
        type: loginTypes.DO_LOGIN_FAIL,
        data,
    }
};
