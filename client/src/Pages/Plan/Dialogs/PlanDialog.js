import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { X } from "react-feather";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CardCheckoutForm from "../Component/CardCheckoutForm";
import { useSelector, useDispatch } from "react-redux";
import { CheckCircle as CheckCircleIcon } from "react-feather";
import { useNavigate } from "react-router-dom";
import { getSessionInfoStart } from "../../../Redux-Saga/Redux/account";

import { ReactComponent as PoweredStripeIcon } from "../../../Assets/Images/powerd-by-stripe.svg";

const PlanDialog = ({ handleClose, choosePlan }) => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [triedIn24, setTriedIn24] = useState(false);

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

  const handleSubmit = (result) => {
    setShowSuccess(true);
    setTriedIn24(result.isIn24Hour);
    dispatch(getSessionInfoStart(account.token));
  };

  return (
    <>
      <Modal className="verification_modal" show={true} onHide={handleClose}>
        <div>
          {!showSuccess ? (
            <>
              <div className="login_static_info">
                <p className="back_sign_in" onClick={() => handleClose()}>
                  <X size={30} color="#000000" />
                </p>
                <h1>Card Information</h1>
                <p className="auth__card-subheading text-center">
                  Please enter your card information
                </p>

                <Elements stripe={stripePromise}>
                  <CardCheckoutForm
                    planId={choosePlan.id}
                    planName={choosePlan.name}
                    recurringType={choosePlan.e}
                    trailPeriod={choosePlan.trailPeriod}
                    token={account.token}
                    callBackHandleSubmit={handleSubmit}
                  />
                </Elements>

                <div className="show_guaranteed_info">
                  <PoweredStripeIcon width={150} />
                  <div className="ms-2">
                    <span>Guaranteed</span>
                    <strong>{` safe & secure `}</strong>
                    <span>payment</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="success_modal">
                <p className="back_sign_in" onClick={() => handleClose()}>
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
                  <h1
                    style={{
                      fontFamily: "Open Sans",
                      textAlign: "center",
                      marginBottom: "20px",
                      fontSize: "24px",
                    }}
                  >
                    Congratulation
                  </h1>

                  <p className="text-center mb-0">
                    <span>Subscription purchased </span>
                    {triedIn24 && <strong>with 20% discount </strong>}
                    <span>successfully. </span>
                    <span>please go to the dashboard and check your validity</span>
                  </p>
                </div>

                <div
                  className="success_modal_redirect_button"
                  style={{ marginTop: "25px" }}
                >
                  <button
                    className="yellow-theme-btn button__element_button button__element--full"
                    onClick={() => navigate("/stagingtool")}
                  >
                    <p className="button__text text-uppercase">
                      Go to Dashboard
                    </p>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default PlanDialog;
