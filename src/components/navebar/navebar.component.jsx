import React from "react";

import './navebar.styles.scss';

import { Link } from 'react-router-dom';

import { connect } from "react-redux";

import { toggleMenHidden } from '../../Redux/mendrop/mendrop.actions';

import { toggleLadHidden } from'../../Redux/laddrop/laddrop.actions';

import CartIcon from "../cart-icon/cart-icon.component";

const Navebar = ({ toggleMenHidden, toggleLadHidden, hidden, dispatch}) => {

    return (
        <div className="Nave-main">
            <div className="color">
            </div>
            <div className="Navebar">
                <div className="options">
                    <Link className="option" to='/home'>
                        Home
                    </Link>
                    <div className="option" onClick={toggleMenHidden}>
                        Men
                    </div>
                    <Link className="option" to='/ladies' onClick={toggleLadHidden} >
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

const mapDispatchToProps = dispatch => ({
    toggleMenHidden: () => dispatch(toggleMenHidden()),
    toggleLadHidden: () => dispatch(toggleLadHidden())
});

const mapStateToProps = ({ men: { hidden } }) => ({
    hidden
})

export default connect(mapStateToProps ,mapDispatchToProps)(Navebar);