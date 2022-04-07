import React from "react";

import './navebar.styles.scss';

import { Link } from 'react-router-dom';
import CartIcon from "../cart-icon/cart-icon.component";

const Navebar = () => {
    return (
        <div className="Nave-main">
            <div className="color">
            </div>
            <div className="Navebar">
                <div className="options">
                    <Link className="option" to='/home'>
                        Home
                    </Link>
                    <Link className="option" to='/men'>
                        Men
                    </Link>
                    <Link className="option" to='/ladies'>
                        Ladies
                    </Link>
                    <Link className="option" to='/kids'>
                        Kids
                    </Link>
                    <Link className="option" to='accessories'>
                        Accessories
                    </Link>
                    <Link className="option" to='/blog'>
                        Blog
                    </Link>
                    <Link className="option" to='/aboutus'>
                        About us
                    </Link>
                    <CartIcon />
                </div>
                
            </div>
            <div className="color-q">
            </div>
        </div>
    );
};

export default Navebar;