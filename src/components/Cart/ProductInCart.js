import Card from "../UI/Card"
import { ReactComponent as PillSvg } from "../../images/pill.svg";
import { ReactComponent as SyrupSvg } from "../../images/syrup.svg";

import "./ProductInCart.css"

const ProductInCart = (props) => {
  return (
    <Card className="product-in-cart">
      {props.type === "syrup" ? <SyrupSvg className="cart-syrup-icon" /> : <PillSvg className="cart-pill-icon" />}
      <div className="product-in-cart-name">{props.name}</div>
      <div className="product-in-cart-price">{props.price}</div>
    </Card>
  );
};

export default ProductInCart;
