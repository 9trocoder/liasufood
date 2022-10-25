import React from "react";
import { useNavigate } from "react-router-dom";
import { delivery, stars, time } from "../utility/tools";

function FoodTray({ suggestion, suggestionlabel }) {
  let navigate = useNavigate();
  return (
    <>
      <div className="suggestion__cnt">
        <p className="suggestion">{suggestion}</p>
        <p className="suggestionlabel">({suggestionlabel})</p>
      </div>

      <div className="foodtray__cnt">
        <div
          className="foodtray__cnt-items"
          onClick={() => navigate("/food_details")}
        >
          <img
            src="https://images.unsplash.com/photo-1638436684761-7e59f8a9072f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt=""
          />
          <p className="foodtray__title">Fried Rice</p>
          <p className="foodtray__paragraph">
            A delicious fried rice food from Nigeria.
          </p>
          <div className="foodtray__bottom">
            <div className="foodtray__bottom-item">
              {time} <p>10 min</p>
            </div>
            <div className="foodtray__bottom-item">
              {stars} <p>4.5</p>
            </div>
            <div className="foodtray__bottom-item">
              {delivery} <p>Free Delivery</p>
            </div>
          </div>
        </div>
        <div
          className="foodtray__cnt-items"
          onClick={() => navigate("/food_details")}
        >
          <img
            src="https://images.unsplash.com/photo-1629606600908-a51ec6c44fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
            alt=""
          />
          <p className="foodtray__title">Beans and Bread</p>
          <p className="foodtray__paragraph">
            A delicious fried rice food from Nigeria.
          </p>
          <div className="foodtray__bottom">
            <div className="foodtray__bottom-item">
              {time} <p>10 min</p>
            </div>
            <div className="foodtray__bottom-item">
              {stars} <p>4.5</p>
            </div>
            <div className="foodtray__bottom-item">
              {delivery} <p>Free Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodTray;
