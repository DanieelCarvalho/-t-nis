import { Cards } from "../../components/Cards";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context";
import styles from "./style.module.css";
import Menos from "../../assets/minus-thin (1).svg";
import Mais from "../../assets/plus-thin (1).svg";
export const Cart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quant, setQuant] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  function subProduct(id) {
    cart.forEach((p) => {
      if (p.id === id) {
        p.quantidade -= 1;
        setQuant(p.quantidade);
      }
    });
    const product = cart.find((p) => p.id === id);
    const newCart = cart.filter((p) => p.id !== id);

    if (product.quantidade === 0) setCart(newCart);
  }
  function addProduct(id) {
    cart.forEach((p) => {
      if (p.id === id) {
        p.quantidade += 1;
        setQuant(p.quantidade);
      }
    });
  }
  return (
    <section className={styles["container"]}>
      <div className={styles["boxCarts"]}>
        {cart.map((item, index) => {
          return (
            <div key={index} className={styles["box-product"]}>
              <img
                src={item.img}
                alt=""
                className={styles["box-product-img"]}
              />
              <div className={styles["box-product-title"]}>
                <h1>{item.title}</h1>
                <p>{"R$" + item.price.toFixed(2)}</p>
              </div>
              <div className={styles["box-buttons"]}>
                <button
                  className={styles["box-button"]}
                  onClick={() => subProduct(item.id)}
                >
                  <img src={Menos} alt="" />
                </button>
                <p>{item.quantidade}</p>
                <button
                  className={styles["box-button"]}
                  onClick={() => addProduct(item.id)}
                >
                  {" "}
                  <img src={Mais} alt="" />
                </button>
              </div>
            </div>
          );
        })}
        <div>
          <h2>Total da compra: R$ {0} </h2>
        </div>
      </div>
    </section>
  );
};
