import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const {doctor} = props;
    let total = 0;
    for(const element of doctor){
        total = total + element.visit;
    }
    return (
        <div className="cart m-4 p-3">
            <h2 className="total-doctor">Added Doctor: {props.doctor.length}</h2>
            <h3 className="price">Total Cost: ${total}</h3>
            <h5>Selected Doctor Name</h5>
            <ul>
                {
                 doctor.map(element=> <li key={element.id}>{element.name}</li>)
                }
            </ul>     
        </div>
    );
};

export default Cart;