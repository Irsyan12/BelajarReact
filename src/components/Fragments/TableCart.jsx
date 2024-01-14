import { useSelector } from "react-redux";
import { useEffect, useRef, useContext } from "react";
import { DarkMode } from "../../context/darkMode";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({ type: "UPDATE", payload: { total: sum } });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  });

  return (
    <table
      className={`text-left table-auto border-separate border-spacing-x-5 ${
        isDarkMode && "text-white"
      }`}
    >
      <thead>
        <tr>
          <td>Products</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find(
              (products) => products.id === item.id
            );
            return (
              <tr key={item.id}>
                <td>{product.title.substring(0, 11)}...</td>
                <td>
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td>{item.qty}</td>
                <td>
                  {(product.price * item.qty).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan="3" className="font-bold">
            Total:
          </td>
          <td className="font-bold">
            {total.toLocaleString("id-ID", {
              style: "currency",
              currency: "USD",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
