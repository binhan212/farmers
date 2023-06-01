import {
    call,
    takeLatest,
    put,
} from "redux-saga/effects";
import { GET_SANPHAM,GET_SANPHAM_REDUCER} from "../../constants/Admin/adminType";

import { adminService } from "../../../Services/AdminService";

function* sanphamSaga(action) {
    try {
    
        var data = yield call(()=>
            adminService.laysanpham()
        );
        //đưa data lên reducer 
        yield put({
            type:GET_SANPHAM_REDUCER,
            data:data.data
        })

        console.log("load thành công")
    } catch (err) {
        console.log("loi");
    }
}

export function* laysanphamSaga() {
    yield takeLatest(GET_SANPHAM, sanphamSaga);
}
//--------------------------------------------------

function* themsuasanpham(action) {
    try {
        console.log(action.values);
        var {func,...res}=action.values;
        // console.log(func);
        // console.log(res);
        if(func==="Thêm"){
            var data = yield call(()=>
            adminService.themsanpham(res));
            console.log(data);
        }else{
            var data1 = yield call(()=>
            adminService.suasanpham(res));
            console.log(data1);
        }

        
        // Gửi action để gọi lại dữ liệu
        if(action.addSub){
            yield put({ type: 'GET_SPSHOP',ma:res.maShop});
        }
        yield put({ type: GET_SANPHAM });



    } catch (err) {
        console.log("loi");
    }
}

export function* themsanphamSaga() {
    yield takeLatest('SAVE_SANPHAM', themsuasanpham);
}
//-----------------------------------------------------

function* xoasanpham(action) {
    try {
        var masp=action.masp;
        console.log(masp);
        var data = yield call(()=>adminService.xoasanpham(masp));
        console.log(data.data);  
        alert("xóa thành công!")
        // Gửi action để gọi lại dữ liệu
        if(action.addSub){
            var mashop=JSON.parse(localStorage.getItem('mashop'));
            yield put({ type: 'GET_SPSHOP',ma:mashop});
        }
        yield put({ type: GET_SANPHAM });
    } catch (err) {
        console.log("loi xoa");
    }
}

export function* xoasanphamSaga() {
    yield takeLatest('XOA_SANPHAM', xoasanpham);
}
//------------------------------------------------------------
function* laysanphamshop(action) {
    try {
        var data = yield call(()=>adminService.laysanphamshop(action.ma));
        console.log(data.data.sanPham);  
        // Gửi action để gọi lại dữ liệu
        yield put({ type: 'UPDATE_SANPHAMSHOP', data:data.data.sanPham });

    } catch (err) {
        console.log("loi goi lay san pham shop");
    }
}

export function* laysanphamshopSaga() {
    yield takeLatest('GET_SPSHOP', laysanphamshop);
}



