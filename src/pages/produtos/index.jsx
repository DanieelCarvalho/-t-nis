import styles from "./style.module.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Cards } from "../../components/Cards";
import SetaD from "../../assets/caret-circle-right-thin.svg";
import SetaE from "../../assets/caret-circle-left-thin.svg";

export const Produtos = () => {
  const [item, setItem] = useState([]);
  const carousel = useRef(null);
  const [selectedItems, setSelectedItems] = useState(
    JSON.parse(localStorage.getItem("selectedItems")) || []
  );

  useEffect(() => {
    const promise = axios.get("http://localhost:3000/products");
    promise.then((response) => {
      setItem(response.data);
    });
    promise.catch((e) => console.log("deu ruim! 😢", e));
  }, [selectedItems]);

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
    const updatedSelectedItems = [...selectedItems];
    const existingItem = updatedSelectedItems.find(
      (item) => item.id === selectedProduct.id
    );

    if (existingItem) {
      existingItem.quantidade += selectedProduct.quantidade || 1;
    } else {
      updatedSelectedItems.push({
        ...selectedProduct,
        quantidade: selectedProduct.quantidade || 1,
      });
    }

    setSelectedItems(updatedSelectedItems);

    // Salvar informações no localStorage
    localStorage.setItem("selectedItems", JSON.stringify(updatedSelectedItems));
  }

  return (
    <div>
      <div className={styles["carousel"]} ref={carousel}>
        <div className={styles["carousel-card"]}>
          {item.map((product, index) => {
            const url = `/carrinho`;
            return (
              <Cards
                key={index}
                title={product.title}
                description={product.description}
                price={"R$" + product.price.toFixed(2).replace(".", ",")}
                img={product.img}
                img2={product.img2}
                url={url}
                btCart={true}
                addProduct={() => addProduct(product)}
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
