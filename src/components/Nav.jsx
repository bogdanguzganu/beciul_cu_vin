import React, { useEffect, useContext }   from "react";
import styles from './styles/Navbar.module.css'
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "./assets/img/logoa.png";
import CartIcon from "./assets/img/cart.png"
import LoginIcon from "./assets/img/login.png"
import SearchIcon from "./assets/img/search.png"
import { globalContext } from "./Context/Context";


const NavBar = () => {
  const [active, setActive] = useState(false);
  const [cart, setCart] = useContext(globalContext);
  const [input, setInput] = useState("");
  useEffect(() =>{

  },[input])
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img id="logo" src={logo} alt="logo" className={styles.logo} />
      <div className={styles.menu}>
        <ul>
          <li>
            <Link to={"/"}>Beciul cu vin</Link>
          </li>
          <li>
            <Link to={"/white"}></Link>
          </li>
          <li>
            <Link to={"/rose"}></Link>
          </li>
          <li>
            <Link to={"/red"}></Link>
          </li>
        </ul>
        <ul>
          <li className={active ? styles.search : styles.hide}>
            <input type="search" name="seach" value={input} onChange={(e)=>{
              setInput(e.target.value)
            }}/>
          </li>
          <li>
            <button
              className="menu-search-icon"
              type="search"
              onClick={() => {
                setActive(!active);
              }}
            >
             <img src={SearchIcon} className={styles.searchicon}/>
            </button>
          </li>
      
          <li>
            <Link to={"/account"}><img src={LoginIcon} className={styles.loginicon}/></Link>
          </li>
          <li>
            
          <Link to={"/cart"}><img src={CartIcon} className={styles.carticon} onClick={() => navigate('/cart')}/></Link>
              
          </li>
          <li className={styles.numb}>
            {cart.length > 0 ? cart.length:""}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;