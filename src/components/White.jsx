import React   from "react";
import styles from './styles/White.module.css';
import { useState, useEffect } from "react";
import NavBar from "./Nav";
import {Col, Row} from "react-bootstrap";


const  WhiteCart = () => {
const [active, setActive] =useState(false)
const [data, setData] =useState([])

async function getData() {
const result= await fetch('./items.json');
const res= await result.json()
setData(res)
console.log(data)

}
useEffect(() => {
  getData()
},[])


    return (
        
      <div className={styles.backgroundImage}>   
                      
        <NavBar/>

        <div className="grid-container g-3" md={2} xs={1} lg={3}>
            {data.map((item,key) => (
          <div key={key}>{item.id}</div>
          ))}
        </div>

      </div>
      
    
         
       
    )
}

export default WhiteCart;