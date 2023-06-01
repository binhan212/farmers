// import { Route } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Modal from "../../HOC/Modal";
import {Route, Redirect} from 'react-router-dom';

import ContentHomeTemplate from "./ContentHomeTemplate";

export const HomeTemplate = (props) => {
    let { Component,isAuthenticated, ...resRoute } = props;
    console.log(isAuthenticated);
    

    const token = localStorage.getItem('access_token');
    if(token){
        isAuthenticated=true;
    }

    return (
        <Route
            {...resRoute}

            render={(propsRoute) => {
                return (
                    isAuthenticated? <ContentHomeTemplate Comp={<Component {...propsRoute} />} />: <Redirect to="/login" />
                    // isAuthenticated? <Redirect to="/login" />:<ContentHomeTemplate Comp={<Component {...propsRoute} />} />
                    // isAuthenticated? <ContentHomeTemplate Comp={<Component {...propsRoute} />} />:
                    // <div class="wrapper">
                    //     <Modal />
                    //     <Sidebar />
                    //     <div className="main">
                    //         <Navbar />
                    //         <main className="content">
                    //             <div className="container-fluid p-0">
                    //                 <Component {...propsRoute} />
                    //             </div>
                    //         </main>
                    //         <Footer />
                    //     </div>
                    // </div>

                );
            }}
        />
    );
};
