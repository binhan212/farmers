import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Sidebar() {
    return (
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <NavLink className="sidebar-brand" to="/">
                        <span className="align-middle">FARMERS</span>
                    </NavLink>
                    <ul className="sidebar-nav">
                        <li className="sidebar-header">Quản trị</li>
                        <li className="sidebar-item active">
                            <NavLink className="sidebar-link" to="/">
                                <i
                                    className="align-middle"
                                    data-feather="sliders"
                                />{" "}
                                <span className="align-middle">Thống Kê</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink
                                className="sidebar-link"
                                to="/sanpham"
                            >
                                <i
                                    className="align-middle"
                                    data-feather="user"
                                />{" "}
                                <span className="align-middle">QL Sản Phẩm</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink
                                className="sidebar-link"
                                to="/shop"
                            >
                                <i
                                    className="align-middle"
                                    data-feather="log-in"
                                />{" "}
                                <span className="align-middle">QL Shop</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink
                                className="sidebar-link"
                                to="/loaisanpham"
                            >
                                <i
                                    className="align-middle"
                                    data-feather="log-in"
                                />{" "}
                                <span className="align-middle">QL Loại SP</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink
                                className="sidebar-link"
                                to="/khuyenmai"
                            >
                                <i
                                    className="align-middle"
                                    data-feather="log-in"
                                />{" "}
                                <span className="align-middle">QL Khuyến Mại</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink
                                className="sidebar-link"
                                to="/"
                            >
                                <i
                                    className="align-middle"
                                    data-feather="log-in"
                                />{" "}
                                <span className="align-middle">QL Người Dùng</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink
                                className="sidebar-link"
                                to="/"
                            >
                                <i
                                    className="align-middle"
                                    data-feather="log-in"
                                />{" "}
                                <span className="align-middle">QL Nông Dân</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink
                                className="sidebar-link"
                                to="/donhang"
                            >
                                <i
                                    className="align-middle"
                                    data-feather="log-in"
                                />{" "}
                                <span className="align-middle">QL Đơn Hàng</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink
                                className="sidebar-link"
                                to="/"
                            >
                                <i
                                    className="align-middle"
                                    data-feather="log-in"
                                />{" "}
                                <span className="align-middle">QLCT Đơn Hàng</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink
                                className="sidebar-link"
                                to="/"
                            >
                                <i
                                    className="align-middle"
                                    data-feather="log-in"
                                />{" "}
                                <span className="align-middle">QL Đối Tác</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}
