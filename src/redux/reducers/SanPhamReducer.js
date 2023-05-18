import { GET_SANPHAM_REDUCER } from "../constants/Admin/adminType";


const stateDefault =  {
    sanphams:[]
}

export const SanPhamReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case GET_SANPHAM_REDUCER:{
            state.sanphams=[...action.data]
            return {...state}
        }
        default : return {...state};
    }
}