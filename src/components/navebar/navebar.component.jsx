import React from "react";

import './navebar.styles.scss';

import { Link } from 'react-router-dom';

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from '../../Redux/cartdrop/cart-drop.selectors';

import { toggleMenHidden } from '../../Redux/mendrop/mendrop.actions';

import { toggleLadHidden } from '../../Redux/laddrop/laddrop.actions';

import { toggleKidHidden } from "../../Redux/kids-drop/kids-drop.actions";

import { FaShoppingCart } from 'react-icons/fa';

import { toggleCartHidden } from "../../Redux/cartdrop/cart-drop.action";

import LogIn from "../login/login.component";
import SignUp from "../sign-up/sign-up.component";


const Navebar = ({ toggleMenHidden, toggleLadHidden, toggleKidHidden, toggleCartHidden, itemCount }) => {
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
                    <Link className="option" to='/ladies' onMouseEnter={toggleLadHidden} onMouseLeave={toggleLadHidden} >
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
                    <FaShoppingCart className="cart-logo" onClick={toggleCartHidden} />
                    <label className="count">{itemCount}</label>
                </div>
            </div>
            <div className="color-q">
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleMenHidden: () => dispatch(toggleMenHidden()),
    toggleLadHidden: () => dispatch(toggleLadHidden()),
    toggleKidHidden: () => dispatch(toggleKidHidden()),
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(Navebar);