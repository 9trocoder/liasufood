import React from "react";
import "./components.css";

function Input({ icon, labelName, handleChange }) {
  return (
    <div className="input__container ">
      <div className="input__container-top">
        <p className="input__label">{labelName}</p>
        <div className="input__icon">{icon}</div>
      </div>

      <input  onChange={handleChange} />
    </div>
  );
}

export default Input;
