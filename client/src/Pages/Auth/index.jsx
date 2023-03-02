import React, { useState, useEffect } from "react";
import { Nav, Tab, Row, Col } from "react-bootstrap";
import Login from "./Login";
import SignUp from "./SignUp";
import Amplify from "aws-amplify";
import Notification from "../../Components/Notification";
import AuthFooterInfo from "./AuthFooterInfo";
import Verification from "./Verification";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { getUserRegister } from "../../Services/User";
import ConfirmSignUpDialog from "./Dialog/ConfirmSignUpDialog";
import { useSelector, useDispatch } from "react-redux";
import { cognitoRequest, loginStart } from "../../Redux-Saga/Redux/account";
import CheckImage from "../../Assets/Images/check.png";
import Instagram from "../../Assets/Images/instagram.png";
import FacebookIcon from "../../Assets/Images/facebook_new.png";
import LinkedinIcon from "../../Assets/Images/linkedin_new.png";
import VerificationDialog from "./Dialog/VerificationDialog";
import FooterFixNav from "./Component/FooterFixNav";
import { data } from "./Data/LoginPageData.js";

import "./auth.css";

const Auth = () => {
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
  const [searchParams] = useSearchParams();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [verificationDialogOpen, setVerificationDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({});
  const type = searchParams.get("_t");
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  console.log("account", account);
  const [key, setKey] = useState(type !== "l" ? 2 : 1);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [loginVerify, setLoginVerify] = useState(false);
  const [signUpVerify, setSignUpVerify] = useState(false);
  const [mfaUser, setMfaUser] = useState(null);
  const [notification] = useState({
    status: false,
    message: "",
    variant: "",
  });
  const [formSignIn, setFormSignIn] = useState({});
  const [formSignUp, setFormSignUp] = useState({});
  const [, setIsUserConfirmRequired] = useState(null);

  const handleSelect = (e, key) => {
    if (e !== "") {
      e.preventDefault();
    }

    setKey(key);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  };

  useEffect(() => {
    console.log("Check");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);

  const handleLoginSubmit = (value) => {
    // console.log(value);
    dispatch(cognitoRequest(true));
    const { username, password } = value;
    setFormSignIn({ username, password });
    Amplify.Auth.signIn({
      username,
      password,
    })
      .then((awsUser) => {
        // console.log("Cognito Response", awsUser);
        if (
          awsUser.challengeName === "SMS_MFA" ||
          awsUser.challengeName === "SOFTWARE_TOKEN_MFA"
        ) {
          setMfaUser(awsUser);
          setLoginVerify(true);
          setVerificationDialogOpen(true);
          dispatch(cognitoRequest(false));
        } else if (awsUser.challengeName === "MFA_SETUP") {
          // This happens when the MFA method is TOTP
          // The user needs to setup the TOTP before using it
          // More info please check the Enabling MFA part
          Amplify.Auth.setupTOTP(awsUser);
        } else {
          // The user directly signs in
          setLoginVerify(true);
          setVerificationDialogOpen(true);
          dispatch(cognitoRequest(false));
          setMfaUser(awsUser);
        }
      })
      .catch((err) => {
        console.log("Error", err);
        window.scrollTo(0, 0);
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        dispatch(cognitoRequest(false));
      });
  };

  const handleVerifySubmit = (value, flag = "login") => {
    dispatch(cognitoRequest(true));
    Amplify.Auth.confirmSignIn(
      mfaUser, // Return object from Auth.signIn()
      value.username, // Confirmation code
      "SMS_MFA" // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
    )
      .then(async (res) => {
        const { UserAttributes } = await res.fetchUserData();
        console.log("Confirmation response", res, UserAttributes);
        const attributes = {};
        if (UserAttributes && UserAttributes.length) {
          UserAttributes.forEach((item) => {
            if (
              ["given_name", "middle_name", "email", "phone_number"].indexOf(
                item.Name
              ) >= 0
            ) {
              attributes[item.Name] = item.Value;
            }
          });
        }
        if (flag === "signin") {
          const awsJwtToken = res
            .getSignInUserSession()
            .getAccessToken()
            .getJwtToken();
          // console.log("awsJwtToken", awsJwtToken);
          dispatch(
            loginStart({
              email: formSignIn.username,
              access_token: awsJwtToken,
              password: formSignIn.password,
              attributes,
            })
          );
        } else {
          const awsJwtToken = res
            .getSignInUserSession()
            .getAccessToken()
            .getJwtToken();
          // console.log("awsJwtToken", awsJwtToken);
          dispatch(
            loginStart({
              email: formSignIn.username,
              access_token: awsJwtToken,
              password: formSignIn.password,
              attributes,
            })
          );
          if (account.errorMessage !== null) {
            toast.error(account.errorMessage.response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        }
      })
      .catch((err) => {
        const { message } = err;
        console.log("Error", err);
        console.log("Error messsage", message);
        window.scrollTo(0, 0);
        toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
        });

        dispatch(cognitoRequest(false));
      });
  };

  const resendCodeSubmit = (e) => {
    e.preventDefault();
    handleLoginSubmit(formSignIn);
  };

  const handleSignUpSubmit = (values) => {
    console.log("handleSignUpSubmit", values);
    dispatch(cognitoRequest(true));
    setFormSignUp({ ...values });
    // setSignUpVerify(true);
    Amplify.Auth.signUp({
      username: values.email,
      password: values.password,
      attributes: {
        email: values.email, // optional
        phone_number: values.mobile, // optional - E.164 number convention
        given_name: values.firstName,
        middle_name: values.lastName,
        // other custom attributes
      },
    })
      .then((awsSignup) => {
        console.log("awsSignup", awsSignup);
        const { userConfirmed } = awsSignup;
        if (userConfirmed) {
          const prepareApiData = {
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            password: values.password,
            mobile: values.mobile,
          };
          userRegister(prepareApiData);
        }
      })
      .catch((err) => {
        setDialogOpen(false);
        setConfirmLoading(false);
        window.scrollTo(0, 0);
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        dispatch(cognitoRequest(false));
      });
  };

  const handleSignUpVerifySubmit = (values) => {
    console.log("handleSignUpSubmit", values);
    handleVerifySubmit(values, "signin");
  };

  const userRegister = (data) => {
    getUserRegister(data)
      .then(function (res) {
        console.log("dataAfterSignup:", res);
        setSignUpVerify(true);
        dispatch(cognitoRequest(true));
        setIsUserConfirmRequired(data.email);
        const prepareValueOtp = {
          username: data.email,
          password: data.password,
        };
        handleLoginSubmit(prepareValueOtp);
        setDialogOpen(false);
        setConfirmLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        dispatch(cognitoRequest(true));
        toast.error(error.response.data.error.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setDialogOpen(false);
        setConfirmLoading(false);
      });
  };

  const handleBack = (e, type) => {
    e.preventDefault();
    console.log("Check Type", type);
    type === "login" ? setLoginVerify(false) : setSignUpVerify(false);
  };

  const handleConfirmDialogOpen = (values) => {
    console.log("handleConfirmDialogOpen", values);
    setDialogData(values);
    setDialogOpen(true);
  };

  const handleConfirmClose = () => {
    setDialogData({});
    setDialogOpen(false);
    setConfirmLoading(false);
    console.log("Modal close");
  };

  const handleConfirmSubmit = (values) => {
    console.log("handleConfirmSubmit values", values);
    setConfirmLoading(true);
    handleSignUpSubmit(values);
  };

  const handleClose = () => {
    setVerificationDialogOpen(false);
  };

  console.log("Data", data);
  return (
    <>
      {account.isAuthenticated ? navigate("/stagingtool") : null}
      <div className="auth__container1 container-fluid auth__container__new">
        <div className="pf__container">
          <div
            className="pf_container__content side__info "
            id="sticky-sidebar"
          >
            <h1 style={styles.fadeInLeft}>{data.loginContentInfo.heading}</h1>
            <p style={styles.fadeInLeft1}>
              {/* <span className="bold_text_span">
                {data.loginContentInfo.boldDescription}
              </span> */}
              {data.loginContentInfo.description}
            </p>
            <div className="login_page_content">
              {data.loginContentInfo.infoData.map((value, index) => {
                return (
                  <div
                    className="media d-flex"
                    style={{
                      animation: `${index + 0.2}s`,
                      animationName: "fadeInLeft",
                    }}
                    key={`media_data_${index}`}
                  >
                    <img className="image_check" src={CheckImage} alt="check" />
                    <div className="media-body">
                      <h5 className="mt-0">{value.heading}</h5>
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
            <Login onSubmit={handleLoginSubmit} loading={account.isLoading} />
            <div className="social_media">
              <ul className="d-flex justify-content-center">
                <li>
                  <a
                    href="https://instagram.com/peacefullyio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Instagram} alt="not found" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/peacefullyio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={FacebookIcon} alt="not found" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/peacefully"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={LinkedinIcon} alt="not found" target="_balnk" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="auth__card" style={{ display: "none" }}>
          <Tab.Container
            defaultActiveKey={key}
            onSelect={(k) => setKey(k)}
            activeKey={key}
          >
            <Row>
              <Col sm={12}>
                {!loginVerify && !signUpVerify ? (
                  <Nav variant="pills" className="flex-row auth__card-type">
                    <Nav.Link className="button__element margin0" eventKey={1}>
                      Login
                    </Nav.Link>
                    <Nav.Link className="button__element margin0" eventKey={2}>
                      Sign Up
                    </Nav.Link>
                  </Nav>
                ) : null}
              </Col>
              <Col sm={12}>
                {notification.status ? (
                  <Notification
                    status={notification.status}
                    variant={notification.variant}
                    message={notification.message}
                  />
                ) : null}
                <Tab.Content>
                  <Tab.Pane eventKey={1}>
                    {loginVerify ? (
                      <Verification
                        onSubmit={handleVerifySubmit}
                        loading={account.isLoading}
                        resendCode={resendCodeSubmit}
                        type="login"
                        handleBack={handleBack}
                      />
                    ) : (
                      <>
                        <Login
                          onSubmit={handleLoginSubmit}
                          loading={account.isLoading}
                        />
                        <AuthFooterInfo
                          buttonName="Sign Up"
                          description="DON'T HAVE AN ACCOUNT?"
                          handleSelect={handleSelect}
                          eventkey={2}
                        />
                      </>
                    )}
                  </Tab.Pane>
                  <Tab.Pane eventKey={2}>
                    {signUpVerify ? (
                      <Verification
                        onSubmit={handleSignUpVerifySubmit}
                        loading={account.isLoading}
                        resendCode={resendCodeSubmit}
                        type="signup"
                        handleBack={handleBack}
                        formSignUp={formSignUp}
                      />
                    ) : (
                      <>
                        <SignUp
                          onSubmit={handleConfirmDialogOpen}
                          loading={account.isLoading}
                        />
                        <AuthFooterInfo
                          buttonName="Log in"
                          description="Already have an Account?"
                          handleSelect={handleSelect}
                          eventkey={1}
                        />
                      </>
                    )}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
      {dialogOpen ? (
        <ConfirmSignUpDialog
          dialogOpen={dialogOpen}
          handleClose={handleConfirmClose}
          data={dialogData}
          isLoading={confirmLoading}
          handleSubmit={handleConfirmSubmit}
        />
      ) : null}
      {verificationDialogOpen ? (
        <VerificationDialog
          handleClose={handleClose}
          onSubmit={handleVerifySubmit}
          loading={account.isLoading}
          resendCode={resendCodeSubmit}
          type="login"
          handleBack={handleBack}
        />
      ) : null}
    </>
  );
};

export default Auth;
