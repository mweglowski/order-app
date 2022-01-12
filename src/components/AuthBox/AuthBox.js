import Card from "../UI/Card";

import "./AuthBox.css";

const AuthBox = (props) => {
  return (
    <div>
      <Card className="auth-box">
        <div>Log In to your account.</div>
        <div className="auth-control">
          <label className="auth-control-title">E-mail:</label>
          <input />
        </div>
        <div className="auth-control">
          <label className="auth-control-title">Password:</label>
          <input />
        </div>
      </Card>
    </div>
  );
};

export default AuthBox;
