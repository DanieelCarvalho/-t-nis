import styles from "./style.module.css";
import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import { Cards } from "../../components/Cards";
import SetaD from "../../assets/caret-circle-right-thin.svg";
import SetaE from "../../assets/caret-circle-left-thin.svg";
import { useParams } from "react-router-dom";
import CartContext from "../../context";

export const Produtos = () => {
  const [item, setItem] = useState([]);
  const carousel = useRef(null);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const promise = axios.get("http://localhost:3000/products");
    promise.then((response) => {
      setItem(response.data);
    });
    promise.catch((e) => console.log("deu ruim! 😢", e));
  }, []);
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  function addProduct(selectedProduct) {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(
      (item) => item.id === selectedProduct.id
    );

    if (existingItem) {
      // Se o produto já estiver no carrinho, atualize apenas a quantidade
      existingItem.quantidade += selectedProduct.quantidade || 1;
    } else {
      // Caso contrário, adicione um novo item ao carrinho
      updatedCart.push({ ...selectedProduct });
    }

    setCart(updatedCart);
    console.log(cart);
  }

  return (
    <div>
      <div className={styles["carousel"]} ref={carousel}>
        <div className={styles["carousel-card"]}>
          {item.map((item, index) => {
            const url = `/carrinho`;
            return (
              <Cards
                key={index}
                title={item.title}
                description={item.description}
                price={"R$" + item.price.toFixed(2)}
                img={item.img}
                url={url}
                btCart={true}
                addProduct={() => addProduct(item)}
              />
            );
          })}
        </div>
      </div>
      <div className={styles["buttons"]}>
        <button onClick={handleLeftClick}>
          <img className={styles["button"]} src={SetaE} alt="scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img className={styles["button"]} src={SetaD} alt="scroll Right" />
        </button>
      </div>
    </div>
  );
};
