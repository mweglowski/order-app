import "./Card.css";

const Card = (props) => {
	console.log(props.style)
  return (
		<div className={`card ${props.className}`} style={props.style}>{props.children}</div>
	);
};

export default Card;
