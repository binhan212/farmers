import { all } from "redux-saga/effects";
import * as AdminSaga from './AdminSaga/UserSaga';
import * as SanPhamSaga from './AdminSaga/SanPhamSaga';

import * as DonHangSaga from './AdminSaga/DonHangSaga';
import * as KhuyenMaiSaga from './AdminSaga/KhuyenMaiSaga';
import * as LoaiSanPhamSaga from './AdminSaga/LoaiSanPhamSaga';
import * as ShopSaga from './AdminSaga/ShopSaga';


export function* rootSaga() {
    yield all([
        AdminSaga.theodoiSignin(),

        SanPhamSaga.laysanphamSaga(),

        SanPhamSaga.themsanphamSaga(),

        DonHangSaga.laydonhangSaga(),

        KhuyenMaiSaga.laykhuyenmaiSaga(),

        LoaiSanPhamSaga.layloaisanphamSaga(),

        ShopSaga.layshopSaga(),

    ])

}