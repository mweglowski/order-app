import React, { useState, useRef, useEffect, useContext } from "react";

import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import LandingBox from "./components/LandingBox/LandingBox";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import AuthBox from "./components/AuthBox/AuthBox";
import DarkTheme from "./components/UI/DarkTheme";
import Notification from "./components/UI/Notification";

import { AuthContextProvider } from "./store/AuthContext";
import { CartContextProvider } from "./store/CartContext";

import CartContext from "./store/CartContext";

import "./App.css";

const App = () => {
  // STATE
  const [isAuthBoxDisplayed, setIsAuthBoxDisplayed] = useState(false);
  // const [productsInCart, setProductsInCart] = useState([]);
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);

  // CONTEXT
  const cartCtx = useContext(CartContext);

  // REFS
  const notificationRef = useRef();

  // DATA (PRODUCTS)
  const products = [
    {
      name: "Vitamine C",
      type: "pills",
      amount: "50x",
      desc: "Good for respiratory system.",
      price: "8.99$",
    },
    {
      name: "Vitamine D",
      type: "pills",
      amount: "50x",
      desc: "Good for bone structure.",
      price: "10.99$",
    },
    {
      name: "Vitamine B12",
      type: "pills",
      amount: "50x",
      desc: "Good for blood.",
      price: "11.99$",
    },
    {
      name: "Onion Syrup",
      type: "syrup",
      amount: "500ml",
      desc: "Good for cough and colds. It also reduce cholesterol levels, which may lower heart disease risk. It helps reduce high blood pressure and protect against blood clots.",
      price: "5.99$",
    },
    {
      name: "Chokeberry Syrup",
      type: "syrup",
      amount: "500ml",
      desc: "Helps and protects the heart and blood vessels, reduces swelling and blood sugar levels, and kill cancer cells.",
      price: "14.99$",
    },
  ];

  const switchDisplayCart = () => {
    isCartDisplayed ? setIsCartDisplayed(false) : setIsCartDisplayed(true);
  };

  const switchDisplayAuthBox = () => {
    isAuthBoxDisplayed
      ? setIsAuthBoxDisplayed(false)
      : setIsAuthBoxDisplayed(true);
  };

  return (
    <>
      <AuthContextProvider>
        <CartContextProvider>
          {/* TEMPORARY MOVING COMPONENTS */}

          {/* NOTIFICATION */}
          <Notification ref={notificationRef} />

          {/* CART */}
          {isCartDisplayed && <DarkTheme />}
          {isCartDisplayed && <Cart onCartDisplayChange={switchDisplayCart} />}

          {/* AUTH BOX */}
          {isAuthBoxDisplayed && <DarkTheme />}
          {isAuthBoxDisplayed && (
            <AuthBox
              displayed={isAuthBoxDisplayed}
              switchDisplay={switchDisplayAuthBox}
            />
          )}

          {/* STATIC COMPONENTS */}

          {/* NAVBAR */}
          <Navbar
            onCartButtonClick={switchDisplayCart}
            onAuthButtonClick={switchDisplayAuthBox}
          />

          {/* CONTENT */}
          <div className="content">
            {/* WELCOME SECTION */}
            <Welcome />

            {/* BARGAIN & GALLERY */}
            <LandingBox />

            {/* SHOP */}
            <Shop products={products} />
          </div>
        </CartContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
