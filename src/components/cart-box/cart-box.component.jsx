import React, { useContext } from "react";

import './cart-box.styles.scss';

import { FiCheckSquare } from "react-icons/fi";

import CartItem from "../cart-item/cart-item.component";

// import { connect } from "react-redux";

 import { withRouter } from "react-router-dom";

// import { createStructuredSelector } from "reselect";

// import { selectCartItems } from "../../Redux/cartdrop/cart-drop.selectors";

// import { selectCartItemsCount } from "../../Redux/cartdrop/cart-drop.selectors";

// import { selectCartTotal } from "../../Redux/cartdrop/cart-drop.selectors";

import { ModalContext } from "../../Providers/modal/modal.providers";

import { CartContext } from "../../Providers/cart/cart.provider";


const Cartbox = ({ history }) => {

    const { toggleAddCartHidden } = useContext(ModalContext);

    const {cartItems, cartItemsCount, cartTotal} = useContext(CartContext);
    return (
        <div className="hjkl">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="title-buttn">
                        <button onClick={toggleAddCartHidden}>
                            X
                        </button>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="modal-row">
                        <div className="modal-left">
                            <div className="modal-title">
                                <h4 className="product-sus">
                                    <FiCheckSquare />
                                    Product Successfully Added to Your Shopping Cart.
                                </h4>
                            </div>
                            <div className="modal-drop">
                                {
                                    cartItems.map(cartItem => (
                                        <CartItem key={cartItem.id} item={cartItem} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="modal-right">
                            <div className="modal-rtitle">
                                There are
                                <div className='itrm-n'>{cartItemsCount}</div>items in your Cart.
                            </div>
                            <hr color="#ebebeb" />
                            <div className="modal-productss">
                                <div className="modal-price">
                                    Price:
                                    <div className="dd">$0.00</div>
                                </div>
                                <div className="modal-shipping">
                                    Total Shipping :
                                    <div className="dd">$0.00</div>
                                </div>
                                <div className="modal-shipping">
                                    Taxes:
                                    <div className="dd">$0.00</div>
                                </div>
                                <div className="modal-shipping">
                                    Total:
                                    <div className="dd">${cartTotal}</div>
                                </div>
                            </div>
                            <div className="view-cart" onClick={() => {
                                history.push('/cart');
                                toggleAddCartHidden();
                            }}>
                                View Cart
                            </div>
                            <div className="continue-shopping" onClick={toggleAddCartHidden}>
                                Continue Shopping
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Cartbox);