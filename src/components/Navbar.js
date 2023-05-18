import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light navbar-bg">
                <NavLink className="sidebar-toggle js-sidebar-toggle" to="/">
                    <i className="hamburger align-self-center" />
                </NavLink>
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav navbar-align">
                        <li className="nav-item dropdown">
                            <NavLink
                                className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                                to="/"
                                data-bs-toggle="dropdown"
                            >
                                <i
                                    className="align-middle"
                                    data-feather="settings"
                                />
                            </NavLink>
                            <NavLink
                                className="nav-link dropdown-toggle d-none d-sm-inline-block"
                                to="/"
                                data-bs-toggle="dropdown"
                            >
                                <img
                                    src="adminkit/img/avatars/avatar.jpg"
                                    className="avatar img-fluid rounded me-1"
                                    alt="Ảnh"
                                />{" "}
                                <span className="text-dark">Bình An</span>
                            </NavLink>
                            <div className="dropdown-menu dropdown-menu-end">
                                <NavLink className="dropdown-item" to="/">
                                    <i
                                        className="align-middle me-1"
                                        data-feather="user"
                                    />{" "}
                                    Profile
                                </NavLink>
                                <div className="dropdown-divider" />
                                <NavLink className="dropdown-item" to="/">
                                    Log out
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
