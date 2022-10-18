import React, { useState } from "react";
import "./CheckoutPage.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CheckoutBillings from "../../components/CheckoutBillings/CheckoutBillings";
import CheckoutPayment from "../../components/CheckoutPayment/CheckoutPayment";

const CheckoutPage = () => {
  const [billings, setBillings] = useState({});

  return (
    <>
      <Navbar />
      <div className="checkout__page-main sectionPadding">
        <div className="checkout__information">
          {/* <CheckoutBillings setBillings={setBillings} /> */}
          <CheckoutPayment />
        </div>
        <div className="checkout__cart-details">
          <p className="title">On Your Cart</p>
          <div className="cart__details">
            <AiOutlineShoppingCart />
            <p className="title">You Have 3 Hours In The Cart</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
