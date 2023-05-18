import {USER_SIGNIN_API} from '../../constants/Admin/adminType';

export const signinAdminAction=(taikhoan,matkhau)=>{
    return {
        type:USER_SIGNIN_API,
        taikhoanUr:taikhoan,
        matkhauUr:matkhau
    }
}