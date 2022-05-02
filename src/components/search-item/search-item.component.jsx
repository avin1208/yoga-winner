import React from 'react';

import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import './search-item.styles.scss';

import { Link } from "react-router-dom";

const SerachItem = ({ item: { imageUrl, title, price, description, size, color, quantity } }) => {
    return (
        <div className='modal-body'>
            <div className='modal-bdt'>
                <div className='modal-lefty'>
                    <div className="modal-left-product"
                        style={{ backgroundImage: `url(${imageUrl})` }}>
                    </div>
                </div>
                <div className='modal-righty'>
                    <div className='modal-product-title'>
                        <Link className='pro-tit'>
                            {title}
                        </Link>
                    </div>
                    <div className='modal-price-product'>
                        <span className='pr-pricce'>
                            {price}
                        </span>
                    </div>
                    <div className='modal-desc-product'>
                        <p className="desc">
                            {description}
                        </p>
                    </div>
                    <div className="sizee-i">
                        <h3 className="p-size">
                            SIZE :
                        </h3>
                        <p className="i-size">
                            {size}
                        </p>
                    </div>
                    <div className="colorr-i">
                        <h3 className="p-color">
                            COLOR :
                        </h3>
                        <p className="i-color">
                            {color}
                        </p>
                    </div>
                    <div className='modal-quantity-prod'>
                        <div className='value'>
                            {quantity}
                        </div>
                        <div className='modal-arrow-fun'>
                            <div className='arrow'>
                                <FaArrowUp />
                            </div>
                            <div className='arrow'>
                                <FaArrowDown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SerachItem;