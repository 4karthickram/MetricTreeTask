import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Register from './Register';
import Login from './Login';
import Users from './Users';

const rootReducer = combineReducers({
    form: formReducer,
    Register,
    Login,
    Users
});

export default rootReducer;