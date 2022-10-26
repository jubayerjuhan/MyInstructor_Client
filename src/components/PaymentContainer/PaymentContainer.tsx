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
  bookLesson,
  clearError,
  clearSuccess,
  purchaseCredit,
} from "../../redux/actions/bookingAction";
import { toast } from "material-react-toastify";

import { useNavigate } from "react-router-dom";
import { BillingInfo } from "../../typings/cartTypings";

interface PaymentProps {
  billing: BillingInfo;
  checkoutBooking: boolean;
}
const PaymentContainer = ({ billing, checkoutBooking }: PaymentProps) => {
  const { instructor } = useSelector((state: State) => state.instructor);
  const {
    booking,
    pickupDetails,
    loading: bookLoading,
  } = useSelector((state: State) => state.booking);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const { cart } = useSelector((state: State) => state.cart);
  const { error, success } = useSelector((state: State) => state.credit);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  console.log(checkoutBooking, "checkout booking stripe page");
  if (error) {
    toast.error(error);
    dispatch(clearError());
  }

  if (success) {
    if (checkoutBooking) {
      const bookingInfo = {
        instructor: instructor._id,
        time: {
          from: booking.time.startFrom,
          to: booking.time.endTo,
        },
        duration: booking.duration,
        pickupDetails,
      };
      const booked = dispatch(bookLesson(bookingInfo));
      if (booked) navigate("/payment-success", { state: { booking: true } });
    } else {
      console.log("redirect to payment-success");
      dispatch(clearSuccess());
      navigate("/payment-success", {
        state: { credit: true, hours: cart?.hours },
      });
    }
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
        dispatch(purchaseCredit(cart?.hours));
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
        loading={loading || bookLoading}
        className="pay__button"
        onClick={handlePaymentClick}
      />
    </>
  );
};

export default PaymentContainer;
