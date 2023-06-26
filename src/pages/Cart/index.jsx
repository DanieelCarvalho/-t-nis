import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import Menos from "../../assets/minus-thin (1).svg";
import Mais from "../../assets/plus-thin (1).svg";
import Lixeira from "../../assets/trash-thin.svg";
import Foto from "../../assets/sports.png";
import SetaE from "../../assets/caret-left-thin.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Cart = () => {
  const [quant, setQuant] = useState(0);
  const [total, setTotal] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const notify = () => {
    toast.success("enviado com sucesso!", {
      position: "top-center",
      autoClose: 200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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

  useEffect(() => {
    document.body.style.backgroundImage = `url(${Foto})`;

    return () => {
      // Restaurar a imagem de fundo original ao desmontar o componente
      document.body.style.backgroundImage = "";
    };
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
  const Trash = (id) => {
    const updatedCart = cartItems.map((p) => {
      return p;
    });
    const product = updatedCart.find((p) => p.id === id);
    const newCart = updatedCart.filter((p) => p.id !== id);
    if (product.quantidade > 0) {
      setCartItems(newCart);
      localStorage.setItem("selectedItems", JSON.stringify(newCart));
    }

    console.log("clicou");
  };

  return (
    <section className={styles["container"]}>
      {cartItems.length > 0 && <h1>Meu carrinho</h1>}
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
                  <h3>{item.title}</h3>
                  <p>{item.totalprice}</p>
                  <p>
                    Total: R${" "}
                    {parseFloat(item.price * item.quantidade)
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
                  <button
                    className={styles["box-button-trash"]}
                    onClick={() => Trash(item.id)}
                  >
                    <img src={Lixeira} alt="" />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h4>Carrinho vazio</h4>
        )}
        {cartItems.length > 0 && (
          <div className={styles["container-total"]}>
            <h2>Total da compra: R$ {total}</h2>
            <div className={styles["container-total-buttons"]}>
              <button>Finalizar compra</button>
            </div>
            <Link className={styles["container-total-link"]} to="/produtos">
              <img src={SetaE} alt="uma seta indicando retorno" /> Continue
              comprando
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
