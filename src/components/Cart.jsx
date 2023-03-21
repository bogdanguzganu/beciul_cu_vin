import React, { useState, useContext } from "react";
import NavBar from "./Nav";
import styles from "./styles/Cart.module.css";
import { globalContext } from "./Context/Context";

const Cart = () => {
  const [data] = useContext(globalContext);
  const [count, setCount] = useState(1)
 
  const incrementCount = () => {
    setCount(count + 1)
  }
  const decreseCount = () => {
    setCount(count - 1)
  }
  
  return (
    <div className={styles.backgroundImage}>
      <NavBar />
      <div>
        <div className={styles.head}>Cart Items</div>
        <div className={styles.container}>
        {data.length === 0 && <div>No items added</div>}
          <div>
            {data.map((e, i) => {
              return (
                <div>
                <ul key={i} className={styles.cart}>
                  <li>
                    <img src={e.img} className={styles.img} alt="img" />
                  </li>
                  <li className={styles.id}>{e.id}</li>
                  <li className={styles.name}>{e.name}</li>
                  <li className={styles.price}>{e.price + " Ron"}</li>
                  
                  <li className={styles.function}>
                    <button className={styles.add} onClick={incrementCount}>+</button>
                    <div className={styles.count}>{count}</div>
                    <button className={styles.remove} onClick={decreseCount}>-</button>
                  </li>
                  <li className={styles.result}>{"Total " + e.price*count + " Ron"}</li>
                </ul>
                </div>
              );
            })}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
