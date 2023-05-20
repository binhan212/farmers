import {
    call,
    takeLatest,
    put,
} from "redux-saga/effects";

import { adminService } from "../../../Services/AdminService";

function* ShopSaga(action) {
    try {
        var data = yield call(()=>
            adminService.layshop()
        );
        console.log(data.data.sanPham);
        //đưa data lên reducer 
        yield put({
            type:'GET_SHOP_REDUCER',
            data:data.data.sanPham
        })
    } catch (err) {
        console.log("loi");
    }
}



export function* layshopSaga() {
    yield takeLatest('GET_SHOP', ShopSaga);
}
