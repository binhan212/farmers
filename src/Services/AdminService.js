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
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Sanpham`,
            method:'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    themsanpham:(res)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Sanpham`,
            method:'POST',
            data:res,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    xoasanpham:(res)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Sanpham?ma=${res}`,
            method:'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    xoanhieusanpham:(res)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Sanpham/XoaMutiple?ma=${res}`,
            method:'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    
    laysanphamshop:(ma)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Sanpham/TimKiem?offset=0&limit=-1`,
            method:'POST',
            data:{maShop:ma},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },

    suasanpham:(res)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Sanpham`,
            method:'PUT',
            data:res,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    laydonhang:()=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/DonHang/GetDonHang`,
            method:'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    layshop:()=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Shop/TimKiem?offset=0&limit=-1`,
            method:'POST',
            data:{},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    themshopnn:(obj)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Shop`,
            method:'POST',
            data:obj,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    suashopnn:(obj)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Shop`,
            method:'PUT',
            data:obj,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    layshopnn:(ma)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Shop/TimKiem?offset=0&limit=-1`,
            method:'POST',
            data:{maNN:ma},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    xoashop:(ma)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Shop?ma=${ma}`,
            method:'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    layloaisanpham:()=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/LoaiSanPham/TimKiem?offset=0&limit=-1`,
            method:'POST',
            data:{},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    laykhuyenmai:()=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/KhuyenMai/TimKiem?offset=0&limit=-1`,
            method:'POST',
            data:{},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    timnongdantheomanguoidung:(ma)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Nongdan/TimKiem?offset=0&limit=-1`,
            method:'POST',
            data:{maND:ma},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },

    laydonhangnn:(ma)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/CTDH/GetCTDHNN?ma=${ma}`,
            method:'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },

    laynguoidung:()=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Nguoidung/TimKiem?offset=0&limit=-1`,
            method:'POST',
            data:{},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    laynguoidungtheoma:(ma)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Nguoidung/TimKiem?offset=0&limit=-1`,
            method:'POST',
            data:{maND:ma},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    themnguoidung:(res)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Nguoidung`,
            method:'POST',
            data:res,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    laytaikhoan:()=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/TaiKhoan/TimKiem?offset=0&limit=-1`,
            method:'POST',
            data:{},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    themtaikhoan:(res)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/TaiKhoan`,
            method:'POST',
            data:res,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    suataikhoan:(res)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/TaiKhoan`,
            method:'PUT',
            data:res,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    laynongdan:()=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/Nongdan/TimKiem?offset=0&limit=-1`,
            method:'POST',
            data:{},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    layttdh:(ma)=>{
        const token = localStorage.getItem('access_token');
        return Axios({
            url:`${DOMAIN_ADMIN}/TTDH/TimKiem?offset=0&limit=-1`,
            method:'POST',
            data:{maTT:ma},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
}
