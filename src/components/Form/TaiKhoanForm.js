import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import {withFormik} from 'formik';
import{connect} from 'react-redux';
import Axios from "axios";
import { PHOTO_API } from "../../until/Constants/SettingSystem";
import parseInt from 'lodash/parseInt';


function TaiKhoanForm(props) {


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
        maTK: itemObj.maTK ||'fdd20772-3d04-444b-8cf4-39473207397d',
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
                <label htmlFor="matKhauUr">Mật Khẩu</label>
                <input
                  type="text"
                  className="form-control"
                  name="matKhauUr"
                  id="matKhauUr"
                  onChange={handleChange}
                  value={values.matKhauUr}
                />
              </div>
            </div>

          </div>

          <div className="form-row">
            <div className="col">
                <div className="form-group">
                <label htmlFor="role">Quyền:</label>
                    <select class="form-select mb-3" name='role' id='role' onChange={(event) => {values.role=event.target.value}}>
                        <option selected="">{itemObj?itemObj.role:'Chọn Quyền'}</option>
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
        maTK:'',
        taiKhoanUr:'',
        matKhauUr:'',
        role:'',

      }),
  
        validationSchema: Yup.object().shape({
        taiKhoanUr:Yup.string().required('tài khoản không được trống!')
      }),
  
      handleSubmit: (values, { props, setSubmitting }) => {
        // console.log(props);
        props.dispatch({ type: 'SAVE_TAIKHOAN', values: {...values} });
        props.dispatch({type:"CLOSE_MODAL"});
      },
    displayName: 'ADMIN',
  })(TaiKhoanForm);
  
  export default connect()(mapFormikToProps);