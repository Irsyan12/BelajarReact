import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import Error404Page from "./pages/404.jsx";
import ProductsPage from "./pages/products.jsx";
import ProfilePage from "./pages/profile.jsx";
import DetailProductPage from "./pages/detailProduct.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import NavBar from "./components/Layouts/NavBar.jsx";
import DarkModeContextProvider from "./context/darkMode.jsx";
import { TotalPriceProvider } from "./context/TotalPriceContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <Error404Page />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <NavBar/> */}
      <DarkModeContextProvider>
        <TotalPriceProvider>
        <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
