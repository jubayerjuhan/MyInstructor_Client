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
const CheckoutPage = () => {
  const { cart } = useSelector((state: State) => state.cart);
  const [billings, setBillings] = useState({});
  const [paymentAvailable, setPaymentAvailable] = useState(false);

  useEffect(() => {
    if (!cart.hours) {
      window.location.replace("/not-found");
      toast.error("Please Select Bookings Hours First");
    }
  }, [cart]);

  if (!cart.hours) return <></>;
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
            <CheckoutPayment />
          )}
        </div>
        <div className="checkout__cart-details">
          <p className="title">On Your Cart</p>
          <div className="cart__details">
            <AiOutlineShoppingCart />
            <p className="title">You Have {cart.hours} Hours In The Cart</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
