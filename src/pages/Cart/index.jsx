import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cartContext";
import DadosContext from "../../context/dadosContext";
import styles from "./style.module.css";
import Menos from "../../assets/minus-thin (1).svg";
import Mais from "../../assets/plus-thin (1).svg";
export const Cart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quant, setQuant] = useState(0);
  const [total, setTotal] = useState(null);
  const { cart, setCart } = useContext(CartContext);
  const { dados, setDados } = useContext(DadosContext);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => {
      return (acc += curr.quantidade * curr.price);
    }, 0);
    setTotal(total.toFixed(2).replace(".", ","));
    console.log(total, "preco");
  });

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
    console.log(cart, "testeCart");
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
                <p>{item.totalprice}</p>
                <p>
                  Total: R${" "}
                  {parseInt(item.price * item.quantidade)
                    .toFixed(2)
                    .replace(".", ",")}
                </p>
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
          <h2>Total da compra: R$ {total} </h2>
        </div>
      </div>
    </section>
  );
};
