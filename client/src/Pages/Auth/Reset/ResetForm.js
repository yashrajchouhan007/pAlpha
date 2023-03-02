import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { forgotPasswordEmailSchema } from "../../../Schema/ForgotPasswordSchema";

import "./reset.css";

const ResetForm = ({ loading, handleSubmit }) => {
  const styles = {
    zoomIn: {
      animation: "1s",
      animationName: "zoomIn",
    },
    slideInUp3: {
      animation: "1.5s",
      animationName: "slideInUp",
    },
  };
  return (
    <>
      <div className="login_static_info">
        <h1 className="auth__card-heading" style={styles.zoomIn}>
          Forgot your Password?
        </h1>
        <p className="auth__card-subheading" style={styles.zoomIn}>
          That’s ok. It happens.Let’s get you a new password.
        </p>
      </div>
      <div className="login_form">
        <Formik
          initialValues={{ userEmail: "" }}
          validationSchema={forgotPasswordEmailSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            handleSubmit(values);
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
                      type="text"
                      placeholder=" "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userEmail}
                      name="userEmail"
                    />
                    <label className="did-floating-label">Email</label>
                    <ErrorMessage name="userEmail">
                      {(msg) => <div className="error-msg">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  {/* <label className="input__label">
                    Email
                    <span className="input__indicator--required">*</span>
                  </label>
                  <input
                    className="input__element"
                    type="text"
                    name="userEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userEmail}
                  />
                  <ErrorMessage name="userEmail">
                    {(msg) => <div className="error-msg">{msg}</div>}
                  </ErrorMessage> */}
                </div>
              </div>

              <button
                type="submit"
                className="yellow-theme-btn button__element_button button__element--full"
                disabled={loading}
              >
                <p className="button__text">
                  Submit &nbsp;
                  {loading ? (
                    <Spinner animation="border" variant="warning" size="sm" />
                  ) : null}
                </p>
              </button>
            </form>
          )}
        </Formik>
        <div className="login_bottom_section">
          <p style={styles.zoomIn}>
            <span>Already have an account ?</span>&nbsp;
            <Link to="/auth/signin">Login</Link>
          </p>
          {/* <div className="stripe_logo" style={styles.zoomIn}>
            <img src={StripeLogo} alt="Stripe Logo" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ResetForm;
