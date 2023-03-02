import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { X } from "react-feather";

const Verification = ({
  loading,
  onSubmit,
  resendCode,
  type,
  handleBack,
  formSignUp,
}) => {
  console.log("formSignUp", formSignUp?.phoneNumber);
  return (
    <div>
      <div className="login_static_info">
        <p className="back_sign_in" onClick={(e) => handleBack(e, type)}>
          <X size={30} color="#000000" />
        </p>
        <p className="auth__card-subheading text-left">
          Multi Factor Verification
          <br /> please enter (SMS) code to access your account.
          {formSignUp !== undefined ? (
            <>
              <br />
              {`SMS sent to ${formSignUp?.phoneNumber} number.`}
            </>
          ) : null}
        </p>
      </div>
      <div className="login_form">
        <Formik
          initialValues={{ username: "" }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .required("Code is required")
              .matches(/^\d{6}$/, "Code must be a six-digit number"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
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
                    Verification Code
                    <span className="input__indicator--required">*</span>
                  </label>
                  <Field
                    className="input__element"
                    type="password"
                    name="username"
                    value={values.username}
                  />
                  <ErrorMessage name="username">
                    {(msg) => <div className="error-msg">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="input__container">
                  <p>
                    Did not receive code?{" "}
                    <a href="/#" className="resen_code" onClick={resendCode}>
                      Resend Code
                    </a>
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="yellow-theme-btn button__element_button button__element--full"
                disabled={loading}
              >
                <p className="button__text">
                  Proceed &nbsp;
                  {loading ? (
                    <Spinner animation="border" variant="warning" size="sm" />
                  ) : null}
                </p>
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Verification;
