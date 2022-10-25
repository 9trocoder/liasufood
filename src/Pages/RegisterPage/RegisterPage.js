import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input";
import {
  data,
  email,
  facebook,
  password,
  phone,
} from "../../utility/tools";

function RegisterPage() {
    let navigate = useNavigate();
  return (
    <div className="loginpage__cnt">
      <p className="loginpage__title">
        Register <br />
        New account
      </p>

      <Input labelName="Full Name" icon={data} />
      <Input labelName="Email" icon={email} />
      <Input labelName="Phone" icon={phone} />
      <Input labelName="Password" icon={password} />
      <button onClick={() => navigate("/home")  }className="general__btn">Register</button>
      <button onClick={() => navigate("/home")} className="social__signin">
        {facebook} Sign up with Facebook
      </button>
      <div onClick={() => navigate("/")} className="donthaveaccount">
        <p>
          Already have an account? <span> Login</span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
