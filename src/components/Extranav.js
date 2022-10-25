import React from "react";
import { back } from "../utility/tools";
import { useNavigate } from "react-router-dom";
import "./components.css";

function Extranav({ pageName, pageIcon }) {
  let navigate = useNavigate();
  return (
    <div className="extranav__cnt">
      <div className="backicon" onClick={() => navigate(-1)}>
        {back}
        <p>{pageName}</p>
      </div>

      <div className="extraicon">{pageIcon}</div>
    </div>
  );
}

export default Extranav;
