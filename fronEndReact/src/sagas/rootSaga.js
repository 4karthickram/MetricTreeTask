import { all, fork } from 'redux-saga/effects';
import ReisterSaga from './Register';
import LoginSaga from './Login';
import UserSaga from './Users';

export default function* rootSaga() {
    yield all([
        fork(ReisterSaga),
        fork(LoginSaga),
        fork(UserSaga)
    ])
}