import React from "react";

import { Link } from "react-router-dom";

import { FaRocket } from 'react-icons/fa';
 
import { FaTruck } from 'react-icons/fa';

import { FaGift } from 'react-icons/fa';

import { FaHeadphonesAlt } from 'react-icons/fa';

import './service.styles.scss';

const Service = () => {
    return (
        <div className="container">
            <div className="box">
                <Link className="rocket" to='/'>
                    <FaRocket size="4em" />
                </Link>
                <div className="content">
                    <Link className="text" to='return and exchange'>
                        RETURN AND EXCHANGE
                    </Link>
                    <p>
                        Any return item ust be in its original condition.
                    </p>
                </div>
            </div>

            <div className="box">
                <Link className="truck" to='/'>
                  <FaTruck size="3em" />
                </Link>
                <div className="content">
                    <Link className="text" to='free shipping'>
                        FREE SHIPPING
                    </Link>
                    <p>
                        Buy 4 or More items and get Free shipping
                    </p>
                </div>
            </div>


            <div className="box">
                <Link className="gift" to='/'>
                  <FaGift size="3em"/>
                </Link>
                <div className="content">
                    <Link className="text" to='member discount'>
                        MEMBER DISCOUNT
                    </Link>
                    <p>
                        Special Offer Discount up to 60% off.
                    </p>
                </div>
            </div>


            <div className="box">
                <Link className="music" to='/'>
                <FaHeadphonesAlt size="3em"/>
                </Link>
                <div className="content">
                    <Link className="text" to='24/7 online support'>
                        24/7 ONLINE SUPPORT
                    </Link>
                    <p>
                        We are Provide you 24/7 helpline Number
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Service;