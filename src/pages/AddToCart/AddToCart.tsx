import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PricingCalculator from "../../components/PricingCalculator/PricingCalculator";
import "./AddToCart.scss";
import avater from "../../assets/reviewavater.jpg";

const AddToCart = () => {
  return (
    <div className="add__cart-page">
      <Navbar />
      <p className="title">Add To Cart</p>
      <div className="add__cart-main sectionPadding">
        <div className="cart__wrapper">
          <PricingCalculator cart />
          <CartInstructor />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const CartInstructor = () => {
  return (
    <div className="cart__instructor-wrapper">
      <p className="title">Your Instructor:</p>
      <div className="cart__instructor">
        <div className="image">
          <img src={avater} alt="" />
        </div>
        <div className="information">
          <p className="title">Jubayer Hossain</p>
          <div className="state">
            <p>Marcoola</p>
            <p>3048</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
