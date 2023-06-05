import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import {withFormik} from 'formik';
import{connect} from 'react-redux';
import Axios from "axios";
import { PHOTO_API } from "../../until/Constants/SettingSystem";



function FormShopNN(props) {


  const Func = useSelector((state) => state.ModalReducer.Func);
  const itemObj = useSelector((state) => state.ModalReducer.itemObj);
  // console.log(itemObj);
  const dispatch = useDispatch();
  var nongdan=JSON.parse(localStorage.getItem('nongdan'));
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setValues,
    touched
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
        maNN:itemObj.maNN || nongdan.maNN,
        maShop:itemObj.maShop || '',
        tenShop: itemObj.tenShop || '',
        anh: itemObj.anh || '',
        moTa: itemObj.moTa || ''
      });
    }
  }, [itemObj, setValues]);

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
                <label htmlFor="tenShop">Tên Shop</label>
                <input
                  type="text"
                  className="form-control"
                  id="tenShop"
                  name="tenShop"
                  onChange={handleChange}
                  value={values.tenShop}
                />
                {errors.tenShop && touched.tenShop ? (
                  <p>{errors.tenShop}</p>
                ):null}
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
                {errors.moTa && touched.moTa ? (
                  <p>{errors.moTa}</p>
                ):null}
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
                {/* <button className="btn" onClick={xulyApi}>cập nhật</button> */}
                <img src={values.anh?(PHOTO_API+values.anh):'./logo192.png'} placeholder="anhsanpham"/>
                <p>{values.anh}</p>
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
        maNN:'',
        tenShop:'',
        maShop:'',
        anh:'',
        moTa:'',
        func:''

      }),
  
        validationSchema: Yup.object().shape({
        tenShop:Yup.string().min(2, "Tối thiểu 2 ký tự")
        .max(50, "Nhiều nhất 50 ký tự")
        .required("Không được để trống!"),
        moTa:Yup.string().min(2, "Tối thiểu 2 ký tự")
        .max(50, "Nhiều nhất 50 ký tự")
        .required("Không được để trống!"),
      }),
  
      handleSubmit: (values, { props, setSubmitting }) => {
        console.log(12346554634);
        props.dispatch({ type: 'SAVE_SHOPNN', values: values });
       props.dispatch({type:"CLOSE_MODAL"});
      },
    displayName: 'ADMIN',
  })(FormShopNN);
  
  export default connect()(mapFormikToProps);