import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { X } from "react-feather";
import "./reset.css";
import { forgotPasswordVerifySchema } from "../../../Schema/ForgotPasswordSchema";

const ResetVerificationForm = ({ loading, handleSubmit, useremail }) => {
  return (
    <>
      <div className="login_static_info">
        <Link to="/auth/signin" className="back_sign_in">
          <X size={30} color="#000000" />
        </Link>
        <h1 className="auth__card-heading">Forgot your Password?</h1>
        <p className="auth__card-subheading">
          We’ve sent you an email to help you reset your password. Remember to
          check your spam inbox if you can’t find it.
        </p>
      </div>
      <div className="login_form">
        <Formik
          initialValues={{
            verificationCode: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={forgotPasswordVerifySchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            handleSubmit(values, useremail);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="auth__card-form mb4">
                <div className="input__container form-group">
                  <label className="input__label">
                    Code
                    <span className="input__indicator--required">*</span>
                  </label>
                  <input
                    className="input__element"
                    type="password"
                    name="verificationCode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.verificationCode}
                  />
                  <ErrorMessage name="verificationCode">
                    {(msg) => <div className="error-msg">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="input__container form-group">
                  <label className="input__label">
                    Password
                    <span className="input__indicator--required">*</span>
                  </label>
                  <input
                    className="input__element"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <ErrorMessage name="password">
                    {(msg) => <div className="error-msg">{msg}</div>}
                  </ErrorMessage>
                  <div className="error-msg">
                    {errors.password && touched.password && errors.password}
                  </div>
                </div>
                <div className="input__container form-group">
                  <label className="input__label">
                    Confirm Password
                    <span className="input__indicator--required">*</span>
                  </label>
                  <input
                    className="input__element"
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                  <ErrorMessage name="confirmPassword">
                    {(msg) => <div className="error-msg">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <button
                type="submit"
                className="yellow-theme-btn button__element_button button__element--full"
                disabled={loading}
              >
                <p className="button__text">
                  Reset Password &nbsp;
                  {loading ? (
                    <Spinner animation="border" variant="warning" size="sm" />
                  ) : null}
                </p>
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ResetVerificationForm;
