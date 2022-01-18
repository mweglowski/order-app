import React, { useState } from "react";

const CartContext = React.createContext({
  productsInCart: [],
  onAddProduct: (newProduct) => {},
  onRemoveProduct: (product) => {},
});

export default CartContext;

export const CartContextProvider = (props) => {
  const [productsInCart, setProductsInCart] = useState([]);

  const addProductHandler = (newProduct) => {
    setProductsInCart((prevState) => {
      return [newProduct, ...prevState];
    });
  };

  const removeProductHandler = (product) => {
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
      // return prevState.filter(
      //   (product) => product.name !== productToRemove.name
      // );
    });
  };

  return (
    <CartContext.Provider
      value={{
        productsInCart: productsInCart,
        onAddProduct: addProductHandler,
        onRemoveProduct: removeProductHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
