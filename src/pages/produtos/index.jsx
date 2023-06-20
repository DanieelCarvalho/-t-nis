import styles from "./style.module.css";
import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import { Cards } from "../../components/Cards";
import SetaD from "../../assets/caret-circle-right-thin.svg";
import SetaE from "../../assets/caret-circle-left-thin.svg";
import { useParams } from "react-router-dom";
import CartContext from "../../context/cartContext";

export const Produtos = () => {
  const [item, setItem] = useState([]);
  const carousel = useRef(null);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, setCart } = useContext(CartContext);
  const [quant, setQuant] = useState(null);
  const [selectedItems, setSelectedItems] = useState(
    JSON.parse(localStorage.getItem("selectedItems")) || []
  );

  useEffect(() => {
    const promise = axios.get("http://localhost:3000/products");
    promise.then((response) => {
      setItem(response.data);
    });
    promise.catch((e) => console.log("deu ruim! 😢", e));
  }, [cart]);
  console.log(cart, "testeproduto");

  useEffect(() => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  }, [selectedItems]);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  function addProduct(selectedProduct) {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(
      (item) => item.id === selectedProduct.id
    );

    if (existingItem) {
      existingItem.quantidade += selectedProduct.quantidade || 1;
    } else {
      updatedCart.push({
        ...selectedProduct,
        quantidade: selectedProduct.quantidade || 1,
      });
    }

    setCart(updatedCart);
    setSelectedItems([...selectedItems, selectedProduct]);
  }

  return (
    <div>
      <div className={styles["carousel"]} ref={carousel}>
        <div className={styles["carousel-card"]}>
          {item.map((procuct, index) => {
            const url = `/carrinho`;
            return (
              <Cards
                key={index}
                title={procuct.title}
                description={procuct.description}
                price={"R$" + procuct.price.toFixed(2).replace(".", ",")}
                img={procuct.img}
                url={url}
                btCart={true}
                addProduct={() => addProduct(procuct)}
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
