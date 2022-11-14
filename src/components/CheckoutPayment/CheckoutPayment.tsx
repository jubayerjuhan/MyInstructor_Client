import React, { useEffect, useState } from "react";
import "./CheckoutPayment.scss";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { client } from "../../client";
import PaymentContainer from "../PaymentContainer/PaymentContainer";
import { useSelector } from "react-redux";
import { State } from "../../typings/reduxTypings";
import { BillingInfo } from "../../typings/cartTypings";

interface CheckoutProps {
  billing: BillingInfo;
  checkoutBooking: boolean;
  testPackage: boolean;
  giftcard?: any;
  giftCardInfo: {
    _id: string;
    amount: number;
  };
}
const CheckoutPayment = ({
  giftcard,
  billing,
  giftCardInfo,
  checkoutBooking,
  testPackage,
}: CheckoutProps) => {
  const { cart } = useSelector((state: State) => state.cart);

  const [clientSecret, setClientSecret] = useState();
  const [price, setPrice] = useState(0);
  const stripePromise = loadStripe(
    "pk_test_51Jk944Kqk54qfeAmqK2cRxVVq122wVq5oMiAHWv0xEHXCjx362GhIJAiCkOCtjnfSVHGzMP7YSeVX6NQX4MuNASY00FJlGLuOo"
  );

  useEffect(() => {
    getPrice();
  }, [giftcard, testPackage]);

  const getPrice = () => {
    if (testPackage) {
      setPrice(199 - giftCardInfo.amount);
      return getPaymentIndent(199 - giftCardInfo.amount);
    }
    if (giftcard) {
      setPrice(giftcard?.amount - giftCardInfo.amount);
      return getPaymentIndent(giftcard?.amount - giftCardInfo.amount);
    }
    setPrice(cart?.price - giftCardInfo.amount);
    getPaymentIndent(cart?.price - giftCardInfo.amount);
  };
  const getPaymentIndent = async (amount: any) => {
    const { data } = await client.post("/payment-indent", {
      amount: amount,
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
                price={price}
                checkoutBooking={checkoutBooking}
                billing={billing}
                giftcard={giftcard}
              />
            </Elements>
          </>
        )}
      </form>
    </div>
  );
};

export default CheckoutPayment;
