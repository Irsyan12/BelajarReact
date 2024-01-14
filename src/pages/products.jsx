import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useState, useRef, useContext } from "react";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import NavBar from "../components/Layouts/NavBar";
import { DarkMode } from "../context/darkMode";


const ProductsPage = () => {
  const { isDarkMode } = useContext(DarkMode);

  const [products, setProducts] = useState([]);
  useLogin();
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

 

  return (
    <>
      <NavBar />
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title} id={product.id}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
