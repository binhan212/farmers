
const stateDefault =  {
    shops:[],
    shopnns:[]
}

export const ShopReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case "GET_SHOP_REDUCER":{
            state.shops=[...action.data]
            return {...state}
        }
        case "GET_SHOPNN_REDUCER":{
            state.shopnns=[...action.data]
            return {...state}
        }
        default : return {...state};
    }
}