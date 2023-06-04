import {
    call,
    takeLatest,
    put,
} from "redux-saga/effects";

import { adminService } from "../../../Services/AdminService";

function* nongdanSaga(action) {
    try {
        var data = yield call(()=>
            adminService.laynongdan()
        );
        console.log(data.data.sanPham);
        //đưa data lên reducer 
        yield put({
            type:'GET_NONGDAN_REDUCER',
            data:data.data.sanPham
        })
    } catch (err) {
        console.log("loi");
    }
}
 

export function* laynongdanSaga() {
    yield takeLatest('GET_NONGDAN', nongdanSaga); 
}