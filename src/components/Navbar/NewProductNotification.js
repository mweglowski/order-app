import "./NewProductNotification.css"

const NewProductNotification = (props) => {
	return (
		<div className="new-product-notification">{props.quantity}</div>
	)
}

export default NewProductNotification;