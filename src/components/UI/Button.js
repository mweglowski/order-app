import "./Button.css"

const Button = props => {
	return (
		<button className={props.className} onClick={props.onButtonClick}>{props.children}</button>
	)
}

export default Button;