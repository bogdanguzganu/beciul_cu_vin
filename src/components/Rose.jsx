import React   from "react";
import styles from './styles/Rose.module.css';
import { useState } from "react";
import NavBar from "./Nav";

const  RoseCart = () => {
    const [active, setActive] =useState(false)
    return (
        
      <div className={styles.backgroundImage}>                   
        <NavBar />
      </div>
       
    )
}

export default RoseCart;