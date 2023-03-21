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
  function reducer(state, action) {
    switch (action.type) {
      case 'increment': {
        return {
          ...state,
          newCart: state.cart.filter((c) =>
            c.id === action.id ? (c.quantity++) : c.quantity
          )
        }
      }
      case 'decrement': {
        return {
          ...state,
          newCart: state.cart.filter((c) =>
            c.id === action.id ? (c.quantity--) : c.quantity
          )
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
  // console.log(state)
  console.log("state + ", state)
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
                  id: e.id,
                  image: e.image,
                  name: e.name,
                  price: e.price,
                  quantity: e.quantity
                })
              }}>- {e.quantity}
              </button>
              <span>TotalPrice {e.price *e.quantity}</span>
            </div>
          )
        })}
      </ul>
    </div>
  );
};
export default Cart;