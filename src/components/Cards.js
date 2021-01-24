import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out Weather Update Today!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Weather around the Amazon rainforest, alternatively"
              label="Amazon Jungle"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Check around USA"
              label="Uropean"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="High Temperachures"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Tornado Reports"
              label="Asia"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="High Temperachute at Sahara is a desert on the African continent"
              label="sahara desert"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
