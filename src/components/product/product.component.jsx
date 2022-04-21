import React from "react";

import './product.styles.scss';

import { Link } from "react-router-dom";


import { addItem } from "../../Redux/cartdrop/cart-drop.action";

import { connect } from "react-redux";

import { FaShoppingCart } from 'react-icons/fa';


const Product = ({ item, addItem}) => {
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
                    <div className="icon-cart" onClick={() => addItem(item)} inverted >
                    <FaShoppingCart />
                    </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  })
  

export default connect(null, mapDispatchToProps)(Product);