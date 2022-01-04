import { React, useState } from "react";

import AddToCartButton from "./AddToCartButton";
import { ReactComponent as CartSvg } from "../../images/cart.svg";

import "./ProductOnHoverCard.css";

const ProductOnHoverCard = (props) => {
  return (
    <div className="product-on-hover-card" style={{ top: props.top }}>
      <CartSvg className="product-on-hover-card-cart-icon" />
      <div className="product-on-hover-card-price">{props.price}</div>
      <AddToCartButton />
    </div>
  );
};

export default ProductOnHoverCard;
