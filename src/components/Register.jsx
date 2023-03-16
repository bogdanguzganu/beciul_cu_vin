import React ,{useState} from "react";
import NavBar from "./Nav";
import styles from './styles/Register.module.css';

const Register = (props) => {
const[email, setEmail]= useState('');
const[pass, setPass]= useState('');
const[name, setName]= useState('')

const handleSubmit = (e) => {
  e.preventDefault();
}
    return (
      <div className={styles.backgroundImage}>
      <NavBar />
      <div className={styles.box}>
        <h2 className={styles.h2}>Register</h2>
      <form className={styles.registerform} onSubmit={handleSubmit}>  
        <label className={styles.label} htmlFor="name">nume complet</label>   
        <input className={styles.input} value={name} name="name" placeholder="nume complet" />
        <label className={styles.label} htmlFor="email">email</label>
        <input className={styles.input} value={email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="bogdanguzganu@gmail.com" id="email" name="email"/>
        <label className={styles.label} htmlFor="password">parola</label>
        <input className={styles.input} value={pass} type="password" placeholder="********" id="password" name="password"/>
        <br />
        <button className={styles.btn} type="submit">Conecteaza</button>
        <br />
        <button className={styles.btn} onClick={() => props.onFormSwitch('login')}>Aveti cont? Conecteaza!</button>
      </form>
      
      
      </div> 
      </div> 



  );
};

export default Register