import React from 'react';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../Redux/cartdrop/cart-drop.selectors';

import CartItem from '../cart-item/cart-item.component';

import './cart-popup.styles.scss';

const Cartpopup = ({ cartItems }) => {
    return (
        <div className='modal-dialog'>
            <div className='modal-con'>
                <div className='modal-hd'>
                    <button className='close'>X</button>
                </div>
                <div className='modal-body'>
                 <div className='modal-rw'>
                  <div className='modal-rightt'>
                  </div>
                 </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cartpopup));