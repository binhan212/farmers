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
    themsanpham:(res)=>{
        return Axios({
            url:`${DOMAIN_ADMIN}/Sanpham`,
            method:'POST',
            data:res
        })
    },
    laydonhang:()=>{
        return Axios({
            url:`${DOMAIN_ADMIN}/DonHang`,
            method:'GET'
        })
    },
    layshop:()=>{
        return Axios({
            url:`${DOMAIN_ADMIN}/Shop/TimKiem?offset=0&limit=-1`,
            method:'POST',
            data:{}
        })
    },
    layloaisanpham:()=>{
        return Axios({
            url:`${DOMAIN_ADMIN}/LoaiSanPham/TimKiem?offset=0&limit=-1`,
            method:'POST',
            data:{}
        })
    },
    laykhuyenmai:()=>{
        return Axios({
            url:`${DOMAIN_ADMIN}/KhuyenMai/TimKiem?offset=0&limit=-1`,
            method:'POST',
            data:{}
        })
    },

}
