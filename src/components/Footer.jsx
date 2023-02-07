import { useContext } from "react";
import { ProductContext } from "../App";

export default function Footer() {
  const { products, setProducts } = useContext(ProductContext);

  function removeProduct() {
    products.pop();
    setProducts([...products]);
  }
  return (
    <div>
      <button onClick={removeProduct}>Remove</button>
      <button>Add</button>
    </div>
  );
}
