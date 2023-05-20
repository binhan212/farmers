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

function App() {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "ADD_HISTORY", history: history });
    }, []);

    return (
        <div>
            <Switch>
                <Route exact path="/page" component={PageNotFound} />
                <UserLoginTemplate exact path="/login" Component={Login} />
                <HomeTemplate exact path="/" Component={HomeAdmin} />
                <HomeTemplate exact path="/sanpham" Component={SanPhamAdmin} />
                <HomeTemplate exact path="/donhang" Component={DonHangAdmin} />
                <HomeTemplate exact path="/shop" Component={ShopAdmin} />
                <HomeTemplate exact path="/loaisanpham" Component={LoaiSanPhamAdmin} />
                <HomeTemplate exact path="/khuyenmai" Component={KhuyenMaiAdmin} />
            </Switch>
        </div>
    );
}

export default App;
