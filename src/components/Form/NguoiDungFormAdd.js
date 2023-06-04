import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import {withFormik} from 'formik';
import{connect} from 'react-redux';
import Axios from "axios";
import { PHOTO_API } from "../../until/Constants/SettingSystem";
import parseInt from 'lodash/parseInt';


function NguoiDungFormAdd(props) {


  const Func = useSelector((state) => state.ModalReducer.Func);
  const itemObj = useSelector((state) => state.ModalReducer.itemObj);
  // console.log(itemObj);
  const dispatch = useDispatch();

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
        maND:itemObj.maND || 'fdd20772-3d04-444b-8cf4-39473207397d',
        hoTen:itemObj.hoTen || '',
        tuoi:itemObj.tuoi || 0,
        gioiTinh:itemObj.gioiTinh || '',
        email: itemObj.email || '',
        diaChi: itemObj.diaChi || '',
        sdt: itemObj.sdt || '',
        moTa: itemObj.moTa || '',
        maTK: itemObj.anh ||'fdd20772-3d04-444b-8cf4-39473207397d',
        taiKhoanUr: itemObj.taiKhoanUr || '',
        matKhauUr: itemObj.matKhauUr || '',
        role: itemObj.role || ''
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
                <label htmlFor="hoTen">Họ Tên:</label>
                <input
                  type="text"
                  className="form-control"
                  id="hoTen"
                  name="hoTen"
                  onChange={handleChange}
                  value={values.hoTen}
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="tuoi">Tuổi:</label>
                <input
                  type="text"
                  className="form-control"
                  name="tuoi"
                  id="tuoi"
                  onChange={handleChange}
                  value={values.tuoi}
                />
              </div>
            </div>

          </div>


          <div className="form-row">

          <div className="col">
                <div className="form-group">
                <label htmlFor="gioiTinh">Giới Tính:</label>
                    <select class="form-select mb-3" name='gioiTinh' id='gioiTinh' onChange={(event) => {values.gioiTinh=event.target.value}}>
                        <option selected="">Chọn giới tính</option>
                        <option value="0">nam</option>
                        <option value="1">nữ</option>
                    </select>
                </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
            </div>

          </div>

          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="diaChi">Địa Chỉ:</label>
                <input
                  type="text"
                  className="form-control"
                  id="diaChi"
                  name="diaChi"
                  onChange={handleChange}
                  value={values.diaChi}
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="sdt">SĐT:</label>
                <input
                  type="text"
                  className="form-control"
                  id="sdt"
                  name="sdt"
                  onChange={handleChange}
                  value={values.sdt}
                />
              </div>
            </div>

          </div>

          <div className="form-row">
            <div className="col">
                <div className="form-group">
                    <label htmlFor="taiKhoanUr">Tài Khoản:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="taiKhoanUr"
                    name="taiKhoanUr"
                    onChange={handleChange}
                    value={values.taiKhoanUr}
                    />
                </div>
            </div>
            <div className="col">
                <div className="form-group">
                    <label htmlFor="matKhauUr">Mật Khẩu:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="matKhauUr"
                    name="matKhauUr"
                    onChange={handleChange}
                    value={values.matKhauUr}
                    />
                </div>
            </div>
          </div>

          <div className="form-row">
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
            <div className="col">
                <div className="form-group">
                <label htmlFor="role">Quyền:</label>
                    <select class="form-select mb-3" name='role' id='role' onChange={(event) => {values.role=event.target.value}}>
                        <option selected="">Chọn Quyền</option>
                        <option value="admin">admin</option>
                        <option value="nông dân">nông dân</option>
                        <option value="khách hàng">khách hàng</option>
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
        maND:'',
        hoTen:'',
        tuoi:0,
        gioiTinh:'',
        email:'',
        diaChi:'',
        sdt:'',
        moTa:'',
        maTK:'',
        taiKhoanUr:'',
        matKhauUr:'',
        role:'',
        func:''

      }),
  
        validationSchema: Yup.object().shape({
        hoTen:Yup.string().required('họ tên không được trống!')
      }),
  
      handleSubmit: (values, { props, setSubmitting }) => {
        // console.log(props);
        const tuoi = parseInt(values.tuoi);
        props.dispatch({ type: 'SAVE_NGUOIDUNG', values: { ...values, tuoi } });
        props.dispatch({type:"CLOSE_MODAL"});
      },
    displayName: 'ADMIN',
  })(NguoiDungFormAdd);
  
  export default connect()(mapFormikToProps);