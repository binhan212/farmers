import React,{useEffect, useRef} from "react";
import { useSelector } from "react-redux";
import { saveAs } from "file-saver";
import Packer from "docxtemplater";
import {useReactToPrint} from 'react-to-print';
import { PHOTO_API } from "../../until/Constants/SettingSystem";
import { useDispatch } from "react-redux";
export default function FormDHCTNN() {
    const dispatch = useDispatch();
      //in ra pdf
    const componentRef=useRef();
    const handlePrint = useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:'emp-data',
        // onAfterPrint:()=> alert('In thành công!')
    });
    const CTDH = useSelector((state) => state.ModalReducer.itemObj);
    const Func = useSelector((state) => state.ModalReducer.Func);

    useEffect(()=>{
        dispatch({type:"GET_NDTHEOMA",ma:CTDH.maND})
    },[dispatch,CTDH])

    const nguoidung = useSelector((state) => state.NguoiDungReducer.nguoidung);

    return (
        <div className="modal-content"  >
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
            <div class="modal-body" ref={componentRef} style={{'width':'100%','min-height':'600px'}}>
                <br />
                <h5>Thông tin đơn hàng</h5>
                <table className="table table-hover my-0">
                    <thead>
                        <tr>
                            <th className="d-none d-xl-table-cell">Mã CTDH</th>
                            <th className="d-none d-xl-table-cell">Tên SP</th>
                            <th className="d-none d-xl-table-cell">
                                Số lượng
                            </th>
                            <th className="d-none d-xl-table-cell">Gía</th>
                            <th className="d-none d-xl-table-cell">
                                Tổng Tiền
                            </th>
                            {/* <th className="d-none d-xl-table-cell">
                                Thời gian
                            </th> */}
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            <td className="d-none d-xl-table-cell">
                                {CTDH.maCTDH}
                            </td>
                            <td className="d-none d-xl-table-cell">
                                {CTDH.sanPham.tenSP}
                            </td>
                            <td className="d-none d-xl-table-cell">
                                {CTDH.soLuong}
                            </td>
                            <td className="d-none d-xl-table-cell">
                                {CTDH.sanPham.gia.toLocaleString()} VNĐ
                            </td>
                            <td className="d-none d-xl-table-cell">
                                {(CTDH.soLuong*CTDH.sanPham.gia).toLocaleString()} VNĐ
                            </td>
                            {/* <td className="d-none d-xl-table-cell">
                                {CTDH.thoiGian}
                            </td> */}
                        </tr>
                            
                    </tbody>
                </table>
                <br />
                <br />
                <br />
                <h5>Thông Tin Sản Phẩm</h5>
                <table className="table table-hover my-0">
                    <thead>
                        <tr>
                            {/* <th className="d-none d-xl-table-cell">Mã SP</th> */}
                            <th className="d-none d-xl-table-cell">Tên SP</th>
                            <th className="d-none d-xl-table-cell">Ảnh</th>
                            <th className="d-none d-xl-table-cell">Loại SP</th>
                            <th className="d-none d-xl-table-cell">Tên Shop</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            <td className="d-none d-xl-table-cell">
                                {CTDH.sanPham.tenSP}
                            </td>
                            <td className="d-none d-xl-table-cell">
                               <img src= {PHOTO_API+CTDH.sanPham.anh} alt="" />
                            </td>
                            <td className="d-none d-xl-table-cell">
                                {CTDH.sanPham.tenLoai}
                            </td>
                            <td className="d-none d-xl-table-cell">
                                {CTDH.sanPham.tenShop}
                            </td>
                        </tr>
                            
                    </tbody>
                </table>
                <br />
                <br />
                <br />
                <h5>Thông Tin Giao Hàng</h5>
                <table className="table table-hover my-0">
                    <thead>
                        <tr>
                            {/* <th className="d-none d-xl-table-cell">Mã SP</th> */}
                            <th className="d-none d-xl-table-cell">Mã Người Mua</th>
                            <th className="d-none d-xl-table-cell">Tên Người Mua</th>
                            <th className="d-none d-xl-table-cell">Địa Chỉ Giao</th>
                            <th className="d-none d-xl-table-cell">Số Điện Thoại</th>
                            <th className="d-none d-xl-table-cell">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            <td className="d-none d-xl-table-cell">
                                {nguoidung.maND}
                            </td>
                            <td className="d-none d-xl-table-cell">
                                {nguoidung.hoTen}
                            </td>
                            <td className="d-none d-xl-table-cell">
                                {nguoidung.diaChi}
                            </td>
                            <td className="d-none d-xl-table-cell">
                                {nguoidung.sdt}
                            </td>
                            <td className="d-none d-xl-table-cell">
                                {nguoidung.email}
                            </td>
                        </tr>
                            
                    </tbody>
                </table>
                <br />                
                <br />
                <div style={{"display":"flex","justifyContent":"space-around"}}>
                    <div>
                    <p>&ensp;&ensp;&ensp;Ký nhận hàng</p>
                    <p><b>chữ ký người nhận</b></p>
                    </div>
                    <div>
                    <p>&ensp;&ensp;Ký giao hàng</p>
                    <p><b>chữ ký người giao</b></p>
                    </div>
                </div>
                <br />                               
                <br />
                <br />
                <br />
                <br />
                <div style={{"display":"flex","justifyContent":"center"}}><b>Cảm ơn đã tin tưởng và mua hàng tại Fammers!</b></div>
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