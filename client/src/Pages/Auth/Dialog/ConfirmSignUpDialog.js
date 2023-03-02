import React from "react";
import { Modal, Spinner } from "react-bootstrap";
import { X } from "react-feather";

const ConfirmSignUpDialog = ({
  handleClose,
  handleSubmit,
  data,
  isLoading,
}) => {
  const { mobile, email } = data;
  console.log("ConfirmSignUpDialog data", data);
  return (
    <>
      <Modal className="verification_modal" show={true} onHide={handleClose}>
        <div>
          <div className="login_static_info">
            <p className="back_sign_in" onClick={() => handleClose()}>
              <X size={30} color="#000000" />
            </p>
            <h1>Confirmation</h1>
            <p className="auth__card-subheading text-center">
              Please confirm your contact information below is accurate. This
              will be used for two-factor authentication.
            </p>
            <div className="confirm_data">
              <p>
                Phone Number:&nbsp;
                <strong className="strong_text">{mobile}</strong>
              </p>
              <p>
                Email:&nbsp;<strong className="strong_text">{email}</strong>
              </p>
            </div>
          </div>

          <button
            className="yellow-theme-btn button__element_button button__element--full"
            variant="primary"
            onClick={() => handleSubmit(data)}
            disabled={isLoading}
          >
            <p className="button__text">
              Continue &nbsp;
              {isLoading ? (
                <Spinner animation="border" variant="warning" size="sm" />
              ) : null}
            </p>
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmSignUpDialog;
