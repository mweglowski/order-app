import { React, useState, useContext } from "react";

import Card from "../UI/Card";
import { ReactComponent as PillSvg } from "../../images/pill.svg";
import { ReactComponent as SyrupSvg } from "../../images/syrup.svg";
import { ReactComponent as BinSvg } from "../../images/bin.svg";

import CartContext from "../../store/CartContext";

import "./ProductInCart.css";

const ProductInCart = (props) => {
  const [isHovered, setIsHovered] = useState(false)
  const cartCtx = useContext(CartContext);

  const mouseEnterHandler = (event) => {
    Array.from(event.target.children).map(child => {
      child.style.opacity = .3
      return null;
    })
    setIsHovered(true)
  };

  const mouseLeaveHandler = (event) => {
    Array.from(event.target.children).map(child => {
      child.style.opacity = 1
      return null;
    })
    setIsHovered(false)
  };

  const removeProduct = () => {
    cartCtx.onRemoveProduct(props.product)
  }

  return (
    <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <Card className="product-in-cart">
        {props.product.type === "syrup" ? (
          <SyrupSvg className="cart-syrup-icon" />
        ) : (
          <PillSvg className="cart-pill-icon" />
        )}
        <div className="product-in-cart-name">{props.product.name}</div>
        <div className="product-in-cart-price">{props.product.price}</div>
        {isHovered && <BinSvg className="product-in-cart-bin-icon" onClick={removeProduct} />}
      </Card>
    </div>
  );
};

export default ProductInCart;
