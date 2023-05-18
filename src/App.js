import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/admin/Project/Home/Home";
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

function App() {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "ADD_HISTORY", history: history });
    }, []);

    return (
        <div>
            <Switch>
                {/* <HomeTemplate exact path="/home" Component={Home} /> */}
                <Route exact path="/page" component={PageNotFound} />
                <UserLoginTemplate exact path="/login" Component={Login} />
                {/* <UserLoginTemplate exact path='/' Component={Login} /> */}

                <HomeTemplate exact path="/" Component={HomeAdmin} />
                <HomeTemplate exact path="/sanpham" Component={SanPhamAdmin} />
                <HomeTemplate exact path="/donhang" Component={DonHangAdmin} />
                {/* <HomeTemplate exact path='/' /> */}
            </Switch>
        </div>
    );
}

export default App;
