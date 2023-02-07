import React, { useContext } from "react";
import { ProductContext } from "../App";

export default function Header() {
  const { products, setProducts } = useContext(ProductContext);

  return (
    <div>
      <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
        {products.map((product, i) => (
          <li key={i}>{product}</li>
        ))}
      </ul>
    </div>
  );
}
