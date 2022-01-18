import Product from "./Product";

import "./Products.css";

const Products = (props) => {
  return (
    <div className="products">
      {props.products.map((product) => {
        return (
          <Product
            key={Math.random()}
            productData={product}
          />
        );
      })}
    </div>
  );
};

export default Products;
