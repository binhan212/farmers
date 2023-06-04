
const stateDefault =  {
    nongdans:[],
}

export const NongDanReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case "GET_NONGDAN_REDUCER":{
            console.log(action.data)
            state.nongdans=[...action.data]
            return {...state}
        }
        default : return {...state};
    }
}