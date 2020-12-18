const initState = {
    login: {},
    isError: null,
    errStr: '',
    isLoading: false,
    error: null,
    isSuccess: false
};

const loginReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DO_LOGIN': {
            return {
                ...state,
                isLoading: true,
            }
        }
        case 'DO_LOGIN_FAIL': {
            return {
                ...state,
                isLoading: false,
                error: action.data,
                isError: true,
                errStr: 'error',
                isSuccess: false
            }
        }
        case 'DO_LOGIN_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                login: action.data.data,
                isError: false,
                errStr: '',
                isSuccess: true
            }
        }
        default:
            return {
                ...state
            }
    }
};

export default loginReducer;