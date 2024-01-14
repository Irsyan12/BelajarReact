import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/darkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const NavBar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-15 bg-blue-700 text-white items-center px-10">
      {username}
      <Button classname="bg-black mx-3 my-3 h-15" onClick={handleLogout}>
        Logout
      </Button>
      
      <Button
        className="bg-black  px-10 ml-5 text-white rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
      <div className="flex items-center bg-black p-2 rounded-md ml-5 ">
        Item: {totalCart} | Price ${total}
      </div>
    </div>
  );
};

export default NavBar;
