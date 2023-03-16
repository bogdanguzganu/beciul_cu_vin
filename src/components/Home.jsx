import React from "react";
import NavBar from "./Nav";
import styles from './styles/Home.module.css'
import alb from "./assets/img/vin_alb.jpg";
import rosu from "./assets/img/vin_rosu.jpg";
import rose from "./assets/img/vin_rose.jpg";



const Home = () => {
  return (
    <div className={styles.backgroundImage}>
      <NavBar />
      <h1 className={styles.h1}>Va invitam sa alegeti din rezerva noastra vinul preferat!</h1>
      <div className={styles.cont}>
      <div className={styles.box}>
        <h2 className={styles.h2}>Vinuri Albe</h2>
        <img src={alb} alt="crama" className={styles.img} />
        <p>
        Vinurile alb sunt recomandate cand serviti peste, fructe de mare, sushi, carne de pui, paste cu sos alb, salate,
         deserturi sau branzeturi precum Feta, Brie sau Camembert.
        </p>
        
        </div>
        <div className={styles.box}>
        <h2 className={styles.h2}>Vinuri Roze</h2>
        <img src={rose} alt="crama" className={styles.img} />
        <p>
        Vinurile roze sunt recomandate cand serviti salate si mancaruri usoare, aperitive, branza de capra, deserturi variate,
         preparate cu rata sau curcan, poate merge inclusiv cu preparate cu carne rosie si cu diverse tipuri de branzeturi.
        </p>
        
        </div>
        <div className={styles.box}>
        <h2 className={styles.h2}>Vinuri Rosii</h2>
        <img src={rosu} alt="crama" className={styles.img} />
        <p>
        Vinurile rosii sunt recomandate cand serviti carne rosie (vita, porc, vanat), unele deserturi, in special cele cu ciocolata, 
        tiramisu, paste cu sos rosu, pizza, lasagna, gulas sau branzeturi precum Emmental, Parmezan, Gouda sau Muenster.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Home