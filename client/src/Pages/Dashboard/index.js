import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";
import { sendRequest } from "../../Services/User";
import useQuery from "../../Hooks/query";
import { toast } from "react-toastify";
import { getSessionInfoStart } from "../../Redux-Saga/Redux/account";
import SubscriptionReminder from "./SubscriptionReminder";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import "./dashboard.css";

const Dashboard = (props) => {
  let navigate = useNavigate();
  const postMasterFormId = "SV_eJ7275bW8Wjb4zk"; // regoption = 1
  const topNBottomFormId = "SV_cIuWAtdCH4GjT8y"; // regoption = 2 or 4
  const query = useQuery();
  const dispatch = useDispatch();

  const { sessionInfo, token: accessToken } = useSelector((state) => state.account);
  const { currentUser = {}, assignUserList } = sessionInfo;
  const {
    is_access: isAccess,
    qualtrics_user_id: qualtricsUserId,
    first_name: firstName,
    last_name: lastName,
    email,
    mobile,
    survey_id: userSurveyId,
    id: userId,
    subscription,
    trailPeriod,
    isLoading: isLoadingUser,
  } = currentUser;

  const [isLoading, setIsLoading] = useState(false);
  const [isAccessSurvey, setIsAccessSurvey] = useState(false);
  const [regOption, setRegOption] = useState(null);
  const [deputySurveyLink, setDeputySurveyLink] = useState(null);
  const [deputyOff, setDeputyOff] = useState(null);

  const isActiveOrTrial = subscription?.status === 'active' || trailPeriod;
  const show48hrsMessage = deputySurveyLink && (!isAccessSurvey || ["Rejected", "Pending"].indexOf(isAccessSurvey) >= 0);
  const showRegistrationLoading = !deputySurveyLink && !regOption && qualtricsUserId && !userSurveyId;
  const showRegistration = !deputySurveyLink && qualtricsUserId && userSurveyId && regOption;

  // send access request
  const sendIsAccessRequest = async () => {
    const { email, id, qualtrics_user_id: qualtricsUserId } = deputyOff;
    const data = {
      isAccess: isAccessSurvey || "pending",
      qualtricsUserId,
      ownerEmail: email,
      owner_id: id,
      deputy_id: userId,
    };
    setIsLoading(true);

    try {
      const response = await sendRequest({
        path: "/auth/hrAccessRequest",
        method: "post",
        payload: data,
      });
      dispatch(getSessionInfoStart(accessToken));
      setIsLoading(false);
      setIsAccessSurvey(response?.data?.is_access);
    } catch (err) {
      dispatch(getSessionInfoStart(accessToken));
      setIsLoading(false);
      const { data } = err?.response || {};
      toast.error(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // render deputy user iframe
  const renderDeputy = (deputyEmail) => {
    if (deputyEmail) {
      const dUser = assignUserList.find((itm) => itm.email === deputyEmail);
      console.log("renderDeputy", dUser);
      let surveyLinkUpdate = "";
      if (dUser) {
        setDeputyOff(dUser);
        const { is_access: isAccess } = dUser;
        setIsAccessSurvey(isAccess);
        if (isAccess === "Accepted") {
          surveyLinkUpdate = `https://peacefully.qualtrics.com/jfe/form/SV_6GzFBiwtTtjoyHQ?email=${deputyEmail}&isAccess=${isAccess}`;
        } else {
          surveyLinkUpdate = `https://peacefully.qualtrics.com/jfe/form/SV_9X48rNvhAqmanHw?email=${deputyEmail}`;
        }
      }
      setDeputySurveyLink(surveyLinkUpdate);
    } else {
      setDeputySurveyLink(null);
    }
  };

  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_API_HOST);
    socket.on('qualtricsSurveyId', (data) => {
      dispatch(getSessionInfoStart(accessToken));
    })
  }, []);

  useEffect(
    () => {
      if (assignUserList?.length) {
        renderDeputy(query.get("d"));
      }
    },
    // eslint-disable-next-line
    [query.get("d"), assignUserList]
  );

  // set registration option according to survey id
  useEffect(() => {
    if (userSurveyId) {
      setRegOption(userSurveyId % 10);
    }
  }, [userSurveyId]);

  if (isLoadingUser) return null

  return (


    <div className="main_content_dashboard">
      <SubscriptionReminder />

      {isActiveOrTrial ? (
        <>
          {/* POPUP 48 HR MESSAGE */}
          {show48hrsMessage && (
            <div className="request-section p-4">
              <div className="promo-carousel">
                <div className="promoHeader">
                  <h2>Request To Access Post Death Survey</h2>
                  <button
                    onClick={sendIsAccessRequest}
                    className="yellow-theme-btn button__element_button button__element--full w-25"
                    disabled={isLoading}
                  >
                    <span>{`Mark life event  `}</span>
                    {isLoading && <Spinner animation="border" variant="warning" size="sm" />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* REQUEST SENT POPUP MESSAGE */}
          {isAccessSurvey === "Requested" && isAccess !== "Accepted" && (
            <div className="wating-section p-4">
              <h2>Request Sent waiting for approval</h2>
              <p>
                <span>{`You have marked a life event and requested access to `}</span>
                <b>{`${deputyOff.first_name} ${deputyOff.last_name} `}</b>
                <span>{`full plan. `}</span>
                <span>Peacefully is verifying this information over a 48 hour period. If confirmed, you will receive an email notification and be able to view the full Dashboard below after the 48 hour period. You can continue to use the same log-in credentials.</span>
                <br />
                <span>Thank you.</span>
              </p>
            </div>
          )}

          {/* LOAD SUREVY HERE */}
          {deputySurveyLink && <iframe id="qualtricsIdD" title="Deputy Survey" src={deputySurveyLink}></iframe>}

          {/* REGISTRATION SURVEY LOADING */}
          {showRegistrationLoading && (
            <iframe
              title="Registration"
              id="qualtricsId"
              className="test"
              src={`https://peacefully.qualtrics.com/jfe/form/SV_bDVfduXZUdjCAUS?fname=${firstName}&lname=${lastName}&email=${email}&contact_email=${email}&contact_mobile=${mobile}&user_id=${userId}&CONTACT_ID=${qualtricsUserId}`}
            />
          )}

          {showRegistration && (
            <iframe
              id="qualtricsId"
              title="Registration"
              src={`https://peacefully.qualtrics.com/jfe/form/${regOption === 1 ? postMasterFormId : topNBottomFormId}?fname=${firstName}&lname=${lastName}&email=${email}&contact_email=${email}&CONTACT_ID=${qualtricsUserId}`}
            />
          )}
        </>
      ) : (
        <div className="unblock_subscription">
          <h1>Unlock your Subscription</h1>
          <p>Subscription will restore access to your account.</p>
          <div>
            <button
              className="plan_button blink_animation1"
              onClick={() => navigate("/plan")}
            >
              Purchase Plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
