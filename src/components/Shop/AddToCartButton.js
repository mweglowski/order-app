import { React, useRef, useContext } from "react";

import CartContext from "../../store/CartContext";

import "./AddToCartButton.css";

const AddToCartButton = (props) => {
  const cartCtx = useContext(CartContext)
	const buttonRef = useRef()

	const addProductToCart = (event) => {
		buttonRef.current.style.cursor = "default"
    buttonRef.current.textContent = "✔";
    buttonRef.current.style.backgroundColor = "#06b5e0";
    buttonRef.current.style.color = "white";
		buttonRef.current.style.border = "2px solid lightgray"
		buttonRef.current.disabled = true
    setTimeout(() => {
      buttonRef.current.textContent = "✔ Success";
    }, 1000);
    setTimeout(() => {
      cartCtx.onAddProduct(props.productData)
    }, 2000)
  };

  return (
    <button
      className="product-on-hover-card-add-to-cart-btn"
      onClick={addProductToCart}
			ref={buttonRef}
    >
      <span className="product-on-hover-card-plus">+</span> Add to Cart
    </button>
  );
};

export default AddToCartButton;
