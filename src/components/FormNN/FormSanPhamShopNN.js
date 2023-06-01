import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import {withFormik} from 'formik';
import{connect} from 'react-redux';
import Axios from "axios";
import { PHOTO_API } from "../../until/Constants/SettingSystem";



function FormSanPhamShopNN(props) {


  const Func = useSelector((state) => state.ModalReducer.Func);
  const itemObj = useSelector((state) => state.ModalReducer.itemObj);
  // console.log(itemObj);
    const dispatch = useDispatch();
    const mashop=JSON.parse(localStorage.getItem('mashop'));
    const tenshop=JSON.parse(localStorage.getItem('tenshop'));


  useEffect(()=>{
    dispatch({type:'GET_LOAISANPHAM'})
  },[])

  useEffect(()=>{    
    dispatch({type:'GET_KHUYENMAI'})
  },[])

  const loaisanphams = useSelector((state) => state.LoaiSanPhamReducer.loaisanphams);
  const khuyenmais = useSelector((state) => state.KhuyenMaiReducer.khuyenmais);
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setValues
  } = props;

  const [anh,setAnh]=useState('')
  function xulyAnh(e){
    // console.log(e.target.files[0])
    setAnh(e.target.files[0])
    values.anh=e.target.files[0].name;
  }
  function xulyApi(){
    const formData=new FormData();
    formData.append('Photos',anh);
    console.log(formData);
    Axios.post('https://localhost:7165/api/Sanpham/Upload',formData).then((res)=>{console.log(res)})
  }

  useEffect(() => {
    // Update form values if itemObj is available
    if (itemObj) {
      setValues({
        maSP:itemObj.maSP || 'fdd20772-3d04-444b-8cf4-39473207397d',
        maShop:itemObj.maShop || mashop,
        maLoai:itemObj.maLoai || '',
        maKM:itemObj.maKM || '',
        tenShop: itemObj.tenShop || tenshop,
        tenSP: itemObj.tenSP || '',
        tenLoai: itemObj.tenLoai || '',
        tenKM: itemObj.tenKM || '',
        anh: itemObj.anh || '',
        gia: itemObj.gia || 0,
        soLuong: itemObj.soLuong || 0,
        moTa: itemObj.moTa || ''
      });
    }
  }, [itemObj, setValues,mashop,tenshop]);

  values.func = Func;



  

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{Func}</h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

        <form onSubmit={handleSubmit}>
          <div className="form-row">

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

            <div className="col">
              <div className="form-group">
                <label htmlFor="gia">Giá:</label>
                <input
                  type="text"
                  className="form-control"
                  name="gia"
                  id="gia"
                  onChange={handleChange}
                  value={values.gia.toLocaleString()}
                />
              </div>
            </div>

          </div>


          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="anh">Ảnh:</label>
                <input
                  type="file"
                  className="form-control"
                  id="anh"
                  name="file"
                  onChange={xulyAnh}
                />
                <img src={values.anh?(PHOTO_API+values.anh):'./logo192.png'} placeholder="anhsanpham"/>
                <p>{values.anh}</p>
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
                <label htmlFor="listLoai">Loại SP:</label>
                <select class="form-select mb-3 choices-single" id="listLoai" name="listLoai" defaultValue='' onChange={(event) => {values.maLoai=event.target.value}}>
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

          <div className="form-row">
          <div className="col">
              <div className="form-group">
                <label htmlFor="shop">Shop:</label>
                <input
                  type="text"
                  className="form-control"
                  id="tenShop"
                  name="tenShop"
                  onChange={handleChange}
                  value={values.tenShop}
                  disabled
                />
              </div>
              </div>


            <div className="col">
              <div className="form-group">
                <label htmlFor="listKhuyenmai">Khuyến Mại:</label>
                <select class="form-select mb-3" id="listKhuyenmai" name="listKhuyenmai" defaultValue='' onChange={(event) => {values.maKM=event.target.value}}>
                <option selected="" >{itemObj?itemObj.tenKM:''}</option>
                    {khuyenmais.map((khuyenmai,index)=>{
                      return (
                        <option key={index} value={khuyenmai.maKM}>{khuyenmai.tenKM}</option>
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
          onClick={() => {
            xulyApi();
            handleSubmit();}}
          data-dismiss="modal"
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
        maSP:'',
        tenShop:'',
        maShop:'',
        maLoai:'',
        tenSP:'',
        tenLoai:'',
        tenKM:'',
        maKM:'',
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
        props.dispatch({ type: 'SAVE_SANPHAM', values: values ,addSub:'add'});
        props.dispatch({type:"CLOSE_MODAL"});
      },
    displayName: 'ADMIN',
  })(FormSanPhamShopNN);
  
  export default connect()(mapFormikToProps);