import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { X } from "react-feather";
import { sendEmail } from "../../../Services/User";
import { useSelector } from "react-redux";
import { CheckCircle as CheckCircleIcon } from "react-feather";
import { toast } from "react-toastify";
import config from "../../../Config/config";

const RequestDialog = ({ dialogClose }) => {
  const [isloading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const account = useSelector((state) => state.account);
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

  const sendRequest = (data) => {
    setIsLoading(true);
    console.log("Send Data", data);
    const { adminEmail} = config;
    const message = `Name=${data.fullname}\nEmail=${data.email}\nCompany=${data.company}\nName=${data.phoneNumber}\nRole=${data.role}\nName=${data.message}\n`
    const prepareData = {
      fullname: data.fullname,
      email: adminEmail,
      company: data.company,
      message,
      phone_number: data.phoneNumber,
      role: data.role,
      subject: "Request a demo",
    };

    sendEmail(account.token, prepareData)
      .then((res) => {
        console.log("API response", res.status);
        if (res.status === 200) {
          toast.success(
            "Thank you for contacting us, we will get back to you as soon as possible",
            {
              position: toast.POSITION.TOP_RIGHT,
            }
          );
          setShowSuccess(true);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log("err", error);
        setIsLoading(false);
        // toast.error(
        //   "Something went wrong please contact to peacefully support.",
        //   {
        //     position: toast.POSITION.TOP_RIGHT,
        //   }
        // );
        // toast.success(
        //   "Thank you for contacting us, we will get back to you as soon as possible",
        //   {
        //     position: toast.POSITION.TOP_RIGHT,
        //   }
        // );
        setShowSuccess(true);
        setIsLoading(false);
      });
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <>
      <Modal className="verification_modal" show={true} onHide={dialogClose}>
        {!showSuccess ? (
          <div>
            <div className="login_static_info">
              <p className="back_sign_in" onClick={() => dialogClose()}>
                <X size={30} color="#000000" />
              </p>
              <h1 style={styles.slideInDown3}>Request a demo</h1>
              <p
                className="auth__card-subheading text-center"
                style={styles.slideInDown3}
              >
                Learn more about how Peacefully can work with your organization.
              </p>
            </div>
            <div className="login_form">
              <Formik
                initialValues={{
                  fullname: "",
                  email: "",
                  phoneNumber: "",
                  company: "",
                  role: "",
                  message: "",
                }}
                validationSchema={Yup.object().shape({
                  fullname: Yup.string()
                    .max(25, "Must be 15 characters or less")
                    .required("Please enter your name"),
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Please enter your email"),
                  phoneNumber: Yup.string().matches(
                    phoneRegExp,
                    "Phone number is not valid"
                  ),
                  company: Yup.string().required("Please enter your company"),
                  role: Yup.string().required("Please enter your role"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  console.log("values", values);
                  // onSubmit(preapreValue);
                  sendRequest(values);
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
                            type="text"
                            placeholder=" "
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fullname}
                            name="fullname"
                          />
                          <label className="did-floating-label">Name</label>
                          <ErrorMessage name="fullname">
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
                            value={values.phoneNumber}
                            name="phoneNumber"
                          />
                          <label className="did-floating-label">Phone Number</label>
                          <ErrorMessage name="phoneNumber">
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
                            value={values.company}
                            name="company"
                          />
                          <label className="did-floating-label">Company</label>
                          <ErrorMessage name="company">
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
                            value={values.role}
                            name="role"
                          />
                          <label className="did-floating-label">Role</label>
                          <ErrorMessage name="role">
                            {(msg) => <div className="error-msg">{msg}</div>}
                          </ErrorMessage>
                        </div>
                      </div>
                      <div
                        className="input__container form-group"
                        style={styles.slideInUp3}
                      >
                        <div className="did-floating-label-content">
                          <textarea
                            rows="3"
                            name="message"
                            placeholder=" "
                            className="did-floating-input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                          ></textarea>
                          <label className="did-floating-label">
                            Any additional information that would be helpful
                            (optional)
                          </label>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="yellow-theme-btn button__element_button button__element--full"
                      style={styles.slideInUp3}
                      disabled={isloading}
                    >
                      <p className="button__text">Submit</p>
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        ) : (
          <>
            <div className="success_modal">
              <p className="back_sign_in" onClick={() => dialogClose()}>
                <X size={30} color="#000000" />
              </p>
              <div
                className="success_modal_icon"
                style={{
                  textAlign: "center",
                  marginBottom: "35px",
                }}
              >
                <CheckCircleIcon size={64} color="#27ee27" />
              </div>
              <div className="success_modal_message">
                <p
                  style={{
                    textAlign: "center",
                    marginBottom: "0px",
                  }}
                >
                  Thank you for contacting us, we will get back to you as soon
                  as possible
                </p>
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default RequestDialog;
