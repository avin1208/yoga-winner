import React from "react";

import './cart-drop.styles.scss';

const Cartdrop = () => {
    return (
        <div className="main-cart">
            <div className="cart-drop">
                <div className="ct-im">
                    <p>There are no more items in your cart</p>
                </div>
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
                <div className="view-cart">
                View Cart
               </div>
            </div>
        </div>
    );
};

export default Cartdrop;