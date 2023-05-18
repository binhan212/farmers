import { all } from "redux-saga/effects";
import * as AdminSaga from './AdminSaga/UserSaga';
import * as SanPhamSaga from './AdminSaga/SanPhamSaga';

import * as DonHangSaga from './AdminSaga/DonHangSaga';

export function* rootSaga() {
    yield all([
        AdminSaga.theodoiSignin(),

        SanPhamSaga.laysanphamSaga(),

        DonHangSaga.laydonhangSaga()
    ])

}