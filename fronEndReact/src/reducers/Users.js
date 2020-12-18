import * as userActions from '../actionTypes/Users';

const initState = {
    users: [],
    isError: null,
    errStr: '',
    isLoading: false,
    error: null
};

const userReducer = (state = initState, action) => {

    switch (action.type) {
        case userActions.DO_GET_USER: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case userActions.DO_GET_USER_FAIL: {
            return {
                ...state,
                isLoading: false,
                error: action.data,
                isError: true,
                errStr: 'error'
            }
        }
        case userActions.DO_GET_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                users: action.data.data.pdflist,
                isError: false,
                errStr: ''
            }
        }
        default:
            return {
                ...state
            }
    }
};

export default userReducer;