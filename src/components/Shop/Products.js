import Product from "./Product";

import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <div className={classes.products}>
      {props.products.map((product) => {
        return (
          <Product
            key={Math.random()}
            productData={product}
            onProductAddToCart={props.onProductAddToCart}
          />
        );
      })}
    </div>
  );
};

export default Products;
