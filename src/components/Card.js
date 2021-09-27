import React from "react";
import hero from "../images/illustration-hero.svg";
import iconMusic from "../images/icon-music.svg";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <img className="heroImage" src={hero} alt="" />
        <div className="card-body">
          <h1 className="card-title">order summary</h1>
          <p className="card-text">You can now listen to millions of song, audiobooks, and podcasts on any device anywhere you like!</p>
          <div className="subscription">
            <img src={iconMusic} alt="" />
            <ul>
              <li>Annual Plan</li>
              <li className="price">$59.99/year</li>
            </ul>
            <a className="changeLink" href="#">
              Change
            </a>
          </div>
          <button className="paymentButton">
            <a href="#">Proceed to Payment</a>
          </button>
          <button className="cancelButton">
            <a href="#">Cancel Order</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
