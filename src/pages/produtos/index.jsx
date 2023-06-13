import styles from "./style.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Cards } from "../../components/Cards";

export const Produtos = () => {
  const [item, setItem] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const promise = axios.get("http://localhost:3000/products");
    promise.then((response) => {
      setItem(response.data);
    });
    promise.catch((e) => console.log("deu ruim! 😢", e));
  }, []);

  return (
    <div className={styles["container"]}>
      <h1>{item.title}</h1>
      {item.map((item, index) => (
        <Cards
          key={index}
          title={item.title}
          price={"R$" + item.price.toFixed(2)}
          img={item.img}
        />
      ))}
    </div>
  );
};
