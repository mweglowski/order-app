import Card from "../UI/Card";
import Button from "../UI/Button";

import "./AuthBox.css";

const AuthBox = (props) => {
  const hideAuthBox = () => {
    props.switchDisplay();
  };

  const logIn = () => {
    hideAuthBox();
    props.onLogIn();
  };

  const logOut = () => {
    hideAuthBox();
    props.onLogOut();
  };

  return (
    <div>
      <Card className="auth-box">
        {!props.isLoggedIn ? (
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
              <Button onButtonClick={logIn}>Log In</Button>
              <Button onButtonClick={hideAuthBox}>Back</Button>
            </div>
          </>
        ) : (
          <>
            <div>Are you sure to log out?</div>
            <div className="auth-box-log-out-controls">
              <Button onButtonClick={logOut}>Log Out</Button>
              <Button onButtonClick={hideAuthBox}>Cancel</Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default AuthBox;
