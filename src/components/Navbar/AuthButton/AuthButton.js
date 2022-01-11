import Button from "../../UI/Button";
import "./AuthButton.css";

const AuthButton = (props) => {
  const showAuthButton = () => {
    props.onAuthButtonClick();
  };

  return (
    <Button className="auth-btn" onButtonClick={showAuthButton}>
      {props.isLoggedIn ? "Log Out" : "Log In"}
    </Button>
  );
};

export default AuthButton;
