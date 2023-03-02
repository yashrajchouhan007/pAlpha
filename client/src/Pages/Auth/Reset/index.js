import React, { useState, useEffect } from "react";
import "./reset.css";
import Amplify from "aws-amplify";
import ResetForm from "./ResetForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { userForgotPassword } from "../../../Services/User";
import CheckImage from "../../../Assets/Images/check.png";
import FooterFixNav from "../Component/FooterFixNav";
import { data } from "../Data/LoginPageData.js";
import SocialMedia from "../Component/SocialMedia";
import ResetVerificationDialog from "../Dialog/ResetVerificationDialog";

const Reset = (props) => {
  const styles = {
    fadeInLeft: {
      animation: "1s",
      animationName: "fadeInLeft",
    },
    fadeInLeft1: {
      animation: "1.2s",
      animationName: "fadeInLeft",
    },
  };
  let navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [, setVerification] = useState(false);
  const [verificationDialog, setVerificationDialog] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);

  const handleSubmit = (value) => {
    setIsLoading(true);
    console.log("Value", value);
    const { userEmail } = value;
    setUserEmail(userEmail);
    Amplify.Auth.forgotPassword(userEmail)
      .then((res) => {
        console.log("Cognito Response", res);
        setIsLoading(false);
        setVerification(true);
        setVerificationDialog(true);
      })
      .catch((err) => {
        console.log("Error", err);
        window.scrollTo(0, 0);
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setIsLoading(false);
      });
  };

  const handleResetVerificationSubmit = (value, userEmail) => {
    console.log("handleResetVerificationSubmit", value, userEmail);
    setIsLoading(true);
    Amplify.Auth.forgotPasswordSubmit(
      userEmail,
      value.verificationCode,
      value.password
    )
      .then((resp) => {
        console.log("forgotPasswordSubmit", resp);
        // setIsLoading(false);
        // toast.success("User password Reset Successfully.", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        // navigate("/auth/signin");
        const data = {
          email: userEmail,
          password: value.password,
        };
        changeUserPassword(data);
      })
      .catch((err) => {
        console.log(err);
        const { message } = err;
        setIsLoading(false);
        toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const changeUserPassword = (data) => {
    userForgotPassword(data)
      .then(function (res) {
        console.log("userForgotPassword:", res);
        toast.success("User password Reset Successfully.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setIsLoading(false);
        setVerificationDialog(false);
        navigate("/auth/signin");
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
        toast.error(error.error?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const handleClose = () => {
    setVerificationDialog(false);
    setUserEmail(null);
  };

  return (
    <>
      <div className="auth__container1 container-fluid auth__reset__container auth__container__new">
        <div className="pf__container">
          <div
            className="pf_container__content side__info "
            id="sticky-sidebar"
          >
            <h1 style={styles.fadeInLeft}>{data.loginContentInfo.heading}</h1>
            <p style={styles.fadeInLeft1}>
              {data.loginContentInfo.description}
            </p>
            <div className="login_page_content">
              {data.loginContentInfo.infoData.map((value, index) => {
                return (
                  <div
                    className="media d-flex"
                    style={{
                      animation: `${index + 0.7}s`,
                      animationName: "fadeInLeft",
                    }}
                    key={`media_data_${index}`}
                  >
                    <img className="image_check" src={CheckImage} alt="check" />
                    <div className="media-body">
                      <h5 className="mt-0">{value.heading}</h5>
                      <p>{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="additional_description"
              style={{
                marginTop: "30px",
              }}
            >
              <p style={styles.fadeInLeft1}>
                {data.loginContentInfo.additionalDescriptionBottom}
              </p>
            </div>
            <FooterFixNav />
          </div>
          <div
            className="pf__widget auth__form__section"
            id="auth_form_section"
          >
            <div>
              <ResetForm handleSubmit={handleSubmit} loading={loading} />
            </div>
            <SocialMedia />
          </div>
          {/* {!verification ? (
            <ResetForm handleSubmit={handleSubmit} loading={loading} />
          ) : (
            <ResetVerificationForm
              handleSubmit={handleResetVerificationSubmit}
              loading={loading}
              useremail={userEmail}
            />
          )} */}
        </div>
      </div>
      {verificationDialog ? (
        <ResetVerificationDialog
          handleSubmit={handleResetVerificationSubmit}
          loading={loading}
          handleClose={handleClose}
          useremail={userEmail}
        />
      ) : null}
    </>
  );
};

export default Reset;
