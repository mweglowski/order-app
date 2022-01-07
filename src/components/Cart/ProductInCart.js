const ProductInCart = (props) => {
  return (
    <div className="product-in-cart">
      <div>{props.name}</div>
      <div>{props.price}</div>
    </div>
  );
};

export default ProductInCart;
