import React from "react";

import './mens-grid.styles.scss';

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { FaCheck } from 'react-icons/fa';

import { AiOutlineSearch } from 'react-icons/ai';

import { addItem} from "../../Redux/cartdrop/cart-drop.action";

import { removeItem } from "../../Redux/cartdrop/cart-drop.action";

const Grid = ({ item, addItem,}) => {
    const { title, imageUrl, price, regularprice, description } = item;
    return (
        <div className="grid-box">
            <div className="box-product">
                <div className="item-box">
                    <div className="left-product"
                        style={{ backgroundImage: `url(${imageUrl})` }}>
                        <div className="vl"></div>
                    </div>
                    <div className="right-text">
                        <div className="product-title">
                            <Link className="tt" to='/'>
                                {title}
                            </Link>
                        </div>
                        <div className="prod-price">
                            <span className="pr-price">
                                {price}
                            </span>
                            <span className="reg-price">
                                {regularprice}
                            </span>
                        </div>
                        <div className="prod-desc">
                            <p className="des">
                                {description}
                            </p>
                        </div>
                        <div className="stock">
                            <FaCheck className="mark">
                            </FaCheck>
                            <p className="ma">
                                In Stock
                            </p>
                        </div>
                        <div className="list-button">
                            <div className="to-cart" onClick={() => {
                                addItem(item);
                               }} inverted>
                                Add to cart
                            </div>
                            <div className="searchk">
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(Grid);