import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginSchema } from "../../../Schema/LoginSchema";

const Login = (props) => {
  const styles = {
    zoomIn: {
      animation: "1s",
      animationName: "zoomIn",
    },
    slideInUp: {
      animation: "2s",
      animationName: "slideInUp",
    },
    slideInUp1: {
      animation: "1s",
      animationName: "slideInUp",
    },
    slideInUp2: {
      animation: "1.3s",
      animationName: "slideInUp",
    },
    slideInUp3: {
      animation: "1.5s",
      animationName: "slideInUp",
    },
    slideInUpButton: {
      animation: "2s",
      animationName: "zoomIn",
    },
    fadeInRight: {
      animation: "1s",
      animationName: "fadeInRight",
    },
    fadeInLeft: {
      animation: "1s",
      animationName: "fadeInLeft",
    },
    fadeInLeft1: {
      animation: "1.2s",
      animationName: "fadeInLeft",
    },
    fadeInLeft2: {
      animation: "1.3s",
      animationName: "fadeInLeft",
    },
  };

  return (
    <div>
      <div className="login_static_info">
        <h1 className="auth__card-heading" style={styles.zoomIn}>
          Login
        </h1>
        <p className="auth__card-subheading" style={styles.zoomIn}>
          Please log in to your account.
        </p>
      </div>
      <div className="login_form">
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            props.onSubmit(values);
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
                      value={values.username}
                      name="username"
                    />
                    <label className="did-floating-label">Email</label>
                    <ErrorMessage name="username">
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
                <div className="input__container">
                  <label className="remember-me" style={styles.slideInUp3}>
                    <input
                      name="remember_me"
                      id="remember_me"
                      type="checkbox"
                      value=""
                    />
                    Remember me
                  </label>
                  <Link
                    to="/auth/reset"
                    className="forgot-password"
                    style={styles.slideInUp3}
                  >
                    Forgot Your Password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                className="yellow-theme-btn button__element_button button__element--full"
                disabled={props.loading}
                style={styles.slideInUp3}
              >
                <p className="button__text">
                  Continue &nbsp;
                  {props.loading ? (
                    <Spinner animation="border" variant="warning" size="sm" />
                  ) : null}
                </p>
              </button>
            </form>
          )}
        </Formik>
        <div className="login_bottom_section" style={styles.slideInUp3}>
          <p>
            <span>Don’t have an account ?</span>&nbsp;
            <Link to="/auth/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
