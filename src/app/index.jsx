import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/home";
import { Produtos } from "../pages/produtos";
import { RootLayout } from "../components/RootLayout";
import { ErrorPage } from "../pages/ErrorPage";
import { Cart } from "../pages/Cart";
import styles from "./style.module.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "produtos", element: <Produtos /> },
        { path: "carrinho", element: <Cart /> },
      ],
    },
  ]);
  return (
    <div className={styles["container"]}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
