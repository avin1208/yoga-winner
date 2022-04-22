import React from "react";

import './cart-box.styles.scss';

import { FiCheckSquare } from "react-icons/fi";

import CartItem from "../cart-item/cart-item.component";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../Redux/cartdrop/cart-drop.selectors";

import { selectCartItemsCount} from "../../Redux/cartdrop/cart-drop.selectors";

import { selectCartTotal } from "../../Redux/cartdrop/cart-drop.selectors";


const Cartbox = ({ cartItems, total, itemCount, setOpenModal }) => {
    return (
        <div className="modal-content">
            <div className="modal-header">
                <div className="title-buttn">
                    <button onClick={() => {
                        setOpenModal(false);
                    }}>
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
                             <div className='itrm-n'>{itemCount}</div>items in your Cart.
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
                                <div className="dd">${total}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    itemCount: selectCartItemsCount
});

export default withRouter(connect(mapStateToProps)(Cartbox));