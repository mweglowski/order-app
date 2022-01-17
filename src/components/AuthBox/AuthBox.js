import React, { useContext } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import AuthContext from "../../store/AuthContext";

import "./AuthBox.css";

const AuthBox = (props) => {
  // AUTH CONTEXT
  const authCtx = useContext(AuthContext);

  const switchAuthBoxDisplay = () => {
    props.switchDisplay();
  };

  const loginHandler = () => {
    switchAuthBoxDisplay();
    authCtx.onLogin();
  };

  const logoutHandler = () => {
    switchAuthBoxDisplay();
    authCtx.onLogout();
  };

  return (
    <div>
      <Card className="auth-box">
        {!authCtx.isLoggedIn ? (
          <>
            <div>Log In to your account.</div>
            <div className="auth-control">
              <label className="auth-control-title">E-mail:</label>
              <input />
            </div>
            <div className="auth-control">
              <label className="auth-control-title">Password:</label>
              <input type="password" />
            </div>
            <div className="auth-box-log-in-controls">
              <Button onButtonClick={loginHandler}>Log In</Button>
              <Button onButtonClick={switchAuthBoxDisplay}>Back</Button>
            </div>
          </>
        ) : (
          <>
            <div>Are you sure to log out?</div>
            <div className="auth-box-log-out-controls">
              <Button onButtonClick={logoutHandler}>Log Out</Button>
              <Button onButtonClick={switchAuthBoxDisplay}>Cancel</Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default AuthBox;
