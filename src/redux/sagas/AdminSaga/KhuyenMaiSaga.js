import {
    call,
    takeLatest,
    put,
} from "redux-saga/effects";

import { adminService } from "../../../Services/AdminService";

function* KhuyenMaiSaga(action) {
    try {
        var data = yield call(()=>
            adminService.laykhuyenmai()
        );
        console.log(data.data.sanPham);
        //đưa data lên reducer 
        yield put({
            type:'GET_KHUYENMAI_REDUCER',
            data:data.data.sanPham
        })
    } catch (err) {
        console.log("loi");
    }
}



export function* laykhuyenmaiSaga() {
    yield takeLatest('GET_KHUYENMAI', KhuyenMaiSaga);
}
