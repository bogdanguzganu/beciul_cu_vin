import React, {useState} from "react";
import styles from './styles/Account.module.css'
import Login from './Login'
import Register from './Register'


function Cont() {
const [currentForm, setCurrentForm] = useState ('login');

const toggleForm = (formName) =>{
    setCurrentForm(formName)
}

    return (
        <div className={styles.backgroundImage}>            
            {            
                currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
            }
        </div>
    )}

    export default Cont