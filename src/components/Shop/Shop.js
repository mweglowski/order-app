import Products from "./Products";
import Card from "./../UI/Card";

import classes from "./Shop.module.css";

const Shop = (props) => {
  return (
    <Card id="shop" className={classes.shop}>
      <div className={classes["section-title"]}>Our Products</div>
      <hr />
      <Products products={props.products} />
    </Card>
  );
};

export default Shop;
