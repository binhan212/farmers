
const stateDefault =  {
    khuyenmais:[]
}

export const KhuyenMaiReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case "GET_KHUYENMAI_REDUCER":{
            state.khuyenmais=[...action.data]
            return {...state}
        }
        default : return {...state};
    }
}