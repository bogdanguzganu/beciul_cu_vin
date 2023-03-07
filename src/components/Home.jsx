import React from "react";
import NavBar from "./Nav";
import styles from './styles/Home.module.css'



const Home = () => {
    return(
    <div className={styles.backgroundImage}>  
        <NavBar />
    </div>
    )
}

export default Home