import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SanphamForm() {
  const [sanpham, setSanpham] = useState(null);
  const Func = useSelector((state) => state.ModalReducer.Func);
  const itemObj = useSelector((state) => state.ModalReducer.itemObj);
  const dispatch = useDispatch();

  // console.log(itemObj ,sanpham, tenShop)
  useEffect(() => {
    if (itemObj.tenSP) {
      setSanpham(itemObj);
    } else {
      setSanpham();
    }
  }, [itemObj]);


  const [tenShop, setTenShop] = useState();

  useEffect(() => {
    console.log('here');
    if(sanpham) 
        setTenShop(sanpham.tenShop);
    else
        setTenShop('');
  }, [sanpham])

  const handleValue=()=>{
    var obj={
        tenShop:tenShop
    }

    if(sanpham){
        dispatch({type:'SUA_API',sp:obj})
    }else{
        dispatch({type:'THEM_API',sp:obj}) 
    }
  }


  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{Func}</h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        //   onClick={handleAddClick}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="tenShop">Tên Shop:</label>
                <input
                  type="text"
                  className="form-control"
                  id="tenShop"
                  defaultValue={tenShop}
                  onChange={(e)=>setTenShop(e.target.value)}
                  value={tenShop}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="tenSP">Tên Sản phẩm:</label>
                <input
                  type="text"
                  className="form-control"
                  id="tenSP"
                  defaultValue=""
                  value={sanpham?.tenSP}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="tenLoai">Tên Loại:</label>
                <input
                  type="text"
                  className="form-control"
                  id="tenLoai"
                  defaultValue=""
                  value={sanpham?.tenLoai}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="tenKM">Tên KM:</label>
                <input
                  type="text"
                  className="form-control"
                  id="tenKM"
                  defaultValue=""
                  value={sanpham?.tenKM}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="anh">Ảnh:</label>
                <input
                  type="text"
                  className="form-control"
                  id="anh"
                  defaultValue=""
                  value={sanpham?.anh}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="gia">Giá:</label>
                <input
                  type="text"
                  className="form-control"
                  id="gia"
                  defaultValue=""
                  value={sanpham?.gia}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        //   onClick={handleAddClick}
        >
          Đóng
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={()=>handleValue()}
        >
          Lưu/Xuất
        </button>
      </div>
    </div>
  );
}
