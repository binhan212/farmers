import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PHOTO_API } from "../until/Constants/SettingSystem";
import FormSanPhamShopNN from '../components/FormNN/FormSanPhamShopNN';
export default function SanPhamshop() {
    const dispatch = useDispatch();
    var sanphams = useSelector((state) => state.SanPhamReducer.sanphamshops);
    console.log(sanphams);

    return (
        <div className="col-24 col-lg-16 col-xxl-18 d-flex">
            <div className="card flex-fill">
                <div className="card-header">
                    <h5 className="card-title mb-0">Sản Phẩm Shop</h5>
                    <button
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#modelId"
                        onClick={() => {

                            dispatch({
                                type: "MODAL_FORM",
                                Component:<FormSanPhamShopNN />,
                                Func: "Thêm",
                                ItemArr: [],
                                itemObj: {},
                            });
                        }}
                    >
                        Thêm
                    </button>
                </div>
                <table className="table table-hover my-0">
                    <thead>
                        <tr>
                            <th>Tên SP</th>
                            <th className="d-none d-xl-table-cell">Ảnh</th>
                            <th className="d-none d-xl-table-cell">Gía</th>
                            <th className="d-none d-md-table-cell">Số Lượng</th>
                            <th className="d-none d-md-table-cell">Sửa</th>
                            <th className="d-none d-md-table-cell">Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sanphams.map((sp, index) => {
                            return (
                                <tr>
                                    <td>{sp.tenSP}</td>
                                    <td className="d-none d-xl-table-cell">
                                        <img
                                            src={
                                                sp.anh
                                                    ? PHOTO_API + sp.anh
                                                    : "./logo192.png"
                                            }
                                            alt=""
                                        />
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        {sp.gia}
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        {sp.soLuong}
                                    </td>
                                    <td className="d-none d-md-table-cell">
                                        <button
                                            className="btn btn-info"
                                            data-toggle="modal"
                                            data-target="#modelId"
                                            onClick={() => {
                                                dispatch({
                                                    type: "MODAL_FORM",
                                                    Component:<FormSanPhamShopNN />,
                                                    Func: "Sửa",
                                                    ItemArr: [],
                                                    itemObj: sp,
                                                });
                                            }}
                                        >
                                            Sửa
                                        </button>
                                    </td>
                                    <td className="d-none d-md-table-cell">
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => {
                                                dispatch({
                                                    type: "XOA_SANPHAM",
                                                    masp: sp.maSP,
                                                    addSub:'add'
                                                });
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
            </div>
        </div>
    );
}
