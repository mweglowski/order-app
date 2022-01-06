import ProductInCart from "./ProductInCart";
import Card from "../UI/Card";

import "./Cart.css";

const Cart = (props) => {
  return (
    <div className="cart">
      {props.productsInCart.map((product) => {
        return <ProductInCart key={Math.random()} />;
      })}
    </div>
  );
};

export default Cart;
