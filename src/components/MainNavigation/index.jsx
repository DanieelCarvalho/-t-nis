import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import Carrinho from "../../assets/shopping-cart-thin (3).svg";

export const MainNavigation = () => {
  return (
    <header className={styles["container"]}>
      <div className={styles["container-title"]}>
        {" "}
        <NavLink className={styles["container-title-link"]} to="/">
          <h1>T P</h1>
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink className={styles["navLink"]} to="/">
              Início
            </NavLink>
          </li>
          <li>
            <NavLink className={styles["navLink"]} to="produtos">
              Tênis
            </NavLink>
          </li>
          <li>
            <NavLink className={styles["navLink"]} to="contato">
              Contato
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
