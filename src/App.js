import { React, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import LandingBox from "./components/LandingBox/LandingBox";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";

import "./App.css";

const App = () => {
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

  const addProductToCart = (newProduct) => {
    setProductsInCart((prevState) => {
      return [newProduct, ...prevState];
    });
  };

  const showCart = () => {
    isCartDisplayed ? setIsCartDisplayed(false) : setIsCartDisplayed(true);
    console.log('cart shown')
  };

  return (
    <>
      {/* Temporary, moving componenets */}
      {isCartDisplayed && <Cart productsInCart={productsInCart} />}

      <Navbar productsInCart={productsInCart} onCartButtonClick={showCart} />
      <div className="content">
        <LandingBox />
        <Shop products={products} onProductAddToCart={addProductToCart} />
      </div>
    </>
  );
};

export default App;
