import React from 'react';
import './Main.css'


const Main = (props) => {
    const{img,name,position,category,participant,division}=props.item;
    
    return (
        <div className="details">
          <img src={img} alt="" />
          <h3>Name: {name}</h3>
            <p>Position: {position}</p>
            <p>Catagory: {category}</p>
            <p>Participant: {participant}</p>
            <p>Devision: {division}</p>
            <button onClick={()=>props.handleAddToCart(props.item)}
             className="select-btn"> <i className="fas fa-check-circle"></i> Select college</button>
        </div>
    );
};

export default Main;