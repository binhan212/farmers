import { USER_LOGIN, USLOGIN } from "../constants/Admin/adminType";


let usLogin = {};

if(localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault =  {
    userLogin : usLogin
}

export const UserLoginAdminReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case USLOGIN:{
            state.userLogin=action.userlg;
            return {...state};

        }
        default : return {...state};
    }
}