
const stateDefault =  {
    taikhoans:[],
}

export const TaiKhoanReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case "GET_TAIKHOAN_REDUCER":{
            console.log(action.data)
            state.taikhoans=[...action.data]
            return {...state}
        }
        default : return {...state};
    }
}