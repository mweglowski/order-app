import { React, useState } from "react";

import Card from "../UI/Card";
import { ReactComponent as PillSvg } from "../../images/pill.svg";
import { ReactComponent as SyrupSvg } from "../../images/syrup.svg";
import { ReactComponent as BinSvg } from "../../images/bin.svg";

import "./ProductInCart.css";

const ProductInCart = (props) => {
  const [isHovered, setIsHovered] = useState(false)

  const mouseEnterHandler = (event) => {
    Array.from(event.target.children).map(child => {
      child.style.opacity = .3
    })
    setIsHovered(true)
  };

  const mouseLeaveHandler = (event) => {
    Array.from(event.target.children).map(child => {
      child.style.opacity = 1
    })
    setIsHovered(false)
  };

  const removeProduct = () => {
    props.onProductRemove(props.product)
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
        {isHovered && <BinSvg className="cart-bin-icon" onClick={removeProduct} />}
      </Card>
    </div>
  );
};

export default ProductInCart;
