import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { GET_DONHANG } from "../../../redux/constants/Admin/adminType";
import { useSelector } from "react-redux";
// import SanphamForm from "../../../components/Form/SanphamForm";

export default function DonHangAdmin(props) {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const sanphams = useSelector((state) => state.DonHangReducer.sanphams);

    const [search, setSearch] = useState({
        tongGia: 0
    });
    const [searchedSanPhams, setSearchedSanPhams] = useState([]);
    const [displayedSanPhams, setDisplayedSanPhams] = useState([]);

    useEffect(() => {
        const filtered = sanphams.filter((item) => {
            return (
                item.tongGia>search.tongGia
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
        dispatch({ type: GET_DONHANG });
    }, [dispatch]);

    return (
        <>
            <h1 className="h3 mb-3">
                <strong>Đơn Hàng</strong>
            </h1>

            <div>
                <div className="row">
                    <div className="col-24 col-lg-16 col-xxl-18 d-flex">
                        <div className="card flex-fill parent-table">
                            <div className="card-header">
                                <h5 className="card-title mb-0">
                                    Danh sách đơn hàng
                                </h5>
                            </div>
                            <table className="table table-hover my-0">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th className="d-none d-xl-table-cell">
                                            MaDH
                                        </th>
                                        <th className="d-none d-xl-table-cell">
                                            MaTT
                                        </th>
                                        <th className="d-none d-xl-table-cell">
                                            MoTa
                                        </th>
                                        <th>
                                            Tổng Gía
                                        </th>
                                        <th className="d-none d-md-table-cell">
                                            Chi Tiết
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {console.log(displayedSanPhams)}
                                    {
                                    displayedSanPhams.map((item, index) => {
                                        console.log(item);
                                        const stt =
                                            (currentPage - 1) * itemsPerPage +
                                            index +
                                            1;
                                        return (
                                            <tr key={index}>
                                                <td>{stt}</td>
                                                <td>{item.maDH}</td>
                                                <td className="d-none d-xl-table-cell">
                                                    {item.maTT}
                                                </td>
                                                <td className="d-none d-xl-table-cell">
                                                    {item.moTa}
                                                </td>
                                                <td className="d-none d-xl-table-cell">
                                                    {item.tongGia}
                                                </td>
                                                <td className="d-none d-md-table-cell">
                                                    <button className="btn btn-info">Xem</button>
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
