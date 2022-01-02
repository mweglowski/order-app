import Product from "./Product";

import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <div className={classes.products}>
      {props.products.map((product) => {
        return (
          <Product
            key={Math.random()}
            name={product.name}
            type={product.type}
            amount={product.amount}
            icon={product.icon}
            desc={product.desc}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default Products;
