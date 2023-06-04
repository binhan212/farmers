import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NguoiDungFormAdd from "../../../components/Form/NguoiDungFormAdd";

export default function NguoiDungAdmin() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const sanphams = useSelector((state) => state.NguoiDungReducer.nguoidungs);
    console.log(sanphams);
    const [search, setSearch] = useState({
        hoTen: ""
    });
    const [searchedSanPhams, setSearchedSanPhams] = useState([]);
    const [displayedSanPhams, setDisplayedSanPhams] = useState([]);

    useEffect(() => {
        const filtered = sanphams.filter((item) => {
            return (
                
                item.hoTen
                    .toLowerCase()
                    .includes(search.hoTen.toLowerCase())
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
        dispatch({ type: 'GET_NGUOIDUNG' });
    }, [dispatch]);


  return (
    <div>
      <h1 className="h3 mb-3" style={{"cursor":"pointer"}}>
                <strong onClick={()=>{dispatch({ type: 'GET_SHOP' })}}>Người Dùng</strong>
            </h1>

            <div>
                <div className="row">
                    <div className="col-24 col-lg-16 col-xxl-18 d-flex">
                        <div className="card flex-fill parent-table">
                            <div className="card-header">
                                <h5 className="card-title mb-0">
                                    Danh sách người dùng
                                </h5>
                                {/* <button
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#modelId"
                                    onClick={() => {
                                        dispatch({
                                            type: "MODAL_FORM",
                                            Component: <NguoiDungFormAdd />,
                                            Func: "Thêm",
                                            ItemArr:[],
                                            itemObj:{}
                                        });
                                    }}
                                >
                                    Thêm
                                </button> */}
                            </div>
                            <table className="table table-hover my-0">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th className="d-none d-xl-table-cell">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="hoTen"
                                                placeholder="Họ Tên..."
                                                value={search.hoTen}
                                                onChange={handleSearchChange}
                                            />
                                        </th>
                                      
                                        <th className="d-none d-md-table-cell">
                                            Tuổi
                                        </th>
                                        <th className="d-none d-md-table-cell">
                                            Giới Tính
                                        </th>
                                        <th className="d-none d-md-table-cell">
                                            Email
                                        </th>
                                        <th className="d-none d-md-table-cell">
                                            Địa Chỉ
                                        </th>
                                        <th className="d-none d-md-table-cell">
                                            SĐT
                                        </th>
                                        {/* <th className="d-none d-md-table-cell">
                                            Sửa
                                        </th>
                                        <th className="d-none d-md-table-cell">
                                            Xóa
                                        </th> */}
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
                                                <td>{item.hoTen}</td>
                                                <td className="d-none d-md-table-cell">
                                                    {item.tuoi}
                                                </td>
                                                <td className="d-none d-md-table-cell">
                                                    {item.gioiTinh==='0'?'Nam':'Nữ'}
                                                </td>
                                                <td className="d-none d-md-table-cell">
                                                    {item.email}
                                                </td>
                                                <td className="d-none d-md-table-cell">
                                                    {item.diaChi}
                                                </td>
                                                <td className="d-none d-md-table-cell">
                                                    {item.sdt}
                                                </td>
                                                {/* <td className="d-none d-md-table-cell">
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
                                                </td> */}
                                                {/* <td className="d-none d-md-table-cell">
                                                    <button className="btn btn-danger">
                                                        Xóa
                                                    </button>
                                                </td> */}
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
    </div>
  )
}
