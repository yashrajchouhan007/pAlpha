import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";
import { sendRequest } from "../../Services/User";
import useQuery from "../../Hooks/query";
import { toast } from "react-toastify";
import "./dashboard.css";
import { getSessionInfoStart } from "../../Redux-Saga/Redux/account";

const Dashboard = (props) => {
  const postMasterFormId = "SV_6QmDzjlzXj8YKbA"; // regoption = 1
  const topNBottomFormId = "SV_37Ro0A2mLtNggKi"; // regoption = 2 or 4
  const query = useQuery();
  const dispatch = useDispatch();
  // const userData = useSelector((state) => state.user.users);
  const { sessionInfo, token: accessToken } = useSelector((state) => state.account);
  // console.log("userData dashboard", sessionInfo, query.get("d"));
  const {
    currentUser: {
      is_access: isAccess,
      qualtrics_user_id: qualtricsUserId,
      first_name: firstName,
      last_name: lastName,
      email,
      mobile,
      survey_id: userSurveyId,
      id: userId,
    } = {},
    assignUserList,
  } = sessionInfo;

  const [isLoading, setIsLoading] = useState(false);
  const [isAccessSurvey, setIsAccessSurvey] = useState(false);
  const [regOption, setRegOption] = useState(null);
  const [deputySurveyLink, setDeputySurveyLink] = useState(null);
  const [deputyOff, setDeputyOff] = useState(null);

  // send access request
  const sendIsAccessRequest = async () => {
    const { email, id, qualtrics_user_id: qualtricsUserId } = deputyOff;
    let data = {
      isAccess: isAccessSurvey || "pending",
      qualtricsUserId,
      ownerEmail: email,
      owner_id: id,
      deputy_id: userId,
    };
    setIsLoading(true);
    sendRequest({
      path: "/auth/hrAccessRequest",
      method: "post",
      payload: data,
    })
      .then((response) => {
        dispatch(getSessionInfoStart(accessToken));
        setIsLoading(false);
        console.log("response", response);
        const { is_access: isAccess } = response.data;
        setIsAccessSurvey(isAccess);
      })
      .catch((error) => {
        dispatch(getSessionInfoStart(accessToken));
        setIsLoading(false);
        const {
          response: { data },
        } = error;
        toast.error(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  // render deputy user iframe
  const renderDeputy = (deputyEmail) => {
    if (deputyEmail) {
      const dUser = assignUserList.find((itm) => itm.email == deputyEmail);
      console.log("renderDeputy", dUser);
      let surveyLinkUpdate = "";
      if (dUser) {
        setDeputyOff(dUser);
        const { is_access: isAccess } = dUser;
        setIsAccessSurvey(isAccess);
        if (isAccess === "Accepted") {
          surveyLinkUpdate = `https://peacefully.qualtrics.com/jfe/form/SV_9NZC72RHfqeiD0G?email=${deputyEmail}&isAccess=${isAccess}`;
        } else {
          surveyLinkUpdate = `https://peacefully.qualtrics.com/jfe/form/SV_20lIiOZIuSX9l2u?email=${deputyEmail}`;
        }
      }
      setDeputySurveyLink(surveyLinkUpdate);
    } else {
      setDeputySurveyLink(null);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10000);
  }, []);

  const callIframe = () => {
    // setTimeout(() => {
    //   let iframeWindow =
    //     document.getElementById("qualtricsId").contentWindow.document.body
    //       .scrollHeight;
    //   console.log("iframeWindow", iframeWindow);
    // }, 5000);
  };

  useEffect(() => {
    if (assignUserList?.length) {
      renderDeputy(query.get("d"));
    }
  }, [query.get("d"), assignUserList]);

  // set registration option according to survey id
  useEffect(() => {
    if (userSurveyId) {
      setRegOption(userSurveyId % 10);
    }
  }, [userSurveyId]);

  return (
    <div className="main_content_dashboard">
      {/* POPUP 48 HR MESSAGE  */}
      {deputySurveyLink &&
      (!isAccessSurvey ||
        ["Rejected", "Pending"].indexOf(isAccessSurvey) >= 0) ? (
        <div className="request-section p-4">
          <div className="promo-carousel">
            <div className="promoHeader">
              <h2>Request To Access Post Death Survey</h2>
              <button
                onClick={sendIsAccessRequest}
                className="yellow-theme-btn button__element_button button__element--full w-25"
                disabled={isLoading}
              >
                Mark life event &nbsp;{" "}
                {isLoading && (
                  <Spinner animation="border" variant="warning" size="sm" />
                )}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* REQUEST SENT POPUP MESSAGE */}
      {isAccessSurvey == "Requested" && isAccess != "Accepted" ? (
        <div className="wating-section p-4">
          <h2>Request Sent waiting for approval</h2>
          <p>
            You have marked a life event and requested access to{" "}
            <b>
              {deputyOff.first_name} {deputyOff.last_name}
            </b>{" "}
            full plan. Peacefully is verifying this information over a 48 hour
            period. If confirmed, you will receive an email notification and be
            able to view the full Dashboard below after the 48 hour period. You
            can continue to use the same log-in credentials.
            <br />
            Thank you.
          </p>
        </div>
      ) : null}

      {/* LOAD SUREVY HERE */}
      {deputySurveyLink ? (
        <iframe id="qualtricsIdD" src={deputySurveyLink}></iframe>
      ) : null}

      {/* REGISTRATION SURVEY LOADING */}
      {!deputySurveyLink && !regOption && qualtricsUserId && !userSurveyId ? (
        <div>
          <iframe
            id="qualtricsId"
            className="test"
            src={`https://peacefully.qualtrics.com/jfe/form/SV_9oBdbQ2fcncSNUi?fname=${firstName}&lname=${lastName}&email=${email}&contact_email=${email}&contact_mobile=${mobile}&user_id=${userId}&CONTACT_ID=${qualtricsUserId}`}
          ></iframe>
        </div>
      ) : null}
      {!deputySurveyLink && qualtricsUserId && userSurveyId && regOption ? (
        <div>
          <iframe
            id="qualtricsId"
            src={`https://peacefully.qualtrics.com/jfe/form/${
              regOption == 1 ? postMasterFormId : topNBottomFormId
            }?fname=${firstName}&lname=${lastName}&email=${email}&contact_email=${email}&CONTACT_ID=${qualtricsUserId}`}
          ></iframe>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
