import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import {withFormik} from 'formik';
import{connect} from 'react-redux';

function SanphamFormLib(props) {
  const Func = useSelector((state) => state.ModalReducer.Func);
  const itemObj = useSelector((state) => state.ModalReducer.itemObj);
  // console.log(itemObj);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type:'GET_SHOP'})
  },[])

  useEffect(()=>{
    dispatch({type:'GET_LOAISANPHAM'})
  },[])

  useEffect(()=>{    
    dispatch({type:'GET_KHUYENMAI'})
  },[])

  const loaisanphams = useSelector((state) => state.LoaiSanPhamReducer.loaisanphams);
  const khuyenmais = useSelector((state) => state.KhuyenMaiReducer.khuyenmais);
  const shops = useSelector((state) => state.ShopReducer.shops);

  // console.log(loaisanphams);
  // console.log(khuyenmais);
  // console.log(shops);


  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setValues
  } = props;

  useEffect(() => {
    // Update form values if itemObj is available
    if (itemObj) {
      setValues({
        tenShop: itemObj.tenShop || '',
        tenSP: itemObj.tenSP || '',
        tenLoai: itemObj.tenLoai || '',
        tenKM: itemObj.tenKM || '',
        anh: itemObj.anh || '',
        gia: itemObj.gia || 0,
        soLuong: itemObj.soLuong || 0,
        moTa: itemObj.moTa || ''
      });
    }
  }, [itemObj, setValues]);

  values.func=Func;

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

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="tenShop">Tên Shop:</label>
                <input
                  type="text"
                  className="form-control"
                  id="tenShop"
                  name="tenShop"
                  onChange={handleChange}
                  value={values.tenShop}
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
                  name="tenSP"
                  onChange={handleChange}
                  value={values.tenSP}
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
                  name="tenLoai"
                  onChange={handleChange}
                  value={values.tenLoai}
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
                  name="tenKM"
                  onChange={handleChange}
                  value={values.tenKM}
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
                  name="anh"
                  onChange={handleChange}
                  value={values.anh}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="gia">Giá:</label>
                <input
                  type="text"
                  className="form-control"
                  name="gia"
                  id="gia"
                  onChange={handleChange}
                  value={values.gia}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="soLuong">Số Lượng:</label>
                <input
                  type="text"
                  className="form-control"
                  id="soLuong"
                  name="soLuong"
                  onChange={handleChange}
                  value={values.soLuong}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="moTa">Mô Tả:</label>
                <input
                  type="text"
                  className="form-control"
                  id="moTa"
                  name="moTa"
                  onChange={handleChange}
                  value={values.moTa}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="listShop">Shop:</label>
                <select class="form-select mb-3" id="listShop" name="listShop">
                    {shops.map((shop,index)=>{
                      return (
                        <option key={index}>{shop.tenShop}</option>
                      )
                    })}
              </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="listKhuyenmai">Khuyến Mại:</label>
                <select class="form-select mb-3" id="listKhuyenmai" name="listKhuyenmai">
                    {khuyenmais.map((khuyenmai,index)=>{
                      return (
                        <option key={index}>{khuyenmai.tenKM}</option>
                      )
                    })}
              </select>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="listLoai">Loại SP:</label>
                <select class="form-select mb-3 choices-single" id="listLoai" name="listLoai" onChange={(event) => {values.maLoai=event.target.value}}>
                {/* <option></option> */}
                <option selected="" >{itemObj?itemObj.tenLoai:''}</option>
                    {loaisanphams.map((loaisanpham,index)=>{
                      return (
                        <option key={index} value={loaisanpham.maLoai}>{loaisanpham.tenLoai}</option>
                      )
                    })}
              </select>
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
        >
          Đóng
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleSubmit()}
        >
          Lưu/Xuất
        </button>
      </div>
    </div>
  );
}

const mapFormikToProps=withFormik({
    mapPropsToValues: () => (
      {
        tenShop:'',
        maLoai:'',
        tenSP:'',
        tenLoai:'',
        tenKM:'',
        anh:'',
        gia:0,
        soLuong:0,
        moTa:'',
        func:''

      }),
  
        validationSchema: Yup.object().shape({
        tenSP:Yup.string().required('tenSP không được trống!')
      }),
  
      handleSubmit: (values, { props, setSubmitting }) => {
        console.log(props);
        props.dispatch({ type: 'SAVE_SANPHAM', values: values });
      },
    displayName: 'ADMIN',
  })(SanphamFormLib);
  
  export default connect()(mapFormikToProps);