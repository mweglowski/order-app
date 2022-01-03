import { ReactComponent as CartSvg } from "../../images/cart.svg"

import "./ProductOnHoverCard.css";

const ProductOnHoverCard = (props) => {
  return (
    <div className="product-on-hover-card" style={{ top: props.top }}>
			<CartSvg className="product-on-hover-card-cart-icon" />
			<div className="product-on-hover-card-price">{props.price}</div>
			<button className="product-on-hover-card-add-to-cart-btn"><span className="product-on-hover-card-plus">+</span> Add to Cart</button>
		</div>
  );
};

export default ProductOnHoverCard;
