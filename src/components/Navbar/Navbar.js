import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* icon & title */}
      <div className="title-box">
        <div className="title-icon">🦠</div>
        <div className="title">Medreact</div>
      </div>

      {/* nav-links */}
      <div className="nav-links">
        <a href="">About</a>
        <a href="">Shop</a>
        <a href="">Contact</a>
      </div>

      {/* cart */}
      <div className="cart-box">
        <div>
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          <div className="new-product-notification"></div>
        </div>

        <p>Cart</p>
      </div>

      {/* log in / log out */}
      <button className="auth-btn">Log In</button>
    </div>
  );
};

export default Navbar;
