import Axios from "axios"
import {DOMAIN_ADMIN} from '../until/Constants/SettingSystem';

export const adminService={
    signinAdmin:(tk,mk)=>{
        return Axios({
            url:`${DOMAIN_ADMIN}/TaiKhoan/Login?taikhoan=${tk}&matkhau=${mk}`,
            method:'GET'
        })
    },
    laysanpham:()=>{
        return Axios({
            url:`${DOMAIN_ADMIN}/Sanpham`,
            method:'GET'
        })
    },
    laydonhang:()=>{
        return Axios({
            url:`${DOMAIN_ADMIN}/DonHang`,
            method:'GET'
        })
    }
}
