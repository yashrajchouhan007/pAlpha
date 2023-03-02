import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Mail,Phone,PhoneCall } from "react-feather";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./helpStyle.scss";

const Default = () => {
  const navigate = useNavigate();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const account = useSelector((state) => state.account);
  const isFreePlan = !account?.sessionInfo?.currentPlan
  const isSilverPlan = account?.sessionInfo?.currentPlan?.id === 1;
  const isGoldPlan = account?.sessionInfo?.currentPlan?.id === 2;
  const isPlatinumPlan = account?.sessionInfo?.currentPlan?.id === 3;

  const handleOpenUpgradeModal = () => {
    setShowUpgradeModal(true);
  }

  return (
    <div className="container-fluid p-4">
      {(isFreePlan || isSilverPlan) && (
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center">
              <div className="fs-5 me-4">Upgrade your subscription to get access.</div>
              <button
                className="btn btn-outline-dark rounded-pill px-5"
                onClick={() => navigate('/plan')}
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>
      )}

      {isGoldPlan && (
        <div className="row">
          <div className="col-12">
            <ul className="help_page">
              <li className="d-flex align-items-center">
                <Phone />
                <span className="me-2">Schedule a call:</span>
                <Button variant="link" className="p-0" onClick={handleOpenUpgradeModal}>
                  Calendly link to schedule a call
                </Button>
              </li>

              <li className="d-flex align-items-center cursor-pointer" onClick={handleOpenUpgradeModal}>
                <PhoneCall />
                <span className="me-2">Call for help</span>
              </li>

              <li className="d-flex align-items-center">
                <Mail />
                <span className="me-2">Email </span>
                <Button variant="link" className="p-0" onClick={handleOpenUpgradeModal}>hello@peacefully.com</Button>
              </li>
            </ul>
          </div>
        </div>
      )}

      {isPlatinumPlan && (
        <div className="row">
          <div className="col-12">
            <ul className="help_page">
              <li>
                <Phone />
                <span>Schedule a call: </span>
                <a href="https://calendly.com/peacefullysupport/30min" target="_blank" rel="noreferrer">
                  Calendly link to schedule a call
                </a>
              </li>

              <li>
                <PhoneCall />
                <span>Call for help </span>
                <a href="tel:657-999-0791">(657) 999-0791</a>
              </li>

              <li>
                <Mail />
                <span>Email </span>
                <a href="mailto:hello@peacefully.com">hello@peacefully.com</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <Modal
        centered
        size="md"
        show={showUpgradeModal}
        onHide={() => setShowUpgradeModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Upgrade your plan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please upgrade your plan to use this service
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" className="rounded-0 text-light" onClick={() => navigate('/plan')}>Upgrade</Button>
          <Button variant="success" className="rounded-0 text-light" onClick={() => setShowUpgradeModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Default;
