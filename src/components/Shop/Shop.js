import Products from "./Products";
import Card from "./../UI/Card";
import SectionTitle from "./../UI/SectionTitle"

import "./Shop.css";

const Shop = (props) => {
  return (
    <Card id="shop" className="shop">
      <SectionTitle name="Our Products" />
      <hr />
      <Products
        products={props.products}
        onProductAddToCart={props.onProductAddToCart}
      />
    </Card>
  );
};

export default Shop;
