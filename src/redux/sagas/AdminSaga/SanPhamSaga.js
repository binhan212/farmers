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
import { GET_SANPHAM,GET_SANPHAM_REDUCER} from "../../constants/Admin/adminType";

import { adminService } from "../../../Services/AdminService";

function* sanphamSaga(action) {
    try {
    
        var data = yield call(()=>
            adminService.laysanpham()
        );
        console.log(data);
        //đưa data lên reducer 
        yield put({
            type:GET_SANPHAM_REDUCER,
            data:data.data
        })




    } catch (err) {
        console.log("loi");
    }
}



export function* laysanphamSaga() {
    yield takeLatest(GET_SANPHAM, sanphamSaga);
}
