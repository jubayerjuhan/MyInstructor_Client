import React from "react";
import Button from "../core/Button/Button";
import "./Home_Giftcard.scss";
import { ImTicket } from "react-icons/im";
import { BsGift } from "react-icons/bs";

const Home_Giftcard = () => {
  return (
    <section className="home__giftcard sectionPadding">
      <div className="home__giftcard-media">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDnoVeM06B9krKu0wLljK6a6H9tAhhIcBng&usqp=CAU"
          alt=""
        />
      </div>
      <div className="home__giftcard-information">
        <p className="title">The gift of life long skills</p>
        <div className="home__giftcard-options">
          <div className="giftcard__option">
            <div className="icon">
              <ImTicket />
            </div>
            <p className="title">Pick a voucher</p>
            <p className="description">
              Choose the number of lessons that you want to purchase
            </p>
          </div>
          <div className="giftcard__option">
            <div className="icon">
              <BsGift />
            </div>
            <p className="title">Send your gift</p>
            <p className="description">
              Enter the recipients info and the gift is on the way.
            </p>
          </div>
        </div>
        <div className="home__giftcard-bookbutton">
          <Button
            className="bookbutton"
            width="100%"
            title="Gift A Voucher Now"
          />
        </div>
      </div>
    </section>
  );
};

export default Home_Giftcard;
