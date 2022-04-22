import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, title, quantity } }) => (
    <div className='cart-item'>
       <img src={imageUrl} alt='item' />
       <div className='item-details'>
           <div className='name'>{title}</div>
           <span className='price'>
               {quantity} x ${price}
            </span>
       </div>
    </div>
)

export default CartItem;