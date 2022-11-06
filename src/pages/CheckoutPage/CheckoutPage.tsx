import React, { useEffect, useState } from "react";
import "./CheckoutPage.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CheckoutBillings from "../../components/CheckoutBillings/CheckoutBillings";
import CheckoutPayment from "../../components/CheckoutPayment/CheckoutPayment";
import { useSelector } from "react-redux";
import { State } from "../../typings/reduxTypings";
import { toast } from "material-react-toastify";
import { useLocation } from "react-router-dom";
import { BookingInfoProps } from "../BookingInformation/BookingInformation";
const CheckoutPage = () => {
  const { state } = useLocation();
  console.log(state?.bookForward, "book Forward checkout");
  const { cart } = useSelector((state: State) => state.cart);
  const [billings, setBillings] = useState<any>({});
  const [paymentAvailable, setPaymentAvailable] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    if (!cart?.hours && !state?.testPackage) {
      console.log("Hello");
      window.location.replace("/not-found");
      toast.error("Please Select Bookings Hours First");
    }
  }, [cart]);

  if (!cart?.hours && !state?.testPackage) return <></>;
  return (
    <>
      <Navbar />
      <div className="checkout__page-main sectionPadding">
        <div className="checkout__information">
          {!paymentAvailable ? (
            <CheckoutBillings
              setBillings={setBillings}
              setPaymentAvailable={setPaymentAvailable}
            />
          ) : (
            <CheckoutPayment
              testPackage={state?.testPackage}
              billing={billings}
              checkoutBooking={state?.bookForward}
            />
          )}
        </div>
        <div className="checkout__cart-details">
          <p className="title">On Your Cart</p>
          <div className="cart__details">
            <AiOutlineShoppingCart />
            {state?.testPackage ? (
              <p className="title">You Have Test Package On Your Cart ($199)</p>
            ) : (
              <p className="title">You Have {cart?.hours} Hours In The Cart</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
