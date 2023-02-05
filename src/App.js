import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./components/Pagination";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/page/:pageNumbers" element={<Page />}></Route>
      </Routes>
      <Pagination />
    </div>
  );
}

export default App;
