import React, { useEffect, useState } from "react";
import SubscriptionInfo from "../../Assets/Images/subscription_info.png";
import SubscriptionCheckInfo from "../../Assets/Images/checked.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { pluralize } from "../../Services/Utils/helper";
import { X } from "react-feather";
import { encryptStorage } from "../../Components/Helpers/commonMethods";

const SubscriptionReminder = () => {
  const [subscriptionBar, setSubscriptionBar] = useState(
    encryptStorage.getItem("subscription_bar") ? true : false
  );
  let navigate = useNavigate();
  const account = useSelector((state) => state.account);
  const { currentUser: { trailPeriod, renewalDate } = {} } =
    account.sessionInfo;

  useEffect(() => {
    // console.log("Days Remaining", account.sessionInfo);
  }, [account]);

  const handleCloseSubscriptionBar = () => {
    // alert("close Bar");
    encryptStorage.setItem("subscription_bar", true);
    // console.log("Get value", encryptStorage.getItem("close_subscription_bar"));
    setSubscriptionBar(true);
  };

  return (
    <>
      {!renewalDate ? (
        <>
          <div
            className="subscription_reminder d-flex justify-content-between align-items-center"
            onClick={() => navigate("/plan")}
            style={{
              cursor: "pointer",
            }}
          >
            <div>
              <p>
                <img src={SubscriptionInfo} alt="not found" />
                <span className="me-2">
                  Special offer: Purchase your plan in the first 24 hours and save 20%
                </span>
                <span className="remaining_days text_blink_animation">
                  {trailPeriod > 0 ? `(${pluralize(trailPeriod, "day")} remaining in free trial)` : "Your trial period has been finished"}
                </span>
              </p>
            </div>
            <div>
              <button
                className="plan_button blink_animation1"
                onClick={() => navigate("/plan")}
              >
                Purchase Plan
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {!subscriptionBar ? (
            <div className="subscription_reminder subscription_reminder_renew d-flex justify-content-between align-items-center">
              <div>
                <p>
                  <img src={SubscriptionCheckInfo} alt="not found" />
                  <span>
                    {`Your subscription has been activated. Next renewal will be on ${renewalDate}`}
                  </span>
                </p>
              </div>
              <div className="close_subscription_bar">
                <p
                  className="back_sign_in"
                  onClick={() => handleCloseSubscriptionBar()}
                >
                  <X size={30} color="#ffffff" />
                </p>
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default SubscriptionReminder;
