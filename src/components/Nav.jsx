import React   from "react";
import styles from './styles/Navbar.module.css'
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import crama from "./assets/img/crama.jpg";
import logo from "./assets/img/logo.png";





const  NavBar = () => {
const [active,  setActive] =useState(false)
const navigate = useNavigate()

    return (
        
            
       
        
            <div className={styles.container}>
            
            <img id="logo" src={logo} alt='logo' className={styles.logo}/>
            <div className= {styles.menu}>
            <ul>
                
                <li><Link to={'/'}>Beciul cu vin</Link></li>
                <li><Link to={'/white'}>vin alb</Link></li>
                <li><Link to={'/rose'}>vin roze</Link></li>
                <li><Link to={'/red'}>vin rosu</Link></li>
            </ul>
            <ul>
                <li className={active ? styles.search : styles.hide}><input type="search" name="seach" /></li>
                <li><button className='menu-search-icon' type="search" onClick={() => { setActive(!active); } }>&#x1F50E;</button></li>
                <li><a href="#" className='customer-menu-icon'>account</a></li>
                <li><a href="#" className='menu-cart-icon'>cart</a></li>
            </ul>
            </div>

            </div>
            
            
     
        
        
         
       
    )
}

export default NavBar;