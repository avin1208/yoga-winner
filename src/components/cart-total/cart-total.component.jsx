import React, { useContext } from "react";

import './cart-total.styles.scss';

import { FaArrowUp } from 'react-icons/fa';

import { FaArrowDown } from "react-icons/fa";

import { MdDelete } from 'react-icons/md';

import { CartContext } from "../../Providers/cart/cart.provider";

const Carttotal = ({ cartItem }) => {
    const { imageUrl, title, quantity, price } = cartItem;

    const {addItem} = useContext(CartContext);

    const {removeItem} = useContext(CartContext);

    const {clearItemFromCart} = useContext(CartContext);
    return (
        <div className="cart-checkout">
            <div className="image-product">
                <img src={imageUrl} alt="item" />
            </div>
            <div className="desc-product">
                <span className="title-prod">
                    {title}
                </span>
            </div>
            <div className="quantity-prod">
                <div className="value">{quantity}</div>
               
                <div className="arrow-fun">
                    <div className="arrow" onClick={() => addItem(cartItem)}><FaArrowUp /></div>
                    
                    <div className="arrow" onClick={() => removeItem(cartItem)}><FaArrowDown /></div>
                </div>
            </div>
            <div className="pr-prod">
                ${price}
            </div>
            <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>
                <MdDelete />
            </div>
        </div>
    );
};



export default Carttotal;