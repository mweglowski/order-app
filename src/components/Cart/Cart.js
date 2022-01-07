import ProductInCart from "./ProductInCart";
import Card from "../UI/Card";

import "./Cart.css";

const Cart = (props) => {
  return (
    <Card className="cart">
      <h1>Shopping Cart</h1>
      <hr />
      {props.productsInCart.map((product) => {
        return (
          <ProductInCart
            key={Math.random()}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </Card>
  );
};

export default Cart;
