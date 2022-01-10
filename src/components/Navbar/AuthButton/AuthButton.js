import Button from "../../UI/Button"
import "./AuthButton.css"

const AuthButton = (props) => {
	const switchLoggedIn = () => {
		if (props.isLoggedIn) {
			props.onLogOut()
		} else {
			props.onLogIn()
		}
	}

	return (
		<Button className="auth-btn" onButtonClick={switchLoggedIn}>
			{props.isLoggedIn ? "Log Out" : "Log In"}
		</Button>
	)
}

export default AuthButton;