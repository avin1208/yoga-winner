import React, { useContext, useState } from "react";

import './mens-grid.styles.scss';

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { FaCheck } from 'react-icons/fa';

import { AiOutlineSearch } from 'react-icons/ai';

import { addItem } from "../../Redux/cartdrop/cart-drop.action";

import { removeItem } from "../../Redux/cartdrop/cart-drop.action";

import { CartContext } from "../../Providers/cart/cart.provider";

const Grid = ({ item, addItem, }) => {
    const { toggleAddCartHidden } = useContext(CartContext);
    const { title, imageUrl, price, regularprice, description } = item;

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };


    return (<div>
        {
            modal ? (
                <div className='modal-dialog'>
                    <div className='modal-con'>
                        <div className='modal-hd'>
                            <button className='close' onClick={toggleModal}>X</button>
                        </div>
                        <div className='modal-body'>
                            <div className='modal-rw'>
                                <div className='modal-leftt'>
                                    <div className="img-p">
                                        {imageUrl}
                                    </div>
                                </div>
                                <div className="modal-rightt">
                                    <h1 className="p-title-i">
                                        {item.title}
                                    </h1>
                                    <span className="p-price-i">
                                        {item.price}
                                    </span>
                                    <p className="p-desc-i">
                                        {item.description}
                                    </p>
                                    <div className="sizee-i">
                                        <h3 className="p-size">
                                            SIZE :
                                        </h3>
                                        <p className="i-size">
                                            S
                                        </p>
                                    </div>
                                    <div className="colorr-i">
                                        <h3 className="p-color">
                                            COLOR :
                                        </h3>
                                        <p className="i-color">
                                            Orenge
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
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
                                        {price}
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
                                    <div className="searchk">
                                        <AiOutlineSearch onClick={toggleModal} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
        }
    </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(Grid);