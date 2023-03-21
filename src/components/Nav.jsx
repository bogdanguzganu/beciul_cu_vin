import React   from "react";
import styles from './styles/Navbar.module.css'
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "./assets/img/logoa.png";
import CartIcon from "./assets/img/cart.png"
import LoginIcon from "./assets/img/login.png"
import SearchIcon from "./assets/img/search.png"






const NavBar = () => {
  const [active, setActive] = useState(false);
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
            <Link to={"/white"}>alb</Link>
          </li>
          <li>
            <Link to={"/rose"}>roze</Link>
          </li>
          <li>
            <Link to={"/red"}>rosu</Link>
          </li>
        </ul>
        <ul>
          <li className={active ? styles.search : styles.hide}>
            <input type="search" name="seach" />
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
            <Link to={"/cart"}>
              <img src={CartIcon} className={styles.carticon}/>
              </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;