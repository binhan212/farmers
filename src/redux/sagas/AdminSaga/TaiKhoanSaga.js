import {
    call,
    takeLatest,
    put,
} from "redux-saga/effects";

import { adminService } from "../../../Services/AdminService";

function* taikhoanSaga(action) {
    try {
        var data = yield call(()=>
            adminService.laytaikhoan()
        );
        console.log(data.data.sanPham);
        //đưa data lên reducer 
        yield put({
            type:'GET_TAIKHOAN_REDUCER',
            data:data.data.sanPham
        })
    } catch (err) {
        console.log("loi");
    }
}
 

export function* laytaikhoanSaga() {
    yield takeLatest('GET_TAIKHOAN', taikhoanSaga); 
}
//---------------------------------------------------------
function* suataikhoan(action) {
    try {
        var data = yield call(()=>
            adminService.suataikhoan(action.values)
        );
        console.log(data.data);
        //đưa data lên reducer 
        yield put({
            type:'GET_TAIKHOAN',
        })
    } catch (err) {
        console.log("loi");
    }
}
 

export function* suataikhoanSaga() {
    yield takeLatest('SAVE_TAIKHOAN', suataikhoan); 
}