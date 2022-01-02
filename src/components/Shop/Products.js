import Product from "./Product";

import classes from "./Products.module.css";

const Products = () => {
  let products = [2, 2, 2, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
  // for (let i = 0; i < 5; i++) {
  //   products.push({ type: "pill" });
  // }

  return (
    <div className={classes.products}>
      {products.map((product) => {
        return <Product key={Math.random()} />;
      })}
    </div>
  );
};

export default Products;
