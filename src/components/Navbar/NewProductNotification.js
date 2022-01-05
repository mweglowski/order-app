import "./NewProductNotification.css"

const NewProductNotification = () => {
	const productsInCart = 5

	return (
		<div className="new-product-notification">{productsInCart}</div>
	)
}

export default NewProductNotification;