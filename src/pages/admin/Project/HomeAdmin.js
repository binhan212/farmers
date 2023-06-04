import React, {useEffect,useState} from "react";
import {useSelector} from 'react-redux';
export default function HomeAdmin() {
    var user= useSelector((state)=>state.UserLoginAdminReducer.userLogin);

    return (
        <>
        <h3>Xin Chào {user.taiKhoanUr}!</h3>
        </>
    );
}
