import CartButton from "./CartButton/CartButton"
import "./Navbar.css";

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
      <CartButton productsInCart={props.productsInCart}/>

      {/* log in / log out */}
      <button className="auth-btn">Log In</button>
    </div>
  );
};

export default Navbar;
