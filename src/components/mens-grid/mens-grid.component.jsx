import React, { useContext, useState } from "react";

import './mens-grid.styles.scss';

// import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { FaCheck, FaFacebook, FaGoogle, FaPinterest, FaTwitter } from 'react-icons/fa';

import { AiOutlineSearch } from 'react-icons/ai';

// import { addItem } from "../../Redux/cartdrop/cart-drop.action";

// import { removeItem } from "../../Redux/cartdrop/cart-drop.action";

import { ModalContext } from "../../Providers/modal/modal.providers";

import { FaArrowUp } from "react-icons/fa";

import { FaArrowDown } from "react-icons/fa";

// import { createStructuredSelector } from "reselect";

// import { selectCartItemsCount } from "../../Redux/cartdrop/cart-drop.selectors";

import { CartContext } from "../../Providers/cart/cart.provider";

const Grid = ({item}) => {

    const { toggleAddCartHidden } = useContext(ModalContext);

    const { addItem, removeItem, cartItemsCount} = useContext(CartContext);

    const { title, imageUrl, price, regularprice, description, size, color } = item;

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (<div>
        {
            modal && (
                <div className='modal-dialog'>
                    <div className='modal-con'>
                        <div className='modal-hd'>
                            <button className='close' onClick={toggleModal}>X</button>
                        </div>
                        <div className='modal-body'>
                            <div className='modal-rw'>
                                <div className='modal-leftt'>
                                    <div className="img-p" >
                                        <img src={`${item.imageUrl}`} alt='icon' />
                                    </div>
                                </div>
                                <div className="modal-rightt">
                                    <h1 className="p-title-i">
                                        {item.title}
                                    </h1>
                                    <span className="p-price-i">
                                        ${item.price}
                                    </span>
                                    <p className="p-desc-i">
                                        {item.description}
                                    </p>
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
                                    <div className="quantity-prod">
                                        <div className="value">{cartItemsCount}</div>
                                        <div className="arrow-fun">
                                            <div className="arrow" onClick={() => addItem(item)} ><FaArrowUp /></div>
                                            <div className="arrow" onClick={() => removeItem(item)}><FaArrowDown /></div>
                                        </div>
                                    </div>
                                    <div className="list-button">
                                        <div className="to-cart" 
                                        onClick={() => {
                                            addItem(item);
                                            toggleAddCartHidden();
                                            toggleModal();
                                        }} inverted>
                                            Add to cart
                                        </div>
                                        <div className="stock">
                                            <FaCheck className="mark">
                                            </FaCheck>
                                            <p className="ma">
                                                In Stock
                                            </p>
                                        </div>
                                    </div>
                                    <div className="social-content">
                                        <div className="facebook-modal">
                                            <FaFacebook size="1em" /> Share
                                        </div>
                                        <div className="tweet-modal">
                                            <FaTwitter size="1em" /> Tweet
                                        </div>
                                        <div className="google-modal">
                                            <FaGoogle size="1em" /> Google
                                        </div>
                                        <div className="pint-modal">
                                            <FaPinterest size="1em" /> Pinterest
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        <div className="grid-box">
            <div className="box-product">
                <div className="item-box">
                    <div className="left-product"
                        style={{ backgroundImage: `url(${imageUrl})` }}>
                        <div className="condition-box">
                            <span className="new-product">
                                New
                            </span>
                            <span className="sale-product">
                                Sale
                            </span>
                        </div>
                        <div className="vl"></div>
                    </div>
                    <div className="right-text">
                        <div className="product-title">
                            <Link className="tt" to='/'>
                                {title}
                            </Link>
                        </div>
                        <div className="prod-price">
                            <span className="pr-price">
                                ${price}
                            </span>
                            <span className="reg-price">
                                {regularprice}
                            </span>
                        </div>
                        <div className="prod-desc">
                            <p className="des">
                                {description}
                            </p>
                        </div>
                        <div className="stock">
                            <FaCheck className="mark">
                            </FaCheck>
                            <p className="ma">
                                In Stock
                            </p>
                        </div>
                        <div className="list-button">
                            <div className="to-cart"
                                onClick={() => {
                                    addItem(item);
                                    toggleAddCartHidden();
                                }} inverted>
                                Add to cart
                            </div>
                            <div className="searchk" onClick={toggleModal} >
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
};

// const mapDispatchToProps = dispatch => ({
//     addItem: item => dispatch(addItem(item)),
//     removeItem: item => dispatch(removeItem(item))
// })

// const mapStateToProps = createStructuredSelector({
//     itemCount: selectCartItemsCount
// })

export default Grid;