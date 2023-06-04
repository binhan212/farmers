import {
    call,
    takeLatest,
    put,
} from "redux-saga/effects";

import { adminService } from "../../../Services/AdminService";

function* nguoidungSaga(action) {
    try {
        var data = yield call(()=>
            adminService.laynguoidung()
        );
        console.log(data.data.sanPham);
        //đưa data lên reducer 
        yield put({
            type:'GET_NGUOIDUNG_REDUCER',
            data:data.data.sanPham
        })
    } catch (err) {
        console.log("loi");
    }
}



export function* laynguoidungSaga() {
    yield takeLatest('GET_NGUOIDUNG', nguoidungSaga);
}

//-------------------------------------------------------------------------


function* themnguoidung(action) {
    try {
        let {taiKhoanUr,matKhauUr,maTK,role,func,...res}=action.values;
        // console.log(res);
        var data = yield call(()=>
            adminService.themnguoidung(res)
        );
        console.log(data.data);

        let tk={taiKhoanUr,matKhauUr,maTK,role,maND:data.data}

        console.log(tk);

        var data1 = yield call(()=>
            adminService.themtaikhoan(tk)
        );

        console.log(data1.data);
        // //đưa data lên reducer 
        yield put({
            type:'GET_NGUOIDUNG'
        })
    } catch (err) {
        console.log("loi");
    }
}



export function* themnguoidungSaga() {
    yield takeLatest('SAVE_NGUOIDUNG', themnguoidung);
}
//----------------------------------------------------------------------
function* laynguoidungtheoma(action) {
    try {
       
        var data = yield call(()=>
            adminService.laynguoidungtheoma(action.ma)
        );
        console.log(data.data.sanPham[0]);

        yield put({
            type:'GET_NGUOIDUNG_THEOMA',
            data:data.data.sanPham[0]
        })
        
    } catch (err) {
        console.log("loi");
    }
}



export function* laynguoidungtheomaSaga() {
    yield takeLatest('GET_NDTHEOMA', laynguoidungtheoma);
}