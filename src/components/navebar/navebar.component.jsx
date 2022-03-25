import React from "react";

import './navebar.styles.scss';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/shopping-bag.svg';

const Navebar = () => {
    return (
        <div className="Navebar">
            <Link className="logo-container" to='/'>
                <Logo className="logo" />
            </Link>
            <div className="options">
                <div className="option">Home</div>
                <div className="option">Men</div>
                <div className="option">Ladies</div>
                <div className="option">Kids</div>
                <div className="option">Accessories</div>
                <div className="option">Blog</div>
                <div className="option">About us</div>
            </div>
        </div>
    );
};

export default Navebar;