import React, { useContext } from "react";

import { connect } from "react-redux";

import { FaCheck } from "react-icons/fa";

import { withRouter } from "react-router-dom";

import { createStructuredSelector } from "reselect";

import { CartContext } from "../../Providers/cart/cart.provider";

import { selectCartItems } from "../../Redux/cartdrop/cart-drop.selectors";

import SerachItem from "../search-item/search-item.component";

import './serach-box.styles.scss';

const Search = ({ cartItems }) => {

    const { toggleSearchCartHidden } = useContext(CartContext);
    return (
        <div className="modal-dialog">
            <div className="modal-cont">
                <div className="modal-hd">
                    <button className='close' onClick={toggleSearchCartHidden}>
                        X
                    </button>
                </div>
                <div className="modal-main-body">
                    <div className="modal-pro-map">
                        {
                            cartItems.map(cartItem => (
                                <SerachItem key={cartItem.id} item={cartItem} />
                            ))
                        }
                    </div>
                    <div className="list-button">
                        <div className="to-cart">
                            Add to cart
                        </div>
                        <div className="stock">
                            <FaCheck className="mark">
                            </FaCheck>
                            <p className="ma">
                                In Stock
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Search));