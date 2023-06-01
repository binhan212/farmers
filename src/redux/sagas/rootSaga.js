import { all } from "redux-saga/effects";
import * as AdminSaga from './AdminSaga/UserSaga';
import * as SanPhamSaga from './AdminSaga/SanPhamSaga';

import * as DonHangSaga from './AdminSaga/DonHangSaga';
import * as KhuyenMaiSaga from './AdminSaga/KhuyenMaiSaga';
import * as LoaiSanPhamSaga from './AdminSaga/LoaiSanPhamSaga';
import * as ShopSaga from './AdminSaga/ShopSaga';
import * as ShopNNSaga from './NongDanSaga/ShopNNSaga';
import * as DonHangNNSaga from './NongDanSaga/DonHangNNSaga';

export function* rootSaga() {
    yield all([
        AdminSaga.theodoiSignin(),

        SanPhamSaga.laysanphamSaga(),

        SanPhamSaga.themsanphamSaga(),

        SanPhamSaga.xoasanphamSaga(),

        SanPhamSaga.laysanphamshopSaga(),

        DonHangSaga.laydonhangSaga(),

        KhuyenMaiSaga.laykhuyenmaiSaga(),

        LoaiSanPhamSaga.layloaisanphamSaga(),


        ShopSaga.layshopSaga(),

        ShopNNSaga.layshopNNSaga(),

        ShopNNSaga.themsuashopnnSaga(),

        ShopNNSaga.xoashopSaga(),

        DonHangNNSaga.donhangnnSaga()

    ])

}