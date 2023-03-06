import React   from "react";
import styles from './styles/Red.module.css';
import { useState } from "react";
import NavBar from "./Nav";

const  RedCart = () => {
const [active, setActive] =useState(false)
  return (
        
    <div className={styles.backgroundImage}>                  
        <NavBar />
    </div>
       
  )
}

export default RedCart;