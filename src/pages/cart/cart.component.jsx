import React from 'react';

import './cart.styles.scss';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import Carttotal from '../../components/cart-total/cart-total.component';

import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../Redux/cartdrop/cart-drop.selectors';

import { selectCartTotal } from '../../Redux/cartdrop/cart-drop.selectors';

import { selectCartItemsCount } from '../../Redux/cartdrop/cart-drop.selectors';


const Cart = ({ cartItems, total, itemCount }) => {

    return (
        <div className='main-cart-section'>
            <div className='cartitem-s'>
                <div className='cart-name'>
                    <h1 className='shopcart'>
                        SHOPPING CART
                    </h1>
                    <hr color='#ebebeb' />
                </div>
                <div className='cart-itemn'>
                    {
                        cartItems.length ?
                            (cartItems.map(cartItem => (
                                <Carttotal key={cartItem.id} cartItem={cartItem} />
                            )))
                            :
                            (<div className='cart-ui'>
                                There is no cartItems right now.
                            </div>)
                    }
                </div>
            </div>
            <div className='total-cartcomponent'>
                <div className='total-item-count'>
                    <div className='count-item'>
                        {itemCount} <div className='itrm-nt'>Items</div>
                    </div>
                    <div className='shipping'>
                        Shipping
                        <div className='dollar'>
                            $0.00
                        </div>
                    </div>
                    <div className='total-item-cnt'>
                        <div className='totop'>
                            Total:
                            <div className='total-payment'>${total}</div>
                        </div>
                        <div className='toop'>
                            Taxes:
                            <div className='total-payment'>$0.00</div>
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
    itemCount: selectCartItemsCount,
});

export default withRouter(connect(mapStateToProps)(Cart));