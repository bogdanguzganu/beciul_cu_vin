import React, { useReducer, useContext } from "react";
import NavBar from "./Nav";
import styles from "./styles/Cart.module.css";
import { globalContext } from "./Context/Context";


const Cart = () => {
  const [data] = useContext(globalContext);
  console.log(data)

  function reducer(state, action) {
    switch (action.type) {
      case 'increase':{
        return{
          ...state,
          newCart: state.cart.filter((c)  =>
          c.id === action.id ? (c.quantity++) : c.quantity
          ),newCart2: state.cart.map(e => e.price*e.quantity)

        }
      }
      case 'decrease':{
        return {
        ...state,
        newCart: state.cart.filter((c) =>
          c.id === action.id ? (c.quantity--) : c.quantity
        )
,newCart2: state.cart.map(e => e.price*e.quantity)
}
    }
    default: 
    return state
    }
  }
 const[state, dispatch] = useReducer(reducer, {
  cart: data
 })
  
  
  return (
    <div className={styles.backgroundImage}>
      <NavBar />
      <div>
        
        <div className={styles.container}>
        
          <div>
            {data.map((e, i) => {
              return (
                <div key={i}>
                <ul  className={styles.cart}>
                  <li>
                    <img src={e.imgUrl} className={styles.img} alt="img" />
                  </li>
                  <li className={styles.name}>{e.name}</li>
                  <li className={styles.price}>{e.price + " Ron"}</li>
                  
                  <li className={styles.function}>
                    <button className={styles.add} onClick={() => {
                dispatch({
                  type: 'increase',
                  ...e,
                })
              }}>+ </button>
                    <div className={styles.count}>{e.quantity}</div>
                    <button className={styles.remove} onClick={() => {
                dispatch({
                  type: 'decrease',
                  id: e.id,
                  image: e.image,
                  name: e.name,
                  price: e.price,
                  quantity: e.quantity
                })
              }}>- </button>
                  </li>
                </ul>
                </div>
              );
            })}
                            <div className={styles.result}> {state.newCart2?.reduce((a,b) => a+b, 0)}</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
