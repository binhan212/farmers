import {
    call,
    takeLatest,
    put,
} from "redux-saga/effects";

import { adminService } from "../../../Services/AdminService";

function* ShopNNSaga(action) {
    try {
        var user=JSON.parse(localStorage.getItem('userLogin'));

        var data = yield call(()=>
            adminService.timnongdantheomanguoidung(user.maND)
        );
        console.log(data.data.sanPham[0]);

        localStorage.setItem('nongdan',JSON.stringify(data.data.sanPham[0]));

        var data1 = yield call(()=>
            adminService.layshopnn(data.data.sanPham[0].maNN)
        );

        console.log(data1.data.sanPham);

        //đưa data lên reducer
        yield put({
            type:'GET_SHOPNN_REDUCER',
            data:data1.data.sanPham
        })
    } catch (err) {
        console.log("loi");
    }
}



export function* layshopNNSaga() {
    yield takeLatest('GET_SHOPNN', ShopNNSaga);
}

//------------------------------------------------------------

function* themsuashopnn(action) {
    try {
        console.log(action.values);
        var {func,...res}=action.values;
        console.log(func);
        console.log(res);
        if(func==="Thêm"){
            let {maShop,...res1}=res;
            var data = yield call(()=>
            adminService.themshopnn(res1));
            console.log(data);
        }else{
            var data1 = yield call(()=>
            adminService.suashopnn(res));
            console.log(data1);
        }

        //Gửi action để gọi lại dữ liệu
        yield put({ type: 'GET_SHOPNN' });



    } catch (err) {
        console.log("loi");
    }
}

export function* themsuashopnnSaga() {
    yield takeLatest('SAVE_SHOPNN', themsuashopnn);
}

//---------------------------------------------------------

function* xoashop(action) {
    try {
        var masp=action.ma;
        // console.log(masp);
        var data = yield call(()=>adminService.xoashop(masp));
        console.log(data.data);  
        alert("xóa thành công!")
        // Gửi action để gọi lại dữ liệu
        yield put({ type: 'GET_SHOPNN' });
    } catch (err) {
        console.log("loi xoa");
    }
}

export function* xoashopSaga() {
    yield takeLatest('XOA_SHOPNN', xoashop);
}


