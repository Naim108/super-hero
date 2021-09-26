import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Main from '../Main/Main';
import './Container.css'

const Container = () => {
    const [items,setItems]=useState([])
    // cart for using button
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('./App.JSON')
        .then(res=>res.json())
        .then(data=>setItems(data))
    }
    ,[])
    const handleAddToCart=item=>{
        const newCart=[...cart,item]
        setCart(newCart)

     }


    return (
        <div>
            <div className="container">
                <div className="college-details">
                    {
                        items.map(item=><Main item={item}
                            // key
                            key={item.name}
                            handleAddToCart={handleAddToCart}
                        ></Main>)
                    }
                </div>
                <div className="select-item">
                <Cart cart={cart}></Cart>
                </div>

            </div>
            
        </div>
    );
};

export default Container;