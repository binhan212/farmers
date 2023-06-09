import { Route } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Modal from "../../HOC/Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContentHomeTemplate(props) {
    return (
        <div class="wrapper">
            <Modal />
            <Sidebar />
            <div className="main">
                <Navbar />
                <main className="content">
                    <div className="container-fluid p-0">{props.Comp}</div>
                </main>
                <Footer />
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}
