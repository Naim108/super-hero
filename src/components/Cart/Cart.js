import React from 'react';
import './Cart.css'
// cart
const Cart = (props) => {
    const {name,cart}=props;
    const totalReducer=(previous,item)=>previous+item.
    participant;
    const total=cart.reduce(totalReducer,0)
    return (
        <div>
            <h5>Number of Selected College: {props.cart.length}</h5>
            <h1>{name}</h1>
            <h4>Total Participant: {total} </h4>


            
        </div>
    );
};

export default Cart;