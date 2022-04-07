import React from "react";

import './product.styles.scss';

import { Link } from "react-router-dom";

import CartIcon from "../cart-icon/cart-icon.component";


const Product = ({ item }) => {
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
                    <CartIcon />
                    
                </div>
            </div>
        </div>
    );
};

export default Product;