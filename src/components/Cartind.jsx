import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import "./Styles/Order.module.css";
import { useContext, useReducer, useState } from "react";
import { CartContext } from "./Context/Context";
import { faEquals } from "@fortawesome/free-solid-svg-icons";
// import { useLocation } from "react-router-dom";
const Cart = () => {
  // const total = useRef(1);
  // const location = useLocation();
  const { orders } = useContext(CartContext);
  const [order] = orders;
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      order.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [order]);
  function reducer(state, action) {
    switch (action.type) {
      case 'increment': {
        return {
          ...state,
          newCart: state.cart.filter((c) =>
            c.id === action.id ? (c.quantity++) : c.quantity
          ),
          newCart2: state.cart.map(e => e.price*e.quantity)
        }
      }
      case 'decrement': {
        return {
          ...state,
          newCart: state.cart.filter((c) =>
            c.id === action.id ? (c.quantity--) : c.quantity
          ),
          newCart2: state.cart.map(e => e.price*e.quantity)
        }
      }
      default:
        return state
    }
    throw Error('Unknown action.');
  }
  const [state, dispatch] = useReducer(reducer, {
    cart: order
  });
  return (
    <div>
      <Navbar />
      <h3>Cart</h3>
      <ul>
        {order.map((e, u) => {
          return (
            <div key={u}>
              <span>{e.name}</span>
              <button onClick={() => {
                dispatch({
                  type: 'increment',
                  ...e,
                })
              }}>+ {e.quantity}
              </button>
              <span>{e.price}</span>
              <button onClick={() => {
                dispatch({
                  type: 'decrement',
                  ...e,
                })
              }}>- {e.quantity}
              </button>
            </div>
          )
        })}
        <span>TotalPrice {state.newCart2?.reduce((a,b) => a+b, 0)}</span>
      </ul>
    </div>
  );
};
export default Cart; (edited) 