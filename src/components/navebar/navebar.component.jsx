import React, { useContext } from "react";

import './navebar.styles.scss';

import { Link } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';

import LogIn from "../login/login.component";

import SignUp from "../sign-up/sign-up.component";

import { DropContext } from "../../Providers/drop/drop.providers";

import { CartContext } from "../../Providers/cart/cart.provider";
import LogOut from "../logout/logout.component";


const Navebar = () => {

    const { toggleMenHidden } = useContext(DropContext);

    const { toggleWomenHidden } = useContext(DropContext);

    const { toggleKidHidden } = useContext(DropContext);

    const { toggleHidden } = useContext(CartContext);

    const { cartItemsCount } = useContext(CartContext);

    return (
        <div className="Nave-main">
            <div className="color">
            </div>
            <div className="Navebar">
                <div className="options">
                    <Link className="option" to="/">
                        Home
                    </Link>
                    <Link className="option" onMouseEnter={toggleMenHidden} onMouseLeave={toggleMenHidden} to='/men'>
                        Men
                    </Link>
                    <Link className="option" to='/ladies' onMouseEnter={toggleWomenHidden} onMouseLeave={toggleWomenHidden} >
                        Ladies
                    </Link>
                    <Link className="option" to='/kids' onMouseEnter={toggleKidHidden} onMouseLeave={toggleKidHidden} >
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
                    <div className="login-component">
                        <LogIn />
                    </div>
                    <div className="signin-component">
                        <SignUp />
                    </div>
                    <div className="logout-component">
                        <LogOut />
                    </div>
                    <FaShoppingCart className="cart-logo" onClick={toggleHidden} />
                    <label className="count">{cartItemsCount}</label>
                </div>
            </div>
            <div className="color-q">
            </div>
        </div>
    );
};

export default Navebar;