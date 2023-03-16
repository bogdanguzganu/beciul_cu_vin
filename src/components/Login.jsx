import React, { useState } from "react";
import NavBar from "./Nav";
import styles from "./styles/Login.module.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
  };
  return (
    <div className={styles.backgroundImage}>
      <NavBar />
    <div className={styles.box}>      
      <h2 className={styles.h2}>Login</h2>
      <form className={styles.loginform} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="email">email</label>
        <input className={styles.input}
          value={email}
          type="email"
          placeholder="bogdanguzganu@gmail.com"
          id="email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}/>
        <label className={styles.label} htmlFor="password">parola</label>
        <input className={styles.input}
          value={pass}
          type="password"
          placeholder="********"
          id="password"
          name="password"/>
        <br />
        <button className={styles.btn}>Log In</button>
        <br />
        <button
        className={styles.btn}
        onClick={() => props.onFormSwitch('register')}>
        Nu ai cont? Inregistreaza!
      </button>
      </form>      
      </div>
    </div>
  );
};

export default Login;
