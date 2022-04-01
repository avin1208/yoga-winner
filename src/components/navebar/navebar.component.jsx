import React from "react";

import './navebar.styles.scss';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/shopping-bag.svg';

const Navebar = () => {
    return (
        <div className="Nave-main">
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
                </div>
            </div>

            <Link className="logo-container" to='/'>
                <Logo className="logo" />
            </Link>
        </div>
    );
};

export default Navebar;