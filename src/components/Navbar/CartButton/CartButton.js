import React, { useState, useContext, useEffect } from "react";

import NewProductNotification from "./NewProductNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import CartContext from "../../../store/CartContext";

import "./CartButton.css";

const CartButton = (props) => {
  const [isCartButtonAnimated, setIsCartButtonAnimated] = useState(false)
  const cartCtx = useContext(CartContext);

  const btnClasses = `navbar-cart-icon ${isCartButtonAnimated ? "shake" : ""}`

  useEffect(() => {
    if (cartCtx.productsInCart.length === 0) {
      return;
    }
    setIsCartButtonAnimated(true)

    const timer = setTimeout(() => {
      setIsCartButtonAnimated(false)
    }, 1000);

    return () => {
      clearTimeout(timer)
    }
  }, [cartCtx.productsInCart])

  return (
    <div className="cart-box" onClick={props.onCartButtonClick}>
      <div>
        <FontAwesomeIcon icon={faShoppingCart} className={btnClasses} />
      </div>
      <div>Cart</div>
      {cartCtx.productsInCart.length > 0 && (
        <NewProductNotification quantity={cartCtx.productsInCart.length} />
      )}
    </div>
  );
};

export default CartButton;
