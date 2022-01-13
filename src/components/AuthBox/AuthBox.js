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
              <input />
            </div>
            <Button onButtonClick={logIn}>Log In</Button>
            <Button onButtonClick={hideAuthBox}>Back</Button>
          </>
        ) : (
          <>
            <div>Are you sure to log out?</div>
            <Button onButtonClick={logOut}>Yes</Button>
            <Button onButtonClick={hideAuthBox}>Cancel</Button>
          </>
        )}
      </Card>
    </div>
  );
};

export default AuthBox;
