import CardProduct from "../../components/Fragments/CardProduct";
import { ProductData } from "../../data/ProductData";

const ProductLayout = () => {
  return (
    <div className="d-flex justify-content-center">
      {ProductData.map((items) => {
        return (
          <CardProduct key={items.id}>
            <CardProduct.Header image={items.img} />
            <CardProduct.Body name={items.name}>{items.desc}</CardProduct.Body>
            <CardProduct.Footer>Add to cart</CardProduct.Footer>
          </CardProduct>
        );
      })}
    </div>
  );
};

export default ProductLayout;
