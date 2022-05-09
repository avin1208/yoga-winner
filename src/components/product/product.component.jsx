import React, { useContext } from "react";

import './product.styles.scss';

import { Link } from "react-router-dom"

import { FaShoppingCart } from 'react-icons/fa';

import { CartContext } from "../../Providers/cart/cart.provider";

import { ModalContext } from "../../Providers/modal/modal.providers";


const Product = ({ item }) => {
    const { toggleAddCartHidden } = useContext(ModalContext);

    const {addItem} = useContext(CartContext);

    const { title, imageUrl, price, regularPrice } = item;
    return (
        <div className="listofproduct">
            <div className="background-image">
                <div className="titleblock" style={{ backgroundImage: `url(${imageUrl})` }}>
                    <Link className="name" to='/'>{title}</Link>
                </div>
            </div>
            <div className="price">
                <div className="p-p">
                    {price}
                    <div className="regular-price">
                        {regularPrice}
                    </div>
                </div>
                <div className="icon-cart" onClick={() => {
                    addItem(item)
                    toggleAddCartHidden();
                }} inverted="true" >
                    <FaShoppingCart />
                </div>
            </div>
        </div>
    );
};



export default Product;