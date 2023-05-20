
const stateDefault =  {
    shops:[]
}

export const ShopReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case "GET_SHOP_REDUCER":{
            state.shops=[...action.data]
            return {...state}
        }
        default : return {...state};
    }
}