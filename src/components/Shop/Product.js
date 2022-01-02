import { React, useState } from "react";

import Card from "../UI/Card";
import { ReactComponent as PillSvg } from "../../images/pill.svg";

import classes from "./Product.module.css";

const Product = () => {
  const [isHovered, setIsHovered] = useState(false);

  const productHoverHandler = () => {
    setIsHovered(true);
		changeProductStyle()
  };

	const changeProductStyle = () => {
		console.log('hovered')
	}

  let productStyle = {
		backgroundColor: "blue"
	};

  let pillSvgStyle = {
    width: "50px",
    fill: "#222e38",
    transform: "rotate(135deg)",
  };

  return (
    <div
      className={classes.product}
      style={productStyle}
      onMouseEnter={productHoverHandler}
    >
      <PillSvg style={pillSvgStyle} />
      <div>Vitamine C</div>
    </div>
  );
};

export default Product;
