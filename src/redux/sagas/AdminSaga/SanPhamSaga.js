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
        // console.log(data);
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

function* themsuasanpham(action) {
    try {
        console.log(action.values);
        var {func,...res}=action.values;
        console.log(func);
        console.log(res);
        if(func==="Thêm"){
            //var data = yield call(()=>
            // adminService.themsanpham(res));
            // console.log(data);
        }else{
            // var data1 = yield call(()=>
            // adminService.suasanpham(res));
            // console.log(data1);
        }
        var data2 = yield call(()=>
            adminService.laysanpham()
        );
        console.log(data2);
        //đưa data lên reducer 
        yield put({
            type:GET_SANPHAM_REDUCER,
            data:data2.data
        })


    } catch (err) {
        console.log("loi");
    }
}

export function* themsanphamSaga() {
    yield takeLatest('SAVE_SANPHAM', themsuasanpham);
}