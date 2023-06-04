import React from "react";
import { useSelector } from "react-redux";
export default function Thongkenn() {
    var shops = useSelector((state) => state.ShopReducer.shopnns);
    var donhangs = useSelector((state) => state.DonHangNNReducer.sanphams);
    // Số lượng shop
    const shopCount = shops.length;

    // Số lượng đơn hàng
    const orderCount = donhangs.length;

    // Số lượng đơn hàng
    const orderCount1 = donhangs.reduce(
        (count, donhang) => count + donhang.soLuong,
        0
    );

    // Doanh thu
    const revenue = donhangs.reduce(
        (total, donhang) => total + donhang.soLuong * donhang.sanPham.gia,
        0
    );

    return (
        //   <div>
        //   <h2>Thống kê</h2>
        //   <p>Số lượng shop: {shopCount}</p>
        //   <p>Số lượng đơn hàng: {orderCount} Đơn</p>
        //   <p>Doanh thu: {revenue} VNĐ</p>
        // </div>

        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col mt-0">
                                <h5 className="card-title">Tiền Vận Chuyển</h5>
                            </div>
                            <div className="col-auto">
                                <div className="stat text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-truck align-middle"
                                    >
                                        <rect
                                            x={1}
                                            y={3}
                                            width={15}
                                            height={13}
                                        />
                                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                                        <circle cx="5.5" cy="18.5" r="2.5" />
                                        <circle cx="18.5" cy="18.5" r="2.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-1 mb-3">35,560 VNĐ</h1>
                        <div className="mb-0">
                            <span className="text-danger">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right" />{" "}
                                -3.65%{" "}
                            </span>
                            <span className="text-muted">So với tuần trước</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col mt-0">
                                <h5 className="card-title">Khách</h5>
                            </div>
                            <div className="col-auto">
                                <div className="stat text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-users align-middle"
                                    >
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx={9} cy={7} r={4} />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-1 mb-3">54</h1>
                        <div className="mb-0">
                            <span className="text-success">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right" />{" "}
                                5.25%{" "}
                            </span>
                            <span className="text-muted">So với tuần trước</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col mt-0">
                                <h5 className="card-title">Doanh Thu</h5>
                            </div>
                            <div className="col-auto">
                                <div className="stat text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-dollar-sign align-middle"
                                    >
                                        <line x1={12} y1={1} x2={12} y2={23} />
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-1 mb-3">{revenue.toLocaleString()} VNĐ</h1>
                        <div className="mb-0">
                            <span className="text-success">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right" />{" "}
                                6.65%{" "}
                            </span>
                            <span className="text-muted">So với tuần trước</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col mt-0">
                                <h5 className="card-title">Đơn đặt hàng</h5>
                            </div>
                            <div className="col-auto">
                                <div className="stat text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-shopping-cart align-middle"
                                    >
                                        <circle cx={9} cy={21} r={1} />
                                        <circle cx={20} cy={21} r={1} />
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-1 mb-3">{orderCount} Đơn</h1>
                        <div className="mb-0">
                            <span className="text-danger">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right" />{" "}
                                -2.25%{" "}
                            </span>
                            <span className="text-muted">So với tuần trước</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
