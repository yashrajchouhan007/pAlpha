import React from "react";
import { Modal, Spinner } from "react-bootstrap";

import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { X } from "react-feather";

const VerificationDialog = ({
  handleClose,
  onSubmit,
  resendCode,
  type,
  handleBack,
  formSignUp,
  loading,
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
            <h1 style={styles.slideInDown3}>Two-factor Authentication</h1>
            <p
              className="auth__card-subheading text-center"
              style={styles.slideInDown3}
            >
              {" "}
              Please enter the code sent via SMS to the phone number you
              provided.
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
              initialValues={{ verificationCode: "" }}
              validationSchema={Yup.object().shape({
                verificationCode: Yup.string()
                  .required("Code is required")
                  .matches(/^\d{6}$/, "Code must be a six-digit number"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                console.log("values", values);
                const preapreValue = {
                  username: values.verificationCode,
                };
                onSubmit(preapreValue);
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
                <form onSubmit={handleSubmit} autocomplete="off">
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
                        <label className="did-floating-label">
                          Verification Code
                        </label>
                        <ErrorMessage name="verificationCode">
                          {(msg) => <div className="error-msg">{msg}</div>}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="input__container" style={styles.slideInUp3}>
                      <p>
                        Did not receive code?{" "}
                        <a
                          href="/#"
                          className="resen_code"
                          onClick={resendCode}
                        >
                          Resend Code
                        </a>
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="yellow-theme-btn button__element_button button__element--full"
                    disabled={loading}
                    style={styles.slideInUp3}
                  >
                    <p className="button__text">
                      Continue &nbsp;
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

export default VerificationDialog;
