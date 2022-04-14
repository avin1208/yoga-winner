import React from "react";

import './mens-grid.styles.scss';

import { Link } from "react-router-dom";

import { FaCheck } from 'react-icons/fa';

import { AiOutlineSearch } from 'react-icons/ai';

const Grid = () => {
    return (
        <div className="grid-box">
            <div className="box-product">
                <div className="item-box">
                    <div className="left-product">
                        <img src="https://demo.fieldthemes.com/ps_winner/home2/136-home_default/faded-short-sleeves-tshirt.jpg" alt="" />
                        <div className="vl"></div>
                    </div>
                    <div className="right-text">
                        <div className="product-title">
                            <Link className="tt" to='/'>
                                Quisque volutpat mattis
                            </Link>
                        </div>
                        <div className="prod-price">
                            <span className="pr-price">
                                $16.51
                            </span>
                        </div>
                        <div className="prod-desc">
                            <p className="des">
                                Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!
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
                            <div className="to-cart">
                                Add to cart
                            </div>
                            <div className="searchk">
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-product">
                <div className="item-box">
                    <div className="left-product">
                        <img src="https://demo.fieldthemes.com/ps_winner/home2/133-home_default/blouse.jpg"alt="" />
                        <div className="vl"></div>
                    </div>
                    <div className="right-text">
                        <div className="product-title">
                            <Link className="tt" to='/'>
                            Viverra non, semper
                            </Link>
                        </div>
                        <div className="prod-price">
                            <span className="pr-price">
                                $26.99
                            </span>
                        </div>
                        <div className="prod-desc">
                            <p className="des">
                            Short-sleeved blouse with feminine draped sleeve detail.
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
                            <div className="to-cart">
                                Add to cart
                            </div>
                            <div className="searchk">
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-product">
                <div className="item-box">
                    <div className="left-product">
                        <img src="https://demo.fieldthemes.com/ps_winner/home2/129-home_default/printed-dress.jpg"alt="" />
                        <div className="vl"></div>
                    </div>
                    <div className="right-text">
                        <div className="product-title">
                            <Link className="tt" to='/'>
                            Cras ornare tristique elit
                            </Link>
                        </div>
                        <div className="prod-price">
                            <span className="pr-price">
                                $25.99
                            </span>
                        </div>
                        <div className="prod-desc">
                            <p className="des">
                            100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom.
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
                            <div className="to-cart">
                                Add to cart
                            </div>
                            <div className="searchk">
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-product">
                <div className="item-box">
                    <div className="left-product">
                        <img src="https://demo.fieldthemes.com/ps_winner/home2/125-home_default/printed-dress.jpg"alt="" />
                        <div className="vl"></div>
                    </div>
                    <div className="right-text">
                        <div className="product-title">
                            <Link className="tt" to='/'>
                            Suspendisse urna nibh
                            </Link>
                        </div>
                        <div className="prod-price">
                            <span className="pr-price">
                                $50.99
                            </span>
                        </div>
                        <div className="prod-desc">
                            <p className="des">
                            Printed evening dress with straight sleeves with black thin waist belt and ruffled linings.
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
                            <div className="to-cart">
                                Add to cart
                            </div>
                            <div className="searchk">
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-product">
                <div className="item-box">
                    <div className="left-product">
                        <img src="https://demo.fieldthemes.com/ps_winner/home2/121-home_default/printed-summer-dress.jpg"alt="" />
                        <div className="vl"></div>
                    </div>
                    <div className="right-text">
                        <div className="product-title">
                            <Link className="tt" to='/'>
                            Nullam malesuada
                            </Link>
                        </div>
                        <div className="prod-price">
                            <span className="pr-price">
                                $28.99
                            </span>
                            <span className="reg-price">
                                $30.99
                            </span>
                            <span className="di-price">
                                %5
                            </span>
                        </div>
                        <div className="prod-desc">
                            <p className="des">
                            Long printed dress with thin adjustable straps. V-neckline and wiring under the bust with ruffles at the bottom of the dress.
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
                            <div className="to-cart">
                                Add to cart
                            </div>
                            <div className="searchk">
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-product">
                <div className="item-box">
                    <div className="left-product">
                        <img src="https://demo.fieldthemes.com/ps_winner/home2/117-home_default/printed-summer-dress.jpg"alt="" />
                        <div className="vl"></div>
                    </div>
                    <div className="right-text">
                        <div className="product-title">
                            <Link className="tt" to='/'>
                            Quisque volutpat mattis
                            </Link>
                        </div>
                        <div className="prod-price">
                            <span className="pr-price">
                                $30.50
                            </span>
                        </div>
                        <div className="prod-desc">
                            <p className="des">
                            Sleeveless knee-length chiffon dress. V-neckline with elastic under the bust lining.
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
                            <div className="to-cart">
                                Add to cart
                            </div>
                            <div className="searchk">
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-product">
                <div className="item-box">
                    <div className="left-product">
                        <img src="https://demo.fieldthemes.com/ps_winner/home2/112-home_default/printed-chiffon-dress.jpg"alt="" />
                        <div className="vl"></div>
                    </div>
                    <div className="right-text">
                        <div className="product-title">
                            <Link className="tt" to='/'>
                            Viverra non, semper
                            </Link>
                        </div>
                        <div className="prod-price">
                            <span className="pr-price">
                                $14.35
                            </span>
                            <span className="reg-price">
                                $20.50
                            </span>
                            <span className="di-price">
                                %30
                            </span>
                        </div>
                        <div className="prod-desc">
                            <p className="des">
                            Printed chiffon knee length dress with tank straps. Deep v-neckline.
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
                            <div className="to-cart">
                                Add to cart
                            </div>
                            <div className="searchk">
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-product">
                <div className="item-box">
                    <div className="left-product">
                        <img src="https://demo.fieldthemes.com/ps_winner/home2/108-home_default/printed-chiffon-dress.jpg"alt="" />
                        <div className="vl"></div>
                    </div>
                    <div className="right-text">
                        <div className="product-title">
                            <Link className="tt" to='/'>
                            Cras ornare tristique elit
                            </Link>
                        </div>
                        <div className="prod-price">
                            <span className="pr-price">
                                $14.35
                            </span>
                            <span className="reg-price">
                                $20.99
                            </span>
                            <span className="di-price">
                                %30
                            </span>
                        </div>
                        <div className="prod-desc">
                            <p className="des">
                            Short-sleeved blouse with feminine draped sleeve detail.
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
                            <div className="to-cart">
                                Add to cart
                            </div>
                            <div className="searchk">
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-product">
                <div className="item-box">
                    <div className="left-product">
                        <img src="https://demo.fieldthemes.com/ps_winner/home2/104-home_default/printed-chiffon-dress.jpg"alt="" />
                        <div className="vl"></div>
                    </div>
                    <div className="right-text">
                        <div className="product-title">
                            <Link className="tt" to='/'>
                            Suspendisse urna nibh
                            </Link>
                        </div>
                        <div className="prod-price">
                            <span className="pr-price">
                                $14.35
                            </span>
                            <span className="reg-price">
                                $20.99
                            </span>
                            <span className="di-price">
                                %30
                            </span>
                        </div>
                        <div className="prod-desc">
                            <p className="des">
                            Printed chiffon knee length dress with tank straps. Deep v-neckline.
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
                            <div className="to-cart">
                                Add to cart
                            </div>
                            <div className="searchk">
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grid;