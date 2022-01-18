import React, { useContext } from "react";

import ProductInCart from "./ProductInCart";
import Card from "../UI/Card";
import SectionTitle from "../UI/SectionTitle";
import Button from "../UI/Button";

import CartContext from "../../store/CartContext";

import "./Cart.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  let sum = 0;

  const noProductsNotificationStyle = {
    margin: "1rem 0 1rem 0",
    fontSize: "1.3em",
  };

  const hideCart = () => {
    props.onCartDisplayChange();
  };

  return (
    <Card className="cart">
      <SectionTitle name="Shopping Cart" />
      <hr />
      {cartCtx.productsInCart.length > 0 ? (
        <div className="products-in-cart">
          {cartCtx.productsInCart.map((product) => {
            sum += parseFloat(product.price);

            return (
              <ProductInCart
                key={Math.random()}
                product={product}
              />
            );
          })}
        </div>
      ) : (
        <div style={noProductsNotificationStyle}>No products found.</div>
      )}
      <hr />
      {cartCtx.productsInCart.length > 0 && (
        <div className="cart-sum-box">
          <div className="cart-sum-box-title">Sum:</div>
          <div className="cart-sum-box-sum">{sum.toFixed(2)}$</div>
        </div>
      )}
      <div className="cart-control-buttons">
        <Button className="control-button-hide" onButtonClick={hideCart}>
          Back
        </Button>
        {sum !== 0 && <Button className="control-button-buy">Buy</Button>}
      </div>
    </Card>
  );
};

export default Cart;
