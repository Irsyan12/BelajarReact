import Button from "../Elements/Button";
import handleAddToCart from "../../pages/products";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow overflow-hidden flex flex-col justify-between mx-4 my-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="product"
        className="w-full h-60 object-cover rounded-t-lg"
        id={id}
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, name, id } = props;
  return (
    <div className="p-5 h-full">
      <Link to={`/product/${id}`} className="text-white">
        <h5 className="text-xl font-semibold tracking-tight">
          {name.substring(0, 20)}...
        </h5>
        <p className="text-sm">{children.substring(0, 100)}...</p>
      </Link>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "USD",
        })}
      </span>
      <Button
        classname="bg-blue-600 text-white hover:bg-blue-700"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add to Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
