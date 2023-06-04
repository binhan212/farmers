import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/admin/Login/Login";
import PageNotFound from "./pages/admin/PageNotFound/PageNotFound";
import { UserLoginTemplate } from "./templates/HomeTemplate/UserLoginTemplate";
import {
    Router,
    Switch,
    useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { history } from "./until/history";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import HomeAdmin from "./pages/admin/Project/HomeAdmin";
import SanPhamAdmin from "./pages/admin/Project/SanPhamAdmin";
import DonHangAdmin from "./pages/admin/Project/DonHangAdmin";
import ShopAdmin from "./pages/admin/Project/ShopAdmin";
import LoaiSanPhamAdmin from "./pages/admin/Project/LoaiSanPhamAdmin";
import KhuyenMaiAdmin from "./pages/admin/Project/KhuyenMaiAdmin";
import { bool, boolean } from "yup";
import ShopNN from "./pages/nongdan/shopNN";
import DonhangNN from "./pages/nongdan/DonhangNN";
import NguoiDungAdmin from "./pages/admin/Project/NguoiDungAdmin";
import TaiKhoanAdmin from "./pages/admin/Project/TaiKhoanAdmin";
import Thongkenn from "./pages/nongdan/Thongkenn";
import NongDanAdmin from "./pages/admin/Project/NongDanAdmin";

function App() {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "ADD_HISTORY", history: history });
    }, []);


    const token = localStorage.getItem('access_token');
    console.log(token);
    var isAuthenticated = token ? true: false;
    console.log(isAuthenticated);

    return (
        <div>
            <Switch>
                <Route exact path="/page" component={PageNotFound} />
                <UserLoginTemplate exact path="/login" Component={Login} />

                <HomeTemplate exact path="/" Component={HomeAdmin} isAuthenticated={isAuthenticated} />

                <HomeTemplate exact path="/sanpham" Component={SanPhamAdmin} isAuthenticated={isAuthenticated} />
                <HomeTemplate exact path="/donhang" Component={DonHangAdmin} isAuthenticated={isAuthenticated} />
                <HomeTemplate exact path="/shop" Component={ShopAdmin} isAuthenticated={isAuthenticated} />
                <HomeTemplate exact path="/loaisanpham" Component={LoaiSanPhamAdmin} isAuthenticated={isAuthenticated} />
                <HomeTemplate exact path="/khuyenmai" Component={KhuyenMaiAdmin} isAuthenticated={isAuthenticated} />
                <HomeTemplate exact path="/nguoidung" Component={NguoiDungAdmin} isAuthenticated={isAuthenticated} />
                <HomeTemplate exact path="/taikhoan" Component={TaiKhoanAdmin} isAuthenticated={isAuthenticated} />
                <HomeTemplate exact path="/nongdan" Component={NongDanAdmin} isAuthenticated={isAuthenticated} />

                {/* Nong Dan */}
                <HomeTemplate exact path="/shopnn" Component={ShopNN} isAuthenticated={isAuthenticated} />
                <HomeTemplate exact path="/donhangnn" Component={DonhangNN} isAuthenticated={isAuthenticated} />
                <HomeTemplate exact path="/thongkenn" Component={Thongkenn} isAuthenticated={isAuthenticated} />


            </Switch>
        </div>
    );
}

export default App;
