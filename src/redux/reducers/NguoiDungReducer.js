
const stateDefault =  {
    nguoidungs:[],
    nguoidung:{}
}

export const NguoiDungReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case "GET_NGUOIDUNG_REDUCER":{
            console.log(action.data)
            state.nguoidungs=[...action.data]
            return {...state}
        }
        case "GET_NGUOIDUNG_THEOMA":{
            state.nguoidung={...action.data}
            return {...state}
        }
        default : return {...state};
    }
}