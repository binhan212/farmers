import React from "react";
import { Route } from "react-router-dom";
import "./login.css";

import * as Yup from 'yup';
import {withFormik} from 'formik';
import{connect} from 'react-redux';
import { signinAdminAction } from "../../../redux/actions/AdminAction/AdminAction";
function Login(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

    return (
        <div>
            <div className="wrapper1 fadeInDown">
                <div id="formContent">
                    <h2 className="active" name="adminName">ADMIN</h2>
                    {/* <h2 className="inactive underlineHover">Đăng Ký </h2> */}
                    <div className="fadeIn first">
                        <img
                            src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-barn-icon-png-image_3760548.jpg"
                            id="icon"
                            alt="User Icon"
                        />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="fadeIn second"
                            name="taikhoan"
                            placeholder="Tài Khoản"
                            onChange={handleChange}
                        />

                        <div className="text-danger">{errors.taikhoan}</div>

                        <input
                            type="text"
                            className="fadeIn third"
                            name="matkhau"
                            placeholder="Mật Khẩu"
                            onChange={handleChange}
                        />

                        <div className="text-danger">{errors.matkhau}</div>

                        <input
                            type="submit"
                            className="fadeIn fourth"
                            defaultValue="Log In"
                            onClick={handleSubmit}
                        />

                    </form>
                    <div id="formFooter">
                        <a className="underlineHover" href="/" placeholder="12">
                            Quên Mật Khẩu?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapFormikToProps=withFormik({
  mapPropsToValues: () => (
    {
       taikhoan: '',
       matkhau:''
    }),

      validationSchema: Yup.object().shape({
      taikhoan:Yup.string().required('Tài khoản không được trống!'),
      matkhau:Yup.string().min(6,'Mật khẩu tối thiểu 6 kí tự!').max(6,'Mật khẩu tối đa 32 kí tự!')
    }),

  handleSubmit: (values, { props, setSubmitting }) => {
    
      props.dispatch(signinAdminAction(values.taikhoan,values.matkhau));
  },
  displayName: 'ADMIN',
})(Login);

export default connect()(mapFormikToProps);