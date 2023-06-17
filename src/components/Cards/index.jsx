import styles from "./style.module.css";
import Carrinho from "../../assets/shopping-cart-thin (1).svg";
import Mais from "../../assets/plus-thin (1).svg";
import Menos from "../../assets/minus-thin (1).svg";
import { Link } from "react-router-dom";

export const Cards = ({
  title,
  description,
  price,
  img,
  showButton,
  btCart,
  addProduct,
  removeProduct,
  quantidade,
  url,
  subProduct,
}) => {
  const addCart = !btCart ? null : (
    <Link to={url}>
      <button className={styles["button-cart"]} onClick={() => addProduct()}>
        <img src={Carrinho} alt="" />
        Adicionar ao carrinhdo
      </button>
    </Link>
  );
  const buttons = !showButton ? null : (
    <button className={styles["buttons-quant"]}>
      <p>Quantidade:</p>
      <button onClick={() => removeProduct()}>
        {" "}
        <img src={Menos} alt="" />{" "}
      </button>

      <p>{quantidade}</p>
      <button onClick={() => addProduct()}>
        {" "}
        <img src={Mais} alt="" />{" "}
      </button>
    </button>
  );

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
        {addCart}
        {buttons}
      </figure>
    </section>
  );
};
