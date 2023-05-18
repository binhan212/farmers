import { Route } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";


export const UserLoginTemplate = (props) => {
    let { Component, ...resRoute } = props;
    return (
        <Route
            {...resRoute}
            render={(propsRoute) => {
                return (
                    <>
                        <Component {...propsRoute} />
                    </>
                );
            }}
        />
    );
};
