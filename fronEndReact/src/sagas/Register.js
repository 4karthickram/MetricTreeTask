import { put, takeLatest, call } from 'redux-saga/effects';
import dataService from '../services/dataService';
import * as registerTypes from '../actionTypes/Register';
import * as registerAction from '../actions/Register';
import toastService from '../services/toastService';


function* doRegistreation(obj) {
    try {
        const registerData = yield call(dataService.post, obj.data.url, obj.data.data);
        if(registerData.data) {
            yield put(registerAction.doRegisterSuccess(registerData))
            toastService.successToast('Registered Successfully');
            const { history } = obj.data;
            history && history.push('/login')
        }
    }
    catch(error) {
        yield put(registerAction.doRegisterFail(error));
        toastService.errorToast('Registration Failed');
    }
}

export default function* rootPostSaga() {
    yield takeLatest(registerTypes.DO_REGISTER, doRegistreation)
}