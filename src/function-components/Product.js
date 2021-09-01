function Product({ product }) {
//   if (product == null) {
//     return null;
//   }
  return (
    <div>
      <span>Product: {product.name}</span> <br />
      <span>Description: {product.description}</span><br />
      <span>Price: {product.price}</span><br />
      <span>Price: {product.price.slice(1,1)}</span><br />
    </div>
  );
}
export default Product;
