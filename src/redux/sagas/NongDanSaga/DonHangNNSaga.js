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


import { adminService } from "../../../Services/AdminService";

function* donhangnn(action) {
    try {
        var nongdan=JSON.parse(localStorage.getItem('nongdan'));
        var data = yield call(()=>
            adminService.laydonhangnn(nongdan.maNN)
        );
        console.log(data);
        //đưa data lên reducer 
        yield put({
            type:"GET_DONHANGNN_REDUCER",
            data:data.data
        })




    } catch (err) {
        console.log("loi");
    }
}



export function* donhangnnSaga() {
    yield takeLatest("GET_DONHANGNN", donhangnn);
}
