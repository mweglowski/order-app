import NewProductNotification from "./NewProductNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./CartButton.css";

const CartButton = (props) => {
  return (
    <div className="cart-box">
      <div>
        <FontAwesomeIcon icon={faShoppingCart} className="navbar-cart-icon" />
      </div>
      <div>Cart</div>
      {props.productsInCart.length > 0 && (
        <NewProductNotification quantity={props.productsInCart.length} />
      )}
    </div>
  );
};

export default CartButton;
