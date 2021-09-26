import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    const totalReducer=(previous,item)=>previous+item.
    participant;
    const total=cart.reduce(totalReducer,0)
    return (
        <div>
            <h5>Number of Selected College: {props.cart.length}</h5>
            <h3>Total Participant :{total} </h3>


            
        </div>
    );
};

export default Cart;