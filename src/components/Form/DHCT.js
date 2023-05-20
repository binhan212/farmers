import React from "react";
import { useSelector } from "react-redux";
import { saveAs } from "file-saver";
import Packer from "docxtemplater";
import { renderToStaticMarkup } from "react-dom/server";


export default function DHCT() {
    const CTDHs = useSelector((state) => state.ModalReducer.itemArr);
    const Func = useSelector((state) => state.ModalReducer.Func);

    const exportToWord = async () => {
        const templateURL = "/DH2.docx";
    
        try {
            const response = await fetch(templateURL);
            const template = await response.blob();
            
            const doc = new Packer().loadZip(template);
            console.log(doc);
            const data = {
                CTDHs: CTDHs,
            };
    
            doc.setData(data);
            doc.render();
    
            const output = doc.getZip().generate({ type: "blob" });
    
            saveAs(output, "exported.docx");
        } catch (error) {
            console.error("Error while downloading the template:", error);
        }
    };
    
    
      


    return (
        <div className="modal-content">
            <div className="modal-header">
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
                                        {CTDH.sanPham.soLuong}
                                    </td>
                                    <td className="d-none d-xl-table-cell">
                                        {CTDH.sanPham.gia}
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
                <button type="button" class="btn btn-primary" onClick={exportToWord}>
                    Lưu/Xuất
                </button>
            </div>
        </div>
    );
}