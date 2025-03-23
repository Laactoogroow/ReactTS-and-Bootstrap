import CardProduct from "../../components/Fragments/CardProduct";

const ProductLayout = () => {
  return (
    <CardProduct>
      <CardProduct.Header image="/image/Happy1.jpeg" />
      <CardProduct.Body name="Happy">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
        accusamus laboriosam tempore nam hic voluptatem!
      </CardProduct.Body>
      <CardProduct.Footer>Add to cart</CardProduct.Footer>
    </CardProduct>
  );
};

export default ProductLayout;
