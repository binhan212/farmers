import {
    call,
    takeLatest,
    put,
} from "redux-saga/effects";

import { adminService } from "../../../Services/AdminService";

function* LoaiSanPhamSaga(action) {
    try {
        var data = yield call(()=>
            adminService.layloaisanpham()
        );
        console.log(data.data.sanPham);
        //đưa data lên reducer 
        yield put({
            type:'GET_LOAISANPHAM_REDUCER',
            data:data.data.sanPham
        })
    } catch (err) {
        console.log("loi");
    }
}



export function* layloaisanphamSaga() {
    yield takeLatest('GET_LOAISANPHAM', LoaiSanPhamSaga);
}
