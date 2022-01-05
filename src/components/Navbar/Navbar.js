import NewProductNotification from "./NewProductNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Products from "../Shop/Products";

const Navbar = (props) => {
  return (
    <div className="navbar">
      {/* icon & title */}
      <div className="title-box">
        <div className="title-icon">🦠</div>
        <a href="root" className="title">
          Medreact
        </a>
      </div>

      {/* nav-links */}
      <div className="nav-links">
        <a href="about">About</a>
        <a href="shop">Shop</a>
        <a href="contact">Contact</a>
      </div>

      {/* cart */}
      <div className="cart-box">
        <div>
          <FontAwesomeIcon icon={faShoppingCart} className="navbar-cart-icon" />
        </div>

        <p>Cart</p>
        {props.productsInCart.length > 0 && (
          <NewProductNotification quantity={props.productsInCart.length} />
        )}
      </div>

      {/* log in / log out */}
      <button className="auth-btn">Log In</button>
    </div>
  );
};

export default Navbar;
