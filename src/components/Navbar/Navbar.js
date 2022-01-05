import NewProductNotification from "./NewProductNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* icon & title */}
      <div className="title-box">
        <div className="title-icon">🦠</div>
        <a href="root" className="title">Medreact</a>
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
          <div className="new-product-notification"></div>
        </div>

        <p>Cart</p>
        <NewProductNotification />
      </div>

      {/* log in / log out */}
      <button className="auth-btn">Log In</button>
    </div>
  );
};

export default Navbar;
