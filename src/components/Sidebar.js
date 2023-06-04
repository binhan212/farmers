import React,{useEffect,useState} from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

export default function Sidebar() {
    var user= useSelector((state)=>state.UserLoginAdminReducer.userLogin);
    console.log(user.role);
    var [roleUr,stateRole]=useState(true);
    
    useEffect(()=>{
        if(user.role==='admin'){
            stateRole(true);
        }
        else{
            stateRole(false);
        }
    },[user])

    
   function handleClick(e){
        // var element=document.querySelectorAll('.sidebar-item');
        // for(var i=0;i<element.length;i++){
        //     if(element[i].contains('active')){
        //         element[i].classList.remove('active');
        //     }
        //     break;
        // }
        // e.target.parentElement.parentElement.classList.add('active');
        
   }

    return (
        <>
            {roleUr?(
            <nav id="sidebar" className="sidebar js-sidebar" 
            >
                <div className="sidebar-content js-simplebar">
                    <NavLink className="sidebar-brand" to="/">
                        <span className="align-middle">FARMERS</span>
                    </NavLink>
                    <ul className="sidebar-nav">
                        <li className="sidebar-header">Quản trị</li>
                        <li className="sidebar-item" onClick={handleClick}>
                            <NavLink className="sidebar-link" to="/">
                                <i
                                    className="align-middle"
                                    data-feather="sliders"
                                />{" "}
                                <span className="align-middle">Thống Kê</span>
                            </NavLink>
                        </li>
                        {/* <li className="sidebar-item" onClick={handleClick}>
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
                        <li className="sidebar-item" onClick={handleClick}>
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
                        </li> */}

                        <li className="sidebar-item" onClick={handleClick}>
                            <NavLink
                                className="sidebar-link"
                                to="/nguoidung"
                            >
                                <i
                                    className="align-middle"
                                    data-feather="log-in"
                                />{" "}
                                <span className="align-middle">QL Người Dùng</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item" onClick={handleClick}>
                            <NavLink
                                className="sidebar-link"
                                to="/taikhoan"
                            >
                                <i
                                    className="align-middle"
                                    data-feather="log-in"
                                />{" "}
                                <span className="align-middle">QL Tài Khoản</span>
                            </NavLink>
                        </li>

                        {/* <li className="sidebar-item" onClick={handleClick}>
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
                        </li> */}

                        <li className="sidebar-item" onClick={handleClick}>
                            <NavLink
                                className="sidebar-link"
                                to="/nongdan"
                            >
                                <i
                                    className="align-middle"
                                    data-feather="log-in"
                                />{" "}
                                <span className="align-middle">QL Nông Dân</span>
                            </NavLink>
                        </li>
                        {/* <li className="sidebar-item" onClick={handleClick}>
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
                        </li> */}
                        
                        <li className="sidebar-item" onClick={handleClick}>
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

                        {/* <li className="sidebar-item" onClick={handleClick}>
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
                        </li> */}

                        
                        
                        
                    </ul>
                </div>
            </nav>
            ):(
                <nav id="sidebar" className="sidebar js-sidebar" 
                >
                    <div className="sidebar-content js-simplebar">
                        <NavLink className="sidebar-brand" to="/">
                            <span className="align-middle">FARMERS</span>
                        </NavLink>
                        <ul className="sidebar-nav">
                            <li className="sidebar-header">Nông Dân</li>
                            <li className="sidebar-item">
                                <NavLink
                                    className="sidebar-link"
                                    to="/shopnn"
                                >
                                    <i
                                        className="align-middle"
                                        data-feather="user"
                                    />{" "}
                                    <span className="align-middle">QL Shop NN</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink
                                    className="sidebar-link"
                                    to="/donhangnn"
                                >
                                    <i
                                        className="align-middle"
                                        data-feather="log-in"
                                    />{" "}
                                    <span className="align-middle">QL Đơn Hàng NN</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link" to="/thongkenn">
                                    <i
                                        className="align-middle"
                                        data-feather="sliders"
                                    />{" "}
                                    <span className="align-middle">Thống Kê</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            
            )}
        </>
        
            
    );
}
