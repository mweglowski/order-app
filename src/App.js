import { React, useState, useEffect, useRef } from "react";

import Navbar from "./components/Navbar/Navbar";
import LandingBox from "./components/LandingBox/LandingBox";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import AuthBox from "./components/AuthBox/AuthBox";
import DarkTheme from "./components/UI/DarkTheme";
import Notification from "./components/UI/Notification";

import "./App.css";

const App = () => {
  // STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthBoxDisplayed, setIsAuthBoxDisplayed] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);

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

  // SETTING USER LOGGED IN ON PAGE LOAD
  useEffect(() => {
    const storedUserLoggedInData = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInData === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    console.log("logged in");
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn", "1");
    setIsLoggedIn(false);
    console.log("logged out");
  };

  const addProductToCart = (newProduct) => {
    notificationRef.current.slideDown("Product added to the cart.")

    setProductsInCart((prevState) => {
      return [newProduct, ...prevState];
    });

    setTimeout(() => {
      notificationRef.current.slideUp()
    }, 2000)
  };

  const removeProductFromCart = (product) => {
    notificationRef.current.slideDown("Product removed from the cart.")

    setProductsInCart((prevState) => {
      let productIndex = 0;
      for (let i = 0; i < prevState.length; i++) {
        if (prevState[i].name === product.name) {
          productIndex = i;
        }
      }
      return prevState
        .slice(0, productIndex)
        .concat(prevState.slice(productIndex + 1));
    });

    setTimeout(() => {
      notificationRef.current.slideUp()
    }, 2000)
  };

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
      {/* TEMPORARY MOVING COMPONENTS */}

      {/* NOTIFICATION */}
      <Notification ref={notificationRef} />

      {/* CART */}
      {isCartDisplayed && <DarkTheme />}
      {isCartDisplayed && (
        <Cart
          productsInCart={productsInCart}
          onCartDisplayChange={switchDisplayCart}
          onProductRemove={removeProductFromCart}
        />
      )}

      {/* AUTH BOX */}
      {isAuthBoxDisplayed && <DarkTheme />}
      {isAuthBoxDisplayed && (
        <AuthBox
          isLoggedIn={isLoggedIn}
          onLogIn={loginHandler}
          onLogOut={logoutHandler}
          displayed={isAuthBoxDisplayed}
          switchDisplay={switchDisplayAuthBox}
        />
      )}

      {/* STATIC COMPONENTS */}

      {/* NAVBAR */}
      <Navbar
        productsInCart={productsInCart}
        onCartButtonClick={switchDisplayCart}
        onAuthButtonClick={switchDisplayAuthBox}
        isLoggedIn={isLoggedIn}
        onLogIn={loginHandler}
        onLogOut={logoutHandler}
      />

      {/* CONTENT */}
      <div className="content">
        {/* BARGAIN & GALLERY */}
        <LandingBox />

        {/* SHOP */}
        <Shop products={products} onProductAddToCart={addProductToCart} />
      </div>
    </>
  );
};

export default App;
