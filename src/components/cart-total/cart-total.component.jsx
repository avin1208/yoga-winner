import React from "react";

import './cart-total.styles.scss';

import { connect } from "react-redux";

import { addItem } from "../../Redux/cartdrop/cart-drop.action";

import { removeItem } from "../../Redux/cartdrop/cart-drop.action";

import { clearItemFromCart } from "../../Redux/cartdrop/cart-drop.action";

import { FaArrowUp } from 'react-icons/fa';

import { FaArrowDown } from "react-icons/fa";

import { MdDelete } from 'react-icons/md';

const Carttotal = ({ cartItem, addItem, removeItem, clearCart }) => {
    const { imageUrl, title, quantity, price } = cartItem;
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
            <div className="remove-button" onClick={() => clearCart(cartItem)}>
                <MdDelete />
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearCart: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(Carttotal);