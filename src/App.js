import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./components/Pagination";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Page from "./components/Page";
import { createContext, useState } from "react";
import LayoutComp from "./components/LayoutComp";

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([1, 2, 3]);

  return (
    <div className="App">
      <ProductContext.Provider
        value={{ products: products, setProducts: setProducts }}
      >
        <LayoutComp>
          <h1>Hello</h1>
          <Routes>
            <Route path="/page/:pageNumbers" element={<Page />}></Route>
          </Routes>
          <Pagination />
        </LayoutComp>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
