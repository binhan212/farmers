import Axios from "axios";
import {
    call,
    delay,
    fork,
    take,
    takeEvery,
    takeLatest,
    put,
    select,
} from "redux-saga/effects";
import { USER_SIGNIN_API, USLOGIN } from "../../constants/Admin/adminType";
import { adminService } from "../../../Services/AdminService";
import { TOKEN } from "../../../until/Constants/SettingSystem";
import { USER_LOGIN } from "../../../until/Constants/SettingSystem";
import { history } from "../../../until/history";
import {Route, Redirect} from 'react-router-dom';

function* signinSaga(action) {
    try {
        // console.log(action);
        // yield delay(500);
        
        var { data } =yield call(
            adminService.signinAdmin,
            action.taikhoanUr,
            action.matkhauUr
        );
        // console.log(data.token);
        localStorage.setItem(TOKEN, data.token);
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.filteredItems[0]));

        //khi đăng nhập bằng tài khoản khác thì lấy lại user mới
        yield put({
            type: USLOGIN,
            userlg: data.filteredItems[0]
        });
        console.log(123);
        //chuyen trang
        let history = yield select((state) => state.HistoryReducer.history);
        history.replace("/");

    } catch (err) {
        console.log(err.response.data);
    }
}

export function* theodoiSignin() {
    yield takeLatest(USER_SIGNIN_API, signinSaga);
}
//---------------------------------------------------------------------------
function* clearData(action) {
    try {
        yield put({
            type: "CLEAR_SHOP"
        });
        yield put({
            type: "CLEAR_DONHANG"
        });
    } catch (err) {
    }
}

export function* clearDataSaga() {
    yield takeLatest(USER_SIGNIN_API, clearData);
}