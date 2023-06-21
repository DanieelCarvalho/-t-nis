import styles from "./style.module.css";
import Carrinho from "../../assets/shopping-cart-thin (1).svg";
import Mais from "../../assets/plus-thin (1).svg";
import Menos from "../../assets/minus-thin (1).svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Cards = ({
  title,
  description,
  price,
  img,
  img2,
  showButton,
  btCart,
  addProduct,
  removeProduct,
  quantidade,
  url,
  subProduct,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const renderImage = isHovered ? img2 : img;

  return (
    <section className={styles["container"]}>
      <figure
        className={styles["container-figure"]}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <img
          src={renderImage}
          alt="imagem do produto"
          className={styles["container-figure-img"]}
        />
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{quantidade}</p>
        {btCart && (
          <Link to={url}>
            <button
              className={styles["button-cart"]}
              onClick={() => addProduct()}
            >
              <img src={Carrinho} alt="" />
              Adicionar ao carrinho
            </button>
          </Link>
        )}
        {showButton && (
          <div className={styles["buttons-quant"]}>
            <p>Quantidade:</p>
            <button onClick={() => removeProduct()}>
              <img src={Menos} alt="" />
            </button>
            <p>{quantidade}</p>
            <button onClick={() => addProduct()}>
              <img src={Mais} alt="" />
            </button>
          </div>
        )}
      </figure>
    </section>
  );
};
