import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart =props.cart;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        totalPrice = totalPrice + course.price;
        
    }
    return (
        <div>
            
            <h4>Cart: {cart.length}</h4>
            <p><strong>Total Price: {totalPrice}</strong></p>

        </div>
    );
};

export default Cart;