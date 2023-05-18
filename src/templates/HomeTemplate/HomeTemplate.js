import { Route } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Modal from "../../HOC/Modal";

export const HomeTemplate = (props) => {
    let { Component, ...resRoute } = props;
    return (
        <Route
            {...resRoute}
            render={(propsRoute) => {
                return (
                    <div class="wrapper">
                        <Modal />
                        <Sidebar />
                        <div className="main">
                            <Navbar />
                            <main className="content">
                                <div className="container-fluid p-0">
                                    <Component {...propsRoute} />
                                </div>
                            </main>
                            <Footer />
                        </div>
                    </div>
                );
            }}
        />
    );
};
