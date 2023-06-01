import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { GET_SANPHAM } from "../../../redux/constants/Admin/adminType";
import { useSelector } from "react-redux";
import SanphamForm from "../../../components/Form/SanphamForm";
import SanphamFormLib from "../../../components/Form/SanphamFormLib";
import { PHOTO_API } from "../../../until/Constants/SettingSystem";

export default function SanPhamAdmin(props) {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const sanphams = useSelector((state) => state.SanPhamReducer.sanphams);

    const [search, setSearch] = useState({
        tenSP: "",
        tenShop: "",
        tenLoai: "",
        tenKM: "",
    });
    const [searchedSanPhams, setSearchedSanPhams] = useState([]);
    const [displayedSanPhams, setDisplayedSanPhams] = useState([]);

    useEffect(() => {
        const filtered = sanphams.filter((item) => {
            return (
                item.tenSP.toLowerCase().includes(search.tenSP.toLowerCase()) &&
                item.tenShop
                    .toLowerCase()
                    .includes(search.tenShop.toLowerCase()) &&
                item.tenLoai
                    .toLowerCase()
                    .includes(search.tenLoai.toLowerCase()) &&
                item.tenKM.toLowerCase().includes(search.tenKM.toLowerCase())
            );
        });
        setSearchedSanPhams(filtered);
        setCurrentPage(1); // Reset trang hiện tại về 1
    }, [search, sanphams]);

    const handleSearchChange = (e) => {
        setSearch((prevSearch) => ({
            ...prevSearch,
            [e.target.name]: e.target.value,
        }));
    };

    const totalPages = Math.ceil(searchedSanPhams.length / itemsPerPage);

    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = searchedSanPhams.slice(
            indexOfFirstItem,
            indexOfLastItem
        );
        setDisplayedSanPhams(currentItems);
    }, [searchedSanPhams, currentPage, itemsPerPage]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getPageNumbers = () => {
        const pageNumbers = [];

        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 5; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push("...");
                pageNumbers.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1);
                pageNumbers.push("...");
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                pageNumbers.push(1);
                pageNumbers.push("...");
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push("...");
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    useEffect(() => {
        dispatch({ type: GET_SANPHAM });
    }, [dispatch]);

    return (
        <>
            <h1 className="h3 mb-3" style={{"cursor":"pointer"}}>
                <strong onClick={()=>{dispatch({ type: GET_SANPHAM })}}>Sản Phẩm</strong>
            </h1>

            <div>
                <div className="row">
                    <div className="col-24 col-lg-16 col-xxl-18 d-flex">
                        <div className="card flex-fill parent-table">
                            <div className="card-header">
                                <h5 className="card-title mb-0">
                                    Danh sách sản Phẩm
                                </h5>
                                <button
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#modelId"
                                    onClick={() => {
                                        dispatch({
                                            type: "MODAL_FORM",
                                            Component: <SanphamFormLib />,
                                            Func: "Thêm",
                                            ItemArr:[],
                                            itemObj:{}
                                        });
                                    }}
                                >
                                    Thêm
                                </button>
                            </div>
                            <table className="table table-hover my-0">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th className="d-none d-xl-table-cell">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="tenSP"
                                                placeholder="Tên sản phẩm..."
                                                value={search.tenSP}
                                                onChange={handleSearchChange}
                                            />
                                        </th>
                                        <th className="d-none d-xl-table-cell">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="tenShop"
                                                placeholder="Tên Shop..."
                                                value={search.tenShop}
                                                onChange={handleSearchChange}
                                            />
                                        </th>
                                        <th className="d-none d-xl-table-cell">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="tenLoai"
                                                placeholder="Loại..."
                                                value={search.tenLoai}
                                                onChange={handleSearchChange}
                                            />
                                        </th>
                                        <th>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="tenKM"
                                                placeholder="Khuyến Mại..."
                                                value={search.tenKM}
                                                onChange={handleSearchChange}
                                            />
                                        </th>
                                        <th className="d-none d-md-table-cell">
                                            Ảnh
                                        </th>
                                        <th className="d-none d-md-table-cell">
                                            Giá
                                        </th>
                                        <th className="d-none d-md-table-cell">
                                            Số lượng
                                        </th>
                                        <th className="d-none d-md-table-cell">
                                            Sửa
                                        </th>
                                        <th className="d-none d-md-table-cell">
                                            Xóa
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayedSanPhams.map((item, index) => {
                                        const stt =
                                            (currentPage - 1) * itemsPerPage +
                                            index +
                                            1;
                                        return (
                                            <tr key={index}>
                                                <td>{stt}</td>
                                                <td>{item.tenSP}</td>
                                                <td className="d-none d-xl-table-cell">
                                                    {item.tenShop}
                                                </td>
                                                <td className="d-none d-xl-table-cell">
                                                    {item.tenLoai}
                                                </td>
                                                <td className="d-none d-xl-table-cell">
                                                    {item.tenKM}
                                                </td>
                                                <td className="d-none d-md-table-cell">
                                                   <img src={item.anh?(PHOTO_API+item.anh):'./logo192.png'} placeholder="anhsanpham"/>
                                                </td>
                                                <td className="d-none d-md-table-cell">
                                                    {item.gia.toLocaleString()} VNĐ
                                                </td>
                                                <td className="d-none d-md-table-cell">
                                                    {item.soLuong.toLocaleString()}
                                                </td>
                                                <td className="d-none d-md-table-cell">
                                                    <button
                                                        className="btn btn-info"
                                                        data-toggle="modal"
                                                        data-target="#modelId"
                                                        onClick={() => {
                                                            dispatch({
                                                                type: "MODAL_FORM",
                                                                Component: <SanphamFormLib />,
                                                                Func: "Sửa",
                                                                ItemArr:[],
                                                                itemObj:item
                                                            });
                                                        }}
                                                    >
                                                        Sửa
                                                    </button>
                                                </td>
                                                <td className="d-none d-md-table-cell">
                                                    <button className="btn btn-danger"
                                                    onClick={()=>{
                                                        dispatch({type:"XOA_SANPHAM",masp:item.maSP})
                                                    }}
                                                    >
                                                        Xóa
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            <div className="pagination">
                                <ul>
                                    <li
                                        className={`${
                                            currentPage === 1 ? "disabled" : ""
                                        }`}
                                        onClick={() =>
                                            paginate(currentPage - 1)
                                        }
                                    >
                                        Prev
                                    </li>
                                    {getPageNumbers().map((number, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={`${
                                                    number === currentPage
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    paginate(
                                                        number !== "..."
                                                            ? number
                                                            : currentPage
                                                    )
                                                }
                                            >
                                                {number}
                                            </li>
                                        );
                                    })}
                                    <li
                                        className={`${
                                            currentPage === totalPages
                                                ? "disabled"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            paginate(currentPage + 1)
                                        }
                                    >
                                        Next
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


