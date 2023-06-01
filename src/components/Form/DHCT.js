import React,{useRef} from "react";
import { useSelector } from "react-redux";
import { saveAs } from "file-saver";
import Packer from "docxtemplater";
import {useReactToPrint} from 'react-to-print';

export default function DHCT() {

      //in ra pdf
    const componentRef=useRef();
    const handlePrint = useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:'emp-data',
        // onAfterPrint:()=> alert('In thành công!')
    });


    const CTDHs = useSelector((state) => state.ModalReducer.itemArr);
    const Func = useSelector((state) => state.ModalReducer.Func);



    return (
        <div className="modal-content" ref={componentRef} style={{'width':'100%','height':'100%'}}>
            <div className="modal-header" >
                <h5 className="modal-title">{Func}</h5>
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <table className="table table-hover my-0">
                    <thead>
                        <tr>
                            <th className="d-none d-xl-table-cell">Mã CTDH</th>
                            <th className="d-none d-xl-table-cell">
                                Tên sản phẩm
                            </th>
                            <th className="d-none d-xl-table-cell">Tên shop</th>
                            <th className="d-none d-xl-table-cell">Tên loại</th>
                            <th className="d-none d-xl-table-cell">Tên KM</th>
                            <th className="d-none d-xl-table-cell">Số lượng</th>
                            <th className="d-none d-xl-table-cell">Gía</th>
                            <th className="d-none d-xl-table-cell">
                                Thời gian
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {CTDHs.map((CTDH, index) => {
                            return (
                                <tr key={index}>
                                    <td className="d-none d-xl-table-cell">
                                        {CTDH.maCTDH}
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        {CTDH.sanPham.tenSP}
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        {CTDH.sanPham.tenShop}
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        {CTDH.sanPham.tenLoai}
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        {CTDH.sanPham.tenKM}
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        {CTDH.sanPham.soLuong.toLocaleString()}
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        {CTDH.sanPham.gia.toLocaleString()} VNĐ
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        {CTDH.sanPham.thoiGian}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                >
                    Đóng
                </button>
                <button type="button" class="btn btn-primary" onClick={handlePrint}>
                    Lưu/Xuất
                </button>
            </div>
        </div>
    );
}