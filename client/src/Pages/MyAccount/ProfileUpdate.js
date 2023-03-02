import React, { useCallback, useState } from "react";
import { Formik, ErrorMessage } from "formik";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteProfile, userUpdateProfile } from "../../Services/User";
import { toast } from "react-toastify";
import Amplify from "aws-amplify";
import { getLogout, udpateUserProfile } from "../../Redux-Saga/Redux/account";

const ProfileUpdate = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);

  const handleSubmitUpdate = async (values) => {
    setLoading(true);
    const data = {
      first_name: values.fname,
      last_name: values.lname,
      email: values.email,
    };
    console.log(data);
    const user = await Amplify.Auth.currentAuthenticatedUser();
    console.log("User info check", user);
    const udpateUserCognito = await Amplify.Auth.updateUserAttributes(user, {
      given_name: values.fname,
      middle_name: values.lname,
    });
    console.log("UdpateUserCognito", udpateUserCognito);
    if (udpateUserCognito === "SUCCESS") {
      userUpdateProfile(account.token, data)
        .then(function (res) {
          console.log("userUpdateProfile:", res);
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          const prepareData = {
            ...account.user,
            last_name: values.lname,
            first_name: values.fname,
          };
          dispatch(udpateUserProfile(prepareData));
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
          toast.error(error.error?.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    } else {
      toast.error("Something went wrong please contact support", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
    }
  };

  const handleDeleteMyProfile = useCallback(async () => {
    if (account.token) {
      setLoading(true);
      await deleteProfile(account?.token);
      setLoading(false);
      dispatch(getLogout());
    }
  }, [account, dispatch]);

  return (
    <div className="change_password_form">
      <Formik
        enableReinitialize
        initialValues={{
          fname: account && account?.user?.first_name,
          lname: account && account?.user?.last_name,
          email: account && account?.user?.email,
          phone: account && account?.user?.mobile,
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSubmitUpdate(values);
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
                <div className="col-md-6 col-xs-12">
                  <div className="input__container form-group">
                    <div className="did-floating-label-content">
                      <input
                        className="did-floating-input"
                        type="text"
                        placeholder=" "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fname}
                        name="fname"
                      />
                      <label className="did-floating-label">First Name</label>
                      <ErrorMessage name="fname">
                        {(msg) => <div className="error-msg">{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="input__container form-group">
                    <div className="did-floating-label-content">
                      <input
                        className="did-floating-input"
                        type="text"
                        placeholder=" "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        name="email"
                        readOnly
                        disabled
                      />
                      <label className="did-floating-label">Email</label>
                      <ErrorMessage name="email">
                        {(msg) => <div className="error-msg">{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="input__container form-group">
                    <div className="did-floating-label-content">
                      <input
                        className="did-floating-input"
                        type="text"
                        placeholder=" "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lname}
                        name="lname"
                      />
                      <label className="did-floating-label">Last Name</label>
                      <ErrorMessage name="lname">
                        {(msg) => <div className="error-msg">{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xs-12">
                  <div className="input__container form-group">
                    <div className="did-floating-label-content">
                      <input
                        className="did-floating-input"
                        type="text"
                        placeholder=" "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        name="phone"
                        readOnly
                        disabled
                      />
                      <label className="did-floating-label">Phone Number</label>
                      <ErrorMessage name="phone">
                        {(msg) => <div className="error-msg">{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xs-12">
                  <button
                    type="submit"
                    className="yellow-theme-btn button__element_button button__element--full mt-3"
                    disabled={loading}
                  >
                    <span className="button__text">UPDATE</span>
                    {loading && <Spinner className="ms-2" animation="border" variant="warning" size="sm" />}
                  </button>
                </div>

                <div className="col-xs-12 col-md-6">
                  <button
                    type="submit"
                    className="yellow-theme-btn button__element_button button__element--full mt-3 bg-secondary"
                    onClick={handleDeleteMyProfile}
                  >
                    Delete Profile
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

export default ProfileUpdate;
