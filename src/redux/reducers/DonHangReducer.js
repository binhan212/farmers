import { GET_DONHANG_REDUCER } from "../constants/Admin/adminType";


const stateDefault =  {
    sanphams:[]
}

export const DonHangReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case GET_DONHANG_REDUCER:{
            state.sanphams=[...action.data]
            return {...state}
        }
        default : return {...state};
    }
}