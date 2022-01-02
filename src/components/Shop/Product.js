import { React, useState } from "react";

import Card from "../UI/Card";
import { ReactComponent as PillSvg } from "../../images/pill.svg";

import classes from "./Product.module.css";

const Product = () => {
  const [isHovered, setIsHovered] = useState(false);

  const mouseEnterHandler = () => {
    console.log('enter')
    setIsHovered(true);
  };

  const mouseLeaveHandler = () => {
    console.log('out')
    setIsHovered(false);
  };

  // const changeProductStyle = () => {
  // 	console.log('hovered')
  // }

  let pillSvgStyle = {
    width: "50px",
    fill: "#222e38",
    transform: "rotate(135deg)",
  };

  return (
    <div
      className={classes.product}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {isHovered && (
        <div className={classes["product-on-hover-box"]}>hovering</div>
      )}
      <PillSvg style={pillSvgStyle} />
      <div>Vitamine C</div>
    </div>
  );
};

export default Product;
