import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row text-muted">
                    <div className="col-6 text-start">
                        <p className="mb-0">
                            <NavLink
                                className="text-muted"
                                to="/"
                                target="_blank"
                            >
                                <strong>Quản Lý</strong>
                            </NavLink>{" "}
                            -{" "}
                            <NavLink
                                className="text-muted"
                                to="/"
                                target="_blank"
                            >
                                <strong>Trang</strong>
                            </NavLink>{" "}
                            ©
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
