import { React, useState } from "react";

import ProductOnHoverCard from "./ProductOnHoverCard";
import { ReactComponent as InfoSvg } from "../../images/info.svg";
import { ReactComponent as PillSvg } from "../../images/pill.svg";
import { ReactComponent as SyrupSvg } from "../../images/syrup.svg";

import "./Product.css";

const Product = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const mouseEnterHandler = () => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = () => {
    setIsHovered(false);
  };

  const hoverBoxTopValue = isHovered ? 0 : "100%";
  let pillSvgStyle = {
    opacity: 1,
  };

  let syrupSvgStyle = {
    opacity: 1,
  };

  let amountStyle = {
    opacity: 1,
  };

  if (isHovered) {
    pillSvgStyle = { ...pillSvgStyle, opacity: 0.1 };
    syrupSvgStyle = { ...syrupSvgStyle, opacity: 0.1 };
    amountStyle.opacity = 0.1;
  }

  return (
    <div
      className="product"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <InfoSvg className="product-info-icon" />
      {isHovered && (
        <ProductOnHoverCard
          price={props.price}
          top={hoverBoxTopValue}
          productData={props.productData}
          onProductAddToCart={props.onProductAddToCart}
        />
      )}
      <div className="product-icon-box">
        {props.productData.type === "pills" ? (
          <PillSvg className="product-pill-icon" style={pillSvgStyle} />
        ) : (
          <SyrupSvg className="product-syrup-icon" style={syrupSvgStyle} />
        )}
      </div>
      <div className="product-name">{props.productData.name}</div>
      <div className="product-price">{props.productData.price}</div>
      <div className="product-amount" style={amountStyle}>
        {props.amount}
      </div>
    </div>
  );
};

export default Product;
