import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/home";
import { Produtos } from "../pages/produtos";
import { RootLayout } from "../components/RootLayout";
import { ErrorPage } from "../pages/ErrorPage";
import { Cart } from "../pages/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "produtos", element: <Produtos /> },
      ],
    },
    {
      path: "/Carrinho",
      element: <Cart />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
