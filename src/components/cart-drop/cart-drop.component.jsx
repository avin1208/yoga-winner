import React, {useContext} from "react";

import { withRouter } from "react-router-dom";

import './cart-drop.styles.scss';

import CartItem from "../cart-item/cart-item.component";

import { CartContext }from '../../Providers/cart/cart.provider';

const Cartdrop = ({ history }) => {

    const {cartItems} = useContext(CartContext);

    const {toggleHidden} = useContext(CartContext);
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
                    toggleHidden();
                  }}>
                View Cart
               </div>
            </div>
        </div>
    );
};


export default withRouter(Cartdrop);