import React from "react";

const stateDefault = {
    Component: <p>MĐ</p>,
    Func: "",
    itemObj: {},
    itemArr: [],
};

export const ModalReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "MODAL_FORM": {
            console.log(action.Func);
            console.log(action.itemObj);
            state.Component = action.Component;
            state.Func = action.Func;
            state.itemArr = [...action.ItemArr];
            state.itemObj = { ...action.itemObj };
            return { ...state };
        }
        default:
            return { ...state };
    }
};
