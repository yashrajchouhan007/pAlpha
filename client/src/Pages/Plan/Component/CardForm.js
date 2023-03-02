import React, { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { Row, Col } from "react-bootstrap";

const CardForm = ({ planId, planName, loading }) => {
  const [error, setError] = useState("");

  const handleCard = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError("");
    }
  };

  console.log("stripe", loading);
  return (
    <>
      <Row>
        <Col md={12}>
          <div className="input__container form-group">
            <label className="didnot-floating-label">Card number</label>
            <div className="did-floating-label-content">
              <CardNumberElement onChange={handleCard} />
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <div className="input__container form-group">
            <label className="didnot-floating-label">Expiration date</label>
            <div className="did-floating-label-content">
              <CardExpiryElement onChange={handleCard} />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="input__container form-group">
            <label className="didnot-floating-label">CVC</label>
            <div className="did-floating-label-content">
              <CardCvcElement onChange={handleCard} />
            </div>
          </div>
        </Col>
      </Row>
      {error && <p className="card-error">{error}</p>}

      <button
        className="yellow-theme-btn button__element_button button__element--full"
        disabled={loading}
      >
        <p className="button__text text-uppercase">Submit Payment</p>
      </button>
    </>
  );
};

export default CardForm;
