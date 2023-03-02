import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import IntlTelInput from "react-intl-tel-input";
import PasswordChecklist from "react-password-checklist";
import { Info } from "react-feather";
import { signUpvalidationSchema } from "../../../Schema/SignUpSchema";

import "react-intl-tel-input/dist/main.css";

const SignUp = (props) => {
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

  // console.log("initialValues", props.initialValues);
  const [showCheckList, setShowCheckList] = useState(false);
  const [showPromoHelpList, setShowPromoHelpList] = useState(false);
  const handleChangePhoneNumber = (isValid, value, country, setFieldValue) => {
    // console.log("handleChangePhoneNumber", isValid);
    const { dialCode } = country;
    setFieldValue("phoneNumber", value);
    setFieldValue("mobile", `+${dialCode}${value}`);
    // validatePhoneNumber(value, isValid, setFieldError, setFieldTouched);
    // setFieldTouched("phoneNumber", true, false);
    // setFieldError("phoneNumber", true, "Invalid Mobile number");
    // setFieldError("phoneNumber", "Test error message");
  };

  const showPasswordInfo = () => {
    setShowCheckList(!showCheckList);
  };

  const showPromoInfo = () => {
    setShowPromoHelpList(!showPromoHelpList);
  };

  return (
    <div>
      <div className="login_static_info">
        <h1 className="auth__card-heading" style={styles.zoomIn}>
          Sign Up
        </h1>
        {/* <p className="auth__card-subheading" style={styles.zoomIn}>
          Create an account so that we can build your customized guide
        </p> */}
      </div>
      <div className="login_form">
        <Formik
          initialValues={{
            accountType: "2",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: "",
            agree: false,
            mobile: "",
            promoCode: "",
          }}
          validationSchema={signUpvalidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Get values", values);
            // return;
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
            setFieldValue,
            setFieldTouched,
            setFieldError,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="auth__card-form mb4">
                <Field name="mobile" type="hidden" />
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
                      value={values.firstName}
                      name="firstName"
                    />
                    <label className="did-floating-label">First Name</label>
                    <ErrorMessage name="firstName">
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
                      type="text"
                      placeholder=" "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      name="lastName"
                    />
                    <label className="did-floating-label">Last Name</label>
                    <ErrorMessage name="lastName">
                      {(msg) => <div className="error-msg">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>
                <div
                  className="input__container form-group"
                  style={styles.slideInUp3}
                >
                  <div className="did-floating-label-content did-floating-label-content-phone">
                    <IntlTelInput
                      containerClassName="intl-tel-input"
                      inputClassName={`input__element did-floating-input`}
                      fieldName="phoneNumber"
                      value={values.phoneNumber}
                      onPhoneNumberChange={(isValid, value, country) => {
                        handleChangePhoneNumber(
                          isValid,
                          value,
                          country,
                          setFieldValue
                        );
                      }}
                    />
                    <label
                      className={`did-floating-label ${
                        values.phoneNumber !== "" ? "float_active" : ""
                      }`}
                    >
                      Phone Number
                    </label>

                    <ErrorMessage name="phoneNumber">
                      {(msg) => <div className="error-msg">{msg}</div>}
                    </ErrorMessage>
                    <small className="form-text text-muted">
                      We will use your number to keep your information secure
                      with 2-factor authentication.
                    </small>
                  </div>
                </div>

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
                      value={values.email}
                      name="email"
                    />
                    <label className="did-floating-label">Email</label>
                    <ErrorMessage name="email">
                      {(msg) => <div className="error-msg">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>
                <div
                  className="input__container form-group position-relative"
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
                    <div
                      className="password_info"
                      onClick={(e) => showPasswordInfo(e)}
                    >
                      <Info size={20} color="#000000" />
                    </div>

                    {showCheckList && (
                      <PasswordChecklist
                        rules={[
                          "minLength",
                          "specialChar",
                          "number",
                          "capital",
                        ]}
                        minLength={8}
                        value={values.password}
                        valueAgain={values.password}
                        messages={{
                          minLength: "The password has more than 8 characters.",
                          specialChar: "The password has special characters.",
                          number: "The password has a number.",
                          capital: "The password has an uppercase letter.",
                        }}
                      />
                    )}

                  </div>
                </div>

                {values.accountType === "2" && (
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
                        value={values.promoCode}
                        name="promoCode"
                      />
                      <label className="did-floating-label">
                        Employer Promo Code
                      </label>
                      <ErrorMessage name="promoCode">
                        {(msg) => <div className="error-msg">{msg}</div>}
                      </ErrorMessage>
                      <div
                        className="password_info"
                        onClick={(e) => showPromoInfo(e)}
                      >
                        <Info size={20} color="#000000" />
                      </div>
                      {showPromoHelpList ? (
                        <ul className="promo_code_info">
                          <li>
                            If your Employer is providing Peacefully as a
                            benefit, enter your promo code here.
                          </li>
                          <li>
                            If your Employer doesn't yet offer Peacefully as a
                            benefit, <a href="mailto:">click here</a> for a
                            draft email to let them know you'd like end-of-life
                            benefits.
                          </li>
                        </ul>
                      ) : null}
                    </div>
                  </div>
                )}

                <div className="input__container">
                  <label className="tc_agree" style={styles.slideInUp3}>
                    <div className="tc_agree_checkbox">
                      <input
                        name="agree"
                        id="tc_agree"
                        type="checkbox"
                        value={values.agree}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <span className="input__indicator--required">*</span>
                      &nbsp;
                    </div>
                    <div className="tc_agree_content">
                      By clicking Get Started I agree to the &nbsp;
                      <a
                        target="_blank"
                        className="link"
                        rel="noreferrer"
                        href="https://www.peacefully.com/terms-services"
                      >
                        Terms and Conditions
                      </a>
                      &nbsp;and&nbsp;
                      <a
                        target="_blank"
                        className="link"
                        rel="noreferrer"
                        href="https://www.peacefully.com/privacy-policy"
                      >
                        Privacy Policy.
                      </a>
                    </div>
                  </label>
                  <ErrorMessage name="agree">
                    {(msg) => <div className="error-msg">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <button
                type="submit"
                className="yellow-theme-btn button__element_button button__element--full"
                disabled={props.loading}
                style={styles.slideInUp3}
              >
                <p className="button__text">
                  Get Started &nbsp;
                  {!!props?.loading && <Spinner animation="border" variant="warning" size="sm" />}
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;
