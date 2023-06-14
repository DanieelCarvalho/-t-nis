import styles from "./style.module.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Cards } from "../../components/Cards";
import SetaD from "../../assets/caret-circle-right-thin.svg";
import SetaE from "../../assets/caret-circle-left-thin.svg";

export const Produtos = () => {
  const [item, setItem] = useState([]);
  const [busca, setBusca] = useState("");
  const carousel = useRef(null);

  useEffect(() => {
    const promise = axios.get("http://localhost:3000/products");
    promise.then((response) => {
      setItem(response.data);
    });
    promise.catch((e) => console.log("deu ruim! 😢", e));
  }, []);
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

  return (
    <div>
      <div className={styles["carousel"]} ref={carousel}>
        <div className={styles["carousel-card"]}>
          {item.map((item, index) => (
            <Cards
              key={index}
              title={item.title}
              description={item.description}
              price={"R$" + item.price.toFixed(2)}
              img={item.img}
            />
          ))}
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
