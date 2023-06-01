import { GET_SANPHAM_REDUCER } from "../constants/Admin/adminType";


const stateDefault =  {
    sanphams:[],
    sanphamshops:[]
}

export const SanPhamReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case GET_SANPHAM_REDUCER:{
            state.sanphams=[...action.data]
            return {...state}
        }
        case 'UPDATE_SANPHAMSHOP':{
            // console.log(action.data);
            state.sanphamshops=[...action.data]
            return {...state}
        }
        
        default : return {...state};
    }
}