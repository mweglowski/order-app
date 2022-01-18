import React, { useContext } from "react";

import NewProductNotification from "./NewProductNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import CartContext from "../../../store/CartContext";

import "./CartButton.css";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className="cart-box" onClick={props.onCartButtonClick}>
      <div>
        <FontAwesomeIcon icon={faShoppingCart} className="navbar-cart-icon" />
      </div>
      <div>Cart</div>
      {cartCtx.productsInCart.length > 0 && (
        <NewProductNotification quantity={cartCtx.productsInCart.length} />
      )}
    </div>
  );
};

export default CartButton;
