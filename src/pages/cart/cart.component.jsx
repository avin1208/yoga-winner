import React from 'react';

import './cart.styles.scss';

const Cart = () => {
    return (
        <div className='main-cart-section'>
            <div className='cart-name'>
                <h1 className='shopcart'>
                    SHOPPING CART
                </h1>
                <hr color='#ebebeb' />
                <p className='total-items'>
                    There are <span className='item-count'>0</span> items in your cart.
                </p>
            </div>
        </div>
    )
}

export default Cart;