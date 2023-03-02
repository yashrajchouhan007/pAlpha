import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Spinner } from "react-bootstrap";
import { ChangePasswordSchema } from "../../Schema/ChangePasswordSchema";

const ChangePassword = ({ loading, handleSubmit }) => {
  return (
    <div className="change_password_form">
      <Formik
        initialValues={{
          oldPassword: "",
          newpassword: "",
          confirmPassword: "",
        }}
        validationSchema={ChangePasswordSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
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
            <div className="auth__card-form mb-3">
              <div className="row">
                <div className="col-xs-12">
                  <div className="input__container form-group">
                    <div className="did-floating-label-content">
                      <input
                        className="did-floating-input"
                        type="password"
                        placeholder=" "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.oldPassword}
                        name="oldPassword"
                      />
                      <label className="did-floating-label">Old Password</label>
                      <ErrorMessage name="oldPassword">
                        {(msg) => <div className="error-msg">{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-md-6">
                  <div className="input__container form-group">
                    <div className="did-floating-label-content">
                      <input
                        className="did-floating-input"
                        type="password"
                        placeholder=" "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.newpassword}
                        name="newpassword"
                      />
                      <label className="did-floating-label">New Password</label>
                      <ErrorMessage name="newpassword">
                        {(msg) => <div className="error-msg">{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-md-6">
                  <div className="input__container form-group">
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
                      <label className="did-floating-label">Confirm Password</label>
                      <ErrorMessage name="confirmPassword">
                        {(msg) => <div className="error-msg">{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <button
                    type="submit"
                    className="yellow-theme-btn button__element_button button__element--full mt-3"
                    disabled={loading}
                  >
                    <span className="button__text">SAVE CHANGES</span>
                    {loading && <Spinner className="ms-2" animation="border" variant="warning" size="sm" />}
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
