import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/home";
import { Produtos } from "../pages/produtos";
import { RootLayout } from "../components/RootLayout";
import { ErrorPage } from "../pages/ErrorPage";
import { Cart } from "../pages/Cart";
import CartContext from "../context";

function App() {
  const [cart, setCart] = useState([]);
  const [dados, setDados] = useState({});
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      // errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "produtos", element: <Produtos /> },
        { path: "carrinho", element: <Cart /> },
      ],
    },
  ]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;
