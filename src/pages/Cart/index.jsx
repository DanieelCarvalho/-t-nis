import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Menos from "../../assets/minus-thin (1).svg";
import Mais from "../../assets/plus-thin (1).svg";
export const Cart = () => {
  const [quant, setQuant] = useState(0);
  const [total, setTotal] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const total = cartItems.reduce((acc, curr) => {
      return (acc += curr.quantidade * curr.price);
    }, 0);
    setTotal(total.toFixed(2).replace(".", ","));
  });
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];
    setCartItems(storedItems);
  }, []);

  function subProduct(id) {
    const updatedCart = cartItems.map((p) => {
      if (p.id === id) {
        p.quantidade -= 1;
        setQuant(p.quantidade);
      }
      return p;
    });

    const product = updatedCart.find((p) => p.id === id);
    const newCart = updatedCart.filter((p) => p.id !== id);

    if (product.quantidade === 0) {
      setCartItems(newCart);
      localStorage.setItem("selectedItems", JSON.stringify(newCart));
    } else {
      setCartItems(updatedCart);
      localStorage.setItem("selectedItems", JSON.stringify(updatedCart));
    }
  }

  function addProduct(id) {
    const updatedCart = cartItems.map((p) => {
      if (p.id === id) {
        p.quantidade += 1;
        setQuant(p.quantidade);
      }
      return p;
    });
    setCartItems(updatedCart);
    localStorage.setItem("selectedItems", JSON.stringify(updatedCart));
  }

  return (
    <section className={styles["container"]}>
      <div className={styles["boxCarts"]}>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => {
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
          })
        ) : (
          <h1>Carrinho vazio</h1>
        )}
        {cartItems.length > 0 && (
          <div>
            <h2>Total da compra: R$ {total}</h2>
          </div>
        )}
      </div>
    </section>
  );
};
