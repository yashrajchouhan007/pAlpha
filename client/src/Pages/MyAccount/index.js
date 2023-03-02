import React, { useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import Amplify from "aws-amplify";
import ChangePassword from "./ChangePassword";
import { toast } from "react-toastify";
import { userChangePassword } from "../../Services/User";
import ProfileUpdate from "./ProfileUpdate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cognitoRequest, getLogout } from "../../Redux-Saga/Redux/account";
import moment from "moment";
import config from "../../Config/config";

import "./myaccount.css";

const Default = () => {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sessionInfo } = account;
  useEffect(() => {}, []);

  const handleChangePassword = (oldPassword, newPassword) => {
    Amplify.Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log("Current User", user);
        return Amplify.Auth.changePassword(user, oldPassword, newPassword);
      })
      .then((data) => {
        console.log("Cognito change password", data);
        changeUserPassword(oldPassword, newPassword);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        dispatch(cognitoRequest(false));
      });
  };

  const changeUserPassword = (oldPassword, newPassword) => {
    const data = {
      old_password: oldPassword,
      new_password: newPassword,
    };
    userChangePassword(account.token, data)
      .then(function (res) {
        console.log("getUserChangePassword:", res);
        toast.success("Password Change Successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        dispatch(cognitoRequest(false));
        dispatch(getLogout());
      })
      .catch(function (error) {
        console.log(error);
        dispatch(cognitoRequest(false));
        toast.error(error.error?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const handleSubmitChangePassword = (values) => {
    dispatch(cognitoRequest(true));
    handleChangePassword(values.oldPassword, values.newpassword);
  };

  return (
    <div className="container-fluid p-4 my_account_vs">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <Card className="card_parent">
            <Card.Header className="card_title">
              Update Profile
            </Card.Header>

            <Card.Body>
              <div className="row">
                <div className="col-md-12">
                  <ProfileUpdate
                    loading={account.isLoading}
                    handleSubmit={handleSubmitChangePassword}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-xs-12 col-md-6">
          <Card className="card_parent">
            <Card.Header className="card_title">
              Update Password
            </Card.Header>
            <Card.Body>
              <div className="row">
                <div className="col-xs-12">
                  <ChangePassword
                    loading={account.isLoading}
                    handleSubmit={handleSubmitChangePassword}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 col-xs-12">
          {!!account?.sessionInfo?.currentPlan && !!account?.sessionInfo?.currentUser?.subscription && (
            <Card className="card_parent">
              <Card.Header className="card_title">
                Personal Information
              </Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-md-12">
                    <Table bordered striped="columns">
                      <tbody>
                        <tr>
                          <td>Plan Name</td>
                          <td>
                            {account?.sessionInfo?.currentPlan?.name}
                          </td>
                        </tr>
                        <tr>
                          <td>Plan Type</td>
                          <td style={{ textTransform: "capitalize" }}>
                            {account?.sessionInfo?.currentPlan?.planType}
                          </td>
                        </tr>
                        <tr>
                          <td>Price</td>
                          <td>
                            {account?.sessionInfo?.currentPlan?.price}
                          </td>
                        </tr>
                        <tr>
                          <td>Subscription Start</td>
                          <td>
                            {moment(sessionInfo?.currentUser?.subscription?.current_period_start).format(config.dateFormat)}
                          </td>
                        </tr>
                        <tr>
                          <td>Subscription End</td>
                          <td>
                            {sessionInfo?.currentUser?.renewalDate}
                          </td>
                        </tr>                                
                      </tbody>
                    </Table>
                  </div>

                  <div className="col-sm-6 col-12">
                    <button
                      className="yellow-theme-btn button__element_button button__element--full mt-3"
                      onClick={() => navigate("/plan")}
                    >
                      Update Subscription
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Default;
