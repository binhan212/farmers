
const stateDefault =  {
    loaisanphams:[]
}

export const LoaiSanPhamReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case "GET_LOAISANPHAM_REDUCER":{
            state.loaisanphams=[...action.data]
            return {...state}
        }
        default : return {...state};
    }
}