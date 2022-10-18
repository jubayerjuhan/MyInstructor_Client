import React, { useState } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import Button from "../core/Button/Button";

const PaymentContainer = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  // handle payment process
  const handlePaymentProcess = async () => {
    if (buttonDisabled) return;

    if (!stripe || !elements) {
      return;
    }

    if (stripe && elements) {
      setButtonDisabled(false);
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://localhost:3000/checkout",
      },
    });
    console.log(result, "res");

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <>
      <PaymentElement />
      <Button
        title="Pay Now"
        width={"100%"}
        className="pay__button"
        onClick={handlePaymentProcess}
      />
    </>
  );
};

export default PaymentContainer;
