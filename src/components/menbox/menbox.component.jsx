import React, { useState } from "react";

import { Link } from "react-router-dom";

import './menbox.styles.scss';

import { FaPlusSquare } from 'react-icons/fa';

import { FaMinusSquare } from 'react-icons/fa';

import Menaccordian from "../men-accordian/men-accordian.component";

import Fashionaccordian from "../fashion-accordian/fashion-accordian.component";

const Menbov = () => {
    const [show, setShow] = useState(false);
    const [showt, setShowt] = useState(false);
    const [showd, setShowd] = useState(false);
    const [shows, setShows] = useState(false);
    const [showc, setShowc] = useState(false);
    
    return (
        <div className="menbov">
            <div className="menbov-title">
                <Link className="home-bov">
                    Home
                </Link>
                <Link className="women-bov">
                    Women<div className="jkl" onClick={() => setShow(!show)}>
                        {show ? <FaMinusSquare /> : <FaPlusSquare />}
                    </div>
                    <hr color="#ebebeb" />
                    {show &&
                        <div className="women-acc">
                            <Link className="toppp">
                                Top <div className="jghh"
                                    onClick={() => setShowt(!showt)}>
                                    {showt ? <FaMinusSquare /> : <FaPlusSquare />}
                                </div>
                                <hr color="#ebebeb" />
                                {
                                    showt &&
                                    <div className="topcomp">
                                        <Link className="uppp">
                                            - Cocktail
                                            <hr color="#ebebeb" />
                                        </Link>
                                        <Link className="uppp">
                                            - Day
                                            <hr color="#ebebeb" />
                                        </Link>
                                        <Link className="uppp">
                                            - Evening
                                            <hr color="#ebebeb" />
                                        </Link>
                                        <Link className="uppp">
                                            - Sunadress
                                            <hr color="#ebebeb" />
                                        </Link>
                                    </div>
                                }
                            </Link>
                            <Link className="toppp">
                                Dresses <div className="jghh"
                                    onClick={() => setShowd(!showd)}>
                                    {showd ? <FaMinusSquare /> : <FaPlusSquare />}
                                </div>
                                <hr color="#ebebeb" />
                                {
                                    showd &&
                                    <div className="topcomp">
                                        <Link className="uppp">
                                            - Accessories
                                            <hr color="#ebebeb" />
                                        </Link>
                                        <Link className="uppp">
                                            - Hats and Bags
                                            <hr color="#ebebeb" />
                                        </Link>
                                        <Link className="uppp">
                                            - Lingerie
                                            <hr color="#ebebeb" />
                                        </Link>
                                        <Link className="uppp">
                                            - Bras
                                            <hr color="#ebebeb" />
                                        </Link>
                                    </div>
                                }
                            </Link>
                            <Link className="toppp">
                                Handbags
                                <hr color="#ebebeb" />
                            </Link>
                            <Link className="toppp">
                                Shoes  <div className="jghh"
                                onClick={() => setShows(!shows)}>
                                {shows ? <FaMinusSquare /> : <FaPlusSquare />}
                            </div>
                            <hr color="#ebebeb" />
                            {
                                shows &&
                                <div className="topcomp">
                                    <Link className="uppp">
                                        - Toter
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="uppp">
                                        - Clutches
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="uppp">
                                        - Satchels
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="uppp">
                                        - Cross Body
                                        <hr color="#ebebeb" />
                                    </Link>
                                </div>
                            }
                            </Link>
                            <Link className="toppp">
                                Clothing  <div className="jghh"
                                onClick={() => setShowc(!showc)}>
                                {showc ? <FaMinusSquare /> : <FaPlusSquare />}
                            </div>
                            <hr color="#ebebeb" />
                            {
                                showc &&
                                <div className="topcomp">
                                    <Link className="uppp">
                                        - Coats and jacakets
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="uppp">
                                        - BlazLink
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="uppp">
                                        - Raincoats
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="uppp">
                                        - Jacakets
                                        <hr color="#ebebeb" />
                                    </Link>
                                </div>
                            }
                            </Link>
                            <Link className="toppp">
                                Accessories
                                <hr color="#ebebeb" />
                            </Link>
                        </div>
                    }
                </Link>
            </div>
            <Menaccordian />
            <Fashionaccordian />
        </div>
    );
};

export default Menbov;
