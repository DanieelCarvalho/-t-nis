import styles from "./style.module.css";
import Carrinho from "../../assets/shopping-cart-thin (1).svg";

export const Cards = ({
  title,
  description,
  price,
  img,
  showButton,
  addProduct,
  removeProduct,
  quantidade,
}) => {
  return (
    <section className={styles["container"]}>
      <figure className={styles["container-figure"]}>
        <img
          src={img}
          alt="imagem do produto"
          className={styles["container-figure-img"]}
        />
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
        <button>
          <img src={Carrinho} alt="" />
          Adicionar ao carrinhdo
        </button>
      </figure>
    </section>
  );
};
