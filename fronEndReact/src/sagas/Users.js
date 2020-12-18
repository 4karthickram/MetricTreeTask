import { put, takeLatest, call } from 'redux-saga/effects';
import dataService from '../services/dataService';
import * as userTypes from '../actionTypes/Users';
import * as userActions from '../actions/Users';

function* doGetUsers(obj) {
    try {
        const users = yield call(dataService.get, obj.data.url);
        yield put(userActions.doGetUsersSuccess(users));
    }
    catch (error) {
        yield put(userActions.doGetUsersFail(error));
    }
}


export default function* rootPostSaga() {
    yield takeLatest(userTypes.DO_GET_USER, doGetUsers)
}