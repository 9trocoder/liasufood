import React from "react";
import Extranav from "../../components/Extranav";
import {
  anyfood,
  bakso,
  cacke,
  delivery,
  heart,
  plate_icon,
  rating,
  stars,
  time,
} from "../../utility/tools";
import "./FoodDetails.css";

function FoodDetails() {
  return (
    <>
      <Extranav pageName="Food Details" pageIcon={heart} />
      <div className="homepage__cnt">
        <div className="fooddetails__cnt-top">
          <img
            src="https://images.unsplash.com/photo-1638436684761-7e59f8a9072f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1629606600908-a51ec6c44fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="fooddetails__itemtop">
        <p className="food_name">Fried Rice</p>
        <p className="food_price">$50.00</p>
      </div>
      <div className="fooddetails__restaurant">
        <div className="fooddetails__restaurant-left">
          <div className="fdrltop">
            <p>Amala University</p>
            <div className="">
              {rating}
              {rating}
              {rating}
              {rating}
              {rating}
            </div>
          </div>

          <p>$70.00</p>
        </div>

        <div className="fooddetails__features">
          <div className="fooddetails__features-item">
            {time} <p>10 min</p>
          </div>
          <div className="fooddetails__features-item">
            {stars} <p>4.5</p>
          </div>
          <div className="fooddetails__features-item">
            {delivery} <p>Free Delivery</p>
          </div>
        </div>
        <p className="fooddetails__description">
          Fried rice is a type of Nigeria Food, which is made by rolling
          together several layers of cooked egg. These are often prepared in a
          rectangular plate pan called pot.
        </p>
        <div className="food__features">
          <div className="food__features-item">
            <p>Breakfast</p>
          </div>
          <div className="food__features-item">
            <p>Vegan</p>
          </div>
          <div className="food__features-item">
            <p>Nigeria</p>
          </div>
        </div>

        <div className="diffbottomna" />

        <div className="fooddetails__order">
          <div className="fooddetails__order-left">
            <p>Fried Rice</p>
            <div className="fooddetails__order-bottom">
              <div className="fob__left">
                {rating}
                {rating}
                {rating}
                {rating}
                {rating}
              </div>
              <p>(431)</p>
            </div>
          </div>
          <button className="fooddetails__order-right">Add to order</button>
        </div>

        <div className="fooddetails__bottomstack">
          <div className="place__price">
            {plate_icon} <p>$100.00</p>
          </div>

          <div className="place__order">
            <p>Place Order</p>
            <div className="place__order-num">
              <p>2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodDetails;
