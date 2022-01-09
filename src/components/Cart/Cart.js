import ProductInCart from "./ProductInCart";
import Card from "../UI/Card";
import SectionTitle from "../UI/SectionTitle";
import Button from "../UI/Button";

import "./Cart.css";

const Cart = (props) => {
  let sum = 0;

  const noProductsNotificationStyle = {
    margin: "1rem 0 1rem 0",
    fontSize: "1.3em",
  };

  const hideCart = () => {
    props.onCartDisplayChange()
  }

  return (
    <Card className="cart">
      <SectionTitle name="Shopping Cart" />
      <hr />
      {props.productsInCart.length > 0 ? (
        <div className="products-in-cart">
          {props.productsInCart.map((product) => {
            sum += parseFloat(product.price);

            return (
              <ProductInCart
                key={Math.random()}
                type={product.type}
                name={product.name}
                price={product.price}
              />
            );
          })}
        </div>
      ) : (
        <div style={noProductsNotificationStyle}>No products found.</div>
      )}
      <hr />
      {props.productsInCart.length > 0 && (
        <div className="cart-sum-box">
          <div className="cart-sum-box-title">Sum:</div>
          <div className="cart-sum-box-sum">{sum}$</div>
        </div>
      )}
      <div className="cart-control-buttons">
        <Button className="control-button-hide" onButtonClick={hideCart}>Hide</Button>
        {sum !== 0 && <Button className="control-button-buy">Buy</Button>}
      </div>
    </Card>
  );
};

export default Cart;
