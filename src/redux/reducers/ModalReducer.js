
import React from "react";

const stateDefault =  {
    Component:<p>MĐ</p>,
    Func:''
}

export const ModalReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case 'MODAL_FORM':{
            console.log(action.Func);
            state.Component=action.Component;
            state.Func=action.Func;
            return {...state}
        }
        default : return {...state};
    }
}