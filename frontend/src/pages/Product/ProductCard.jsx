import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const ProductCard = ({ p }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
    toast.success("Item added successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  return (
    <div className="max-w-sm relative bg-[#1A1A1A] rounded-lg shaodw dark:bg-gray-800 dark:border-gray-700">
      <section className=" relative">
        <Link to={`/product/${p._id}`}>
          <span className="absolute bottom-3 right-3 bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
            {p?.brand}
          </span>
          <img
            className=" w-full cursor-pointer"
            src={p?.image}
            alt={p?.name}
            style={{ height: "170px", objectFit: "cover" }}
          />
        </Link>
        <HeartIcon product={p} />
      </section>
    </div>
  );
};

export default ProductCard;
