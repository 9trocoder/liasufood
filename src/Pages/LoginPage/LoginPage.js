import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input";
import { email, facebook, password } from "../../utility/tools";
import "./LoginPage.css";

function LoginPage() {
  let navigate = useNavigate();
  return (
    <div className="loginpage__cnt">
      <p className="loginpage__title">
        Login to <br />
        find the best food
      </p>
      <Input labelName="Email" icon={email} />
      <Input labelName="Password" icon={password} />
      <div className="loginpage__forgotpassword">
        <p className="loginpage__forgot-pass">Forgot Password?</p>
      </div>
      <button onClick={() => navigate("/home")} className="general__btn">
        Sign In
      </button>
      <button onClick={() => navigate("/home")} className="social__signin">
        {facebook} Sign in with Facebook
      </button>
      <div onClick={() => navigate("/register")} className="donthaveaccount">
        <p>
          Don't have an account? <span> Register</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
