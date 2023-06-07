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
//--------------------------------------------------------------


function* suadonhangnn(action) {
    try {
        
        var data = yield call(()=>
            adminService.suadonhangnn({...action.values})
        );
        console.log(data.data);
        //đưa data lên reducer 
        yield put({
            type:"GET_DONHANGNN"
        })




    } catch (err) {
        console.log("loi");
    }
}



export function* suadonhangnnSaga() {
    yield takeLatest("SUA_TTCTDH", suadonhangnn);
}