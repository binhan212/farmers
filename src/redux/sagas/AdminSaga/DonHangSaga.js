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
import { GET_DONHANG,GET_DONHANG_REDUCER} from "../../constants/Admin/adminType";

import { adminService } from "../../../Services/AdminService";

function* donhangSaga(action) {
    try {
    
        var data = yield call(()=>
            adminService.laydonhang()
        );
        console.log(data);
        //đưa data lên reducer 
        yield put({
            type:GET_DONHANG_REDUCER,
            data:data.data
        })




    } catch (err) {
        console.log("loi");
    }
}



export function* laydonhangSaga() {
    yield takeLatest(GET_DONHANG, donhangSaga);
}
