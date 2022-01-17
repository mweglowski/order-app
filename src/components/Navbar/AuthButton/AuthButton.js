import React, { useContext } from "react";

import Button from "../../UI/Button";

import AuthContext from "../../../store/AuthContext"

import "./AuthButton.css";

const AuthButton = (props) => {
  const authCtx = useContext(AuthContext)
  
  const showAuthButton = () => {
    props.onAuthButtonClick();
  };

  return (
    <Button className="auth-btn" onButtonClick={showAuthButton}>
      {authCtx.isLoggedIn ? "Log In" : "Log Out"}
    </Button>
  );
};

export default AuthButton;
