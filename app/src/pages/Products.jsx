import { useSelector } from "react-redux";
import ProductList from "../components/Product/ProductList";
import { selectLoggedUser } from "../components/auth/authSlice";

const Products = () => {
  return (
    <>
      <ProductList />
    </>
  );
};

export default Products;
