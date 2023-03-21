import React, { useContext }   from "react";
import styles from './styles/Rose.module.css';
import { useState, useEffect } from "react";
import NavBar from "./Nav";
import { globalContext } from "./Context/Context";

const RoseCart = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState([]);

  async function getData() {
    const result = await fetch("./itemsrose.json");
    const res = await result.json();
    setData(res);
    console.log(data);
  }
  useEffect(() => {
    getData();
  }, []);

  const [cart, setCart] = useContext(globalContext)

  return (
    <div className={styles.backgroundImage}>
      <NavBar />

      <div className={styles.container}>
        {data.map((item, key) => (
          <div className={styles.card} key={key} id={item.id}>
            <div className={styles.cont}>
              <img src={item.imgUrl} alt="va1" />
              <h4 className={styles.name} id={item.name}>
                <b>{item.name}</b>
              </h4>
              <p className={styles.price}  id={item.price}>Pret: {item.price} Ron</p>
              <p><button className={styles.btn} onClick={()=>{
                setCart((prevState)=>[...prevState, {...item,'quantity':1}])
              }}>Adauga in cos</button></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoseCart;