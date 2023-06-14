import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import Carrinho from "../../assets/shopping-cart-thin (1).svg";

export const MainNavigation = () => {
  return (
    <header className={styles["container"]}>
      <nav>
        <ul>
          <li>
            <NavLink className={styles["navLink"]} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles["navLink"]} to="produtos">
              produtos
            </NavLink>
          </li>
        </ul>
      </nav>
      <figure className={styles["container-figure"]}>
        <NavLink to="Carrinho">
          <img src={Carrinho} alt="imagem de um carrinho de compra" />
        </NavLink>
      </figure>
    </header>
  );
};
