import React, { useEffect, useState } from "react";
import "./CheckoutPayment.scss";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { client } from "../../client";
import Button from "../core/Button/Button";
import PaymentContainer from "../PaymentContainer/PaymentContainer";
import { useSelector } from "react-redux";
import { State } from "../../typings/reduxTypings";
import { BillingInfo } from "../../typings/cartTypings";

interface CheckoutProps {
  billing: BillingInfo;
  checkoutBooking: boolean;
  testPackage: boolean;
}
const CheckoutPayment = ({
  billing,
  checkoutBooking,
  testPackage,
}: CheckoutProps) => {
  const { cart } = useSelector((state: State) => state.cart);

  const [clientSecret, setClientSecret] = useState();
  const stripePromise = loadStripe(
    "pk_test_51Jk944Kqk54qfeAmqK2cRxVVq122wVq5oMiAHWv0xEHXCjx362GhIJAiCkOCtjnfSVHGzMP7YSeVX6NQX4MuNASY00FJlGLuOo"
  );

  useEffect(() => {
    getPaymentIndent();
  }, []);

  const getPaymentIndent = async () => {
    const { data } = await client.post("/payment-indent", {
      amount: testPackage ? 199 : cart?.price,
    });
    setClientSecret(data.clientSecret);
  };

  if (!clientSecret) return <></>;

  return (
    <div className="checkout__payment">
      <p className="title">Payment</p>
      <form className="payment__form">
        {clientSecret && (
          <>
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <PaymentContainer
                testPackage={testPackage}
                price={testPackage ? 199 : cart?.price}
                checkoutBooking={checkoutBooking}
                billing={billing}
              />
            </Elements>
          </>
        )}
      </form>
    </div>
  );
};

export default CheckoutPayment;
