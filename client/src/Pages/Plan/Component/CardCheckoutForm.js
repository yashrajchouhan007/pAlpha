import React from "react";
import { ElementsConsumer, CardNumberElement } from "@stripe/react-stripe-js";

import CardForm from "./CardForm";
import { createSubscription } from "../../../Services/User";
import { toast } from "react-toastify";

class CardCheckoutForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      showSuccess: true,
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    // return;
    console.log("this.props", this.props);
    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardNumberElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log("Error", result.error.message);
    } else {
      console.log(result.token);
      this.setState({
        isLoading: true,
      });
      const prepareData = {
        stripeToken: result.token.id,
        recurringType: this.props.recurringType,
        planId: this.props.planId,
        // trialDay: this.props.trailPeriod,
        trialDay: 0
      };
      console.log("prepareData", prepareData);
      this.subscriptionCreate(
        this.props.token,
        prepareData,
        this.props.callBackHandleSubmit
      );
    }
  };

  subscriptionCreate = (token, data, callBackHandleSubmit) => {
    createSubscription(token, data)
      .then((res) => {
        console.log("API response", res.data.data);
        this.setState({
          isLoading: false,
        });
        toast.success("Subscription Purchased Successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        callBackHandleSubmit(res?.data?.data);
      })
      .catch((error) => {
        console.log("err", error);
        this.setState({
          isLoading: false,
        });
        toast.error(
          "Something went wrong please contact to peacefully support.",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <CardForm loading={this.state.isLoading} />
        </form>
      </>
    );
  }
}

export default function InjectedCheckoutForm({
  planId,
  planName,
  recurringType,
  trailPeriod,
  token,
  callBackHandleSubmit,
}) {
  console.log("planId, planName", planId, planName, recurringType, trailPeriod);
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CardCheckoutForm
          stripe={stripe}
          elements={elements}
          planId={planId}
          recurringType={recurringType}
          trailPeriod={trailPeriod}
          planName={planName}
          token={token}
          callBackHandleSubmit={callBackHandleSubmit}
        />
      )}
    </ElementsConsumer>
  );
}
