import { React, useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import LandingBox from "./components/LandingBox/LandingBox";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [productsInCart, setProductsInCart] = useState([]);
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);
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
  ];

  useEffect(() => {
    const storedUserLoggedInData = localStorage.getItem("isLoggedIn")

    if (storedUserLoggedInData === "1") {
      setIsLoggedIn(true)
    }
  })

  const addProductToCart = (newProduct) => {
    setProductsInCart((prevState) => {
      return [newProduct, ...prevState];
    });
  };

  const removeProductFromCart = (product) => {
    setProductsInCart((prevState) => {
      let productIndex = 0;
      for (let i = 0; i < prevState.length; i++) {
        if (prevState[i].name === product.name) {
          productIndex = i
        }
      }
      return prevState.slice(0, productIndex).concat(prevState.slice(productIndex + 1))
    })
  }

  const switchDisplayCart = () => {
    isCartDisplayed ? setIsCartDisplayed(false) : setIsCartDisplayed(true);
  };

  return (
    <>
      {/* Temporary, moving componenets */}
      {isCartDisplayed && <Cart productsInCart={productsInCart} onCartDisplayChange={switchDisplayCart} onProductRemove={removeProductFromCart} />}

      <Navbar productsInCart={productsInCart} onCartButtonClick={switchDisplayCart} />
      <div className="content">
        <LandingBox />
        <Shop products={products} onProductAddToCart={addProductToCart} />
      </div>
    </>
  );
};

export default App;
