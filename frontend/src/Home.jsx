import { useParams } from "react-router";
import { useGetProductsQuery } from "./redux/api/productApiSlice";
import Loader from "./components/Loader";
import SmallProduct from "./pages/Product/SmallProduct.jsx/SmallProduct";
import Header from "./components/Header";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({ keyword });

  console.log(data);
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
