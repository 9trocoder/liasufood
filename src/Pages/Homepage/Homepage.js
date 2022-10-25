import React from "react";
import BottomNav from "../../components/BottomNav";
import FoodTray from "../../components/FoodTray";
import HomeNav from "../../components/HomeNav";
import {
  foodNotActive,
  homeActive,
  orderNotActive,
  plate_icon,
  profileNotActive,
} from "../../utility/tools";
import "./Homepage.css";

function Homepage() {
  return (
    <>
      <HomeNav />
      <div className="homepage__cnt">
        <p className="greeting">Good Morning 9trocoder,</p>
        <p className="happy">Happy Liasu Clan Day!</p>

        <div className="food__list-carousel">
          <div className="food__list-items">
            <div className="food__listfist">
              {plate_icon} <p>Breakfast</p>
            </div>{" "}
          </div>
          <div className="food__list-items">
            <p>Lunch</p>
          </div>
          <div className="food__list-items">
            <p>Dinner</p>
          </div>
          <div className="food__list-items">
            <p>Snack</p>
          </div>
          <div className="food__list-items">
            <p>Desert</p>
          </div>
          <div className="food__list-items">
            <p>Drinks</p>
          </div>
        </div>
      </div>
      <FoodTray suggestion="Suggestions for you" suggestionlabel="Nigeria Food" />
      <FoodTray suggestion="Suggestions for you" suggestionlabel="Nigeria Food" />
      <BottomNav
        homeIcon={homeActive}
        foodIcon={foodNotActive}
        orderIcon={orderNotActive}
        profileIcon={profileNotActive}
      />
    </>
  );
}

export default Homepage;
