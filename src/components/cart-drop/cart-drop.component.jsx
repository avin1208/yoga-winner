import React from "react";

import { connect } from 'react-redux';

import { withRouter } from "react-router-dom";

import './cart-drop.styles.scss';

import CartItem from "../cart-item/cart-item.component";

import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../Redux/cartdrop/cart-drop.selectors";

import { toggleCartHidden } from "../../Redux/cartdrop/cart-drop.action";

const Cartdrop = ({ cartItems, dispatch, history }) => {
    return (
        <div className="main-cart">
            <div className="cart-drop">
            {cartItems.length ? ( 
                cartItems.map(cartItem => (
                  <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <span className='empty-message'>There is no item Here.</span>
            )}
                <hr color="#ebebeb"/>
                <div className="ct-total">
                    <span>Total (tax excl.)
                    </span>
                    <span className="wer">$0.00</span>
                </div>
                <span className="taxces">
                    Taxes
                </span>
                <hr color="#ebebeb" />
                <div className="view-cart" onClick={() => {
                    history.push('/cart');
                    dispatch(toggleCartHidden());
                  }}>
                View Cart
               </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
  });

export default withRouter(connect(mapStateToProps)(Cartdrop));