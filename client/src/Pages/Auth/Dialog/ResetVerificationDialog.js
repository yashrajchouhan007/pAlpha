import React from "react";
import { Modal, Spinner } from "react-bootstrap";

import { Formik, ErrorMessage } from "formik";
import { X } from "react-feather";
import { forgotPasswordVerifySchema } from "../../../Schema/ForgotPasswordSchema";

const ResetVerificationDialog = ({
  handleClose,
  loading,
  handleSubmit,
  useremail,
}) => {
  const styles = {
    slideInUp3: {
      animation: "1.5s",
      animationName: "slideInUp",
    },
    slideInDown3: {
      animation: "1.5s",
      animationName: "slideInDown",
    },
  };
  return (
    <>
      <Modal className="verification_modal" show={true} onHide={handleClose}>
        <div>
          <div className="login_static_info">
            <p className="back_sign_in" onClick={() => handleClose()}>
              <X size={30} color="#000000" />
            </p>
            <h1 style={styles.slideInDown3}>Forgot your Password?</h1>
            <p
              className="auth__card-subheading text-center"
              style={styles.slideInDown3}
            >
              We’ve sent you an email to help you reset your password. Remember
              to check your spam inbox if you can’t find it.
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
                    <div
                      className="input__container form-group"
                      style={styles.slideInUp3}
                    >
                      <div className="did-floating-label-content">
                        <input
                          className="did-floating-input"
                          type="password"
                          placeholder=" "
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.verificationCode}
                          name="verificationCode"
                        />
                        <label className="did-floating-label">Code</label>
                        <ErrorMessage name="verificationCode">
                          {(msg) => <div className="error-msg">{msg}</div>}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div
                      className="input__container form-group"
                      style={styles.slideInUp3}
                    >
                      <div className="did-floating-label-content">
                        <input
                          className="did-floating-input"
                          type="password"
                          placeholder=" "
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          name="password"
                        />
                        <label className="did-floating-label">Password</label>
                        <ErrorMessage name="password">
                          {(msg) => <div className="error-msg">{msg}</div>}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div
                      className="input__container form-group"
                      style={styles.slideInUp3}
                    >
                      <div className="did-floating-label-content">
                        <input
                          className="did-floating-input"
                          type="password"
                          placeholder=" "
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                          name="confirmPassword"
                        />
                        <label className="did-floating-label">
                          Confirm Password
                        </label>
                        <ErrorMessage name="confirmPassword">
                          {(msg) => <div className="error-msg">{msg}</div>}
                        </ErrorMessage>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="yellow-theme-btn button__element_button button__element--full"
                    disabled={loading}
                    style={styles.slideInUp3}
                  >
                    <p className="button__text">
                      Reset Password &nbsp;
                      {loading ? (
                        <Spinner
                          animation="border"
                          variant="warning"
                          size="sm"
                        />
                      ) : null}
                    </p>
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ResetVerificationDialog;
