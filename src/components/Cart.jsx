import React, { useState, useEffect, useContext } from "react";
import NavBar from "./Nav";
import styles from "./styles/Cart.module.css";
import { globalContext } from "./Context/Context";

const Cart = () => {
  const [data, setData] = useContext(globalContext);

  return (
    <div className={styles.backgroundImage}>
      <NavBar />
      <div>
        <div className={styles.container}>
          <div>
            {data.map((e, i) => {
              console.log(e);
              return (
                <ul key={i} className={styles.cart}>
                  <li>
                    <img src={e.img} className={styles.img} alt="img" />
                  </li>
                  <li className={styles.name}>{e.name}</li>
                  <li className={styles.price}>{e.price + " Ron"}</li>
                  <li className={styles.function}>
                    <button className={styles.add}>+</button>
                    <button className={styles.remove}>-</button>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
