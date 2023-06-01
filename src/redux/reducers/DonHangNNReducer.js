

const stateDefault =  {
    sanphams:[]
}

export const DonHangNNReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case "GET_DONHANGNN_REDUCER":{
            state.sanphams=[...action.data]
            return {...state}
        }
        default : return {...state};
    }
}