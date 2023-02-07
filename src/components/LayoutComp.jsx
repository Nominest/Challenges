import Footer from "./Footer";
import Header from "./Header";
import Page from "./Page";
import Pagination from "./Pagination";
import { Route, Routes } from "react-router-dom";

export default function LayoutComp({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
