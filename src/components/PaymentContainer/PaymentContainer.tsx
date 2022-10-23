import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import Button from "../core/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../typings/reduxTypings";
import {
  clearError,
  clearSuccess,
  purchaseCredit,
} from "../../redux/actions/bookingAction";
import { toast } from "material-react-toastify";
import {
  DELETE_CART,
  DELETE_INSTRUCTOR,
} from "../../redux/reducer/reduxNamings";
import { useNavigate } from "react-router-dom";
import { BillingInfo } from "../../typings/cartTypings";

interface PaymentProps {
  billing: BillingInfo;
}
const PaymentContainer = ({ billing }: PaymentProps) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const { cart } = useSelector((state: State) => state.cart);
  const { error, success } = useSelector((state: State) => state.credit);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  if (error) {
    toast.error(error);
    dispatch(clearError());
  }

  if (success) {
    dispatch(clearSuccess());
    console.log("redirect to payment-success");
    navigate("/payment-success");
    dispatch({ type: DELETE_CART });
  }

  const handlePaymentClick = () => {
    setLoading(true);
    handlePaymentProcess();
  };

  console.log(loading, "Loading Status");

  // handle payment process
  const handlePaymentProcess = async () => {
    if (buttonDisabled) return;

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    if (stripe && elements) {
      setButtonDisabled(false);
    }

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/payment-successsss",
          shipping: {
            name: billing.name,
            address: {
              line1: billing.address,
              state: billing.state,
              city: billing.suburb,
            },
          },
        },

        redirect: "if_required",
      });

      if (paymentIntent?.status === "succeeded") {
        dispatch(purchaseCredit(cart.hours));
        setLoading(false);
      }

      if (error) {
        toast.warning(error?.message);
        setLoading(false);
      }
    } catch (error: any) {}
  };
  return (
    <>
      <PaymentElement />
      <Button
        title="Pay Now"
        width={"100%"}
        loading={loading}
        className="pay__button"
        onClick={handlePaymentClick}
      />
    </>
  );
};

export default PaymentContainer;
