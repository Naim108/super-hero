import React from 'react';
import './Main.css'


const Main = (props) => {
    const{img,name,position,category,partcipent,division}=props.item;
    
    return (
        <div>
          <div><h3>Name: {name}</h3></div>
            <div><p>Position: {position}</p></div>
            <div><p>Catagory: {category}</p></div>
            <div><p>Partcipent: {partcipent}</p></div>
            <div><p>Devision: {division}</p></div>
            <button onClick={()=>props.handleAddToCart(props.item)}
             className="select-btn"> <i class="fas fa-check-circle"></i> Select college</button>
        </div>
    );
};

export default Main;