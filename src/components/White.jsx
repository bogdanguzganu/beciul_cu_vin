import React from "react";
import styles from "./styles/White.module.css";
import { useState, useEffect } from "react";
import NavBar from "./Nav";


const WhiteCart = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState([]);

  async function getData() {
    const result = await fetch("./itemswhite.json");
    const res = await result.json();
    setData(res);
    console.log(data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.backgroundImage}>
      <NavBar />

      <div className={styles.container}>
        {data.map((item, key) => (
          <div className={styles.card} key={key} id={item.id}>
            <div className={styles.cont}>
              <img src={item.imgUrl} alt="va1" />
              <h4 className={styles.name} key={key} id={item.name}>
                <b>{item.name}</b>
              </h4>
              <p className={styles.price} key={key} id={item.price}>Pret: {item.price} Ron</p>
              <p><button>Adauga in cos</button></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhiteCart;
