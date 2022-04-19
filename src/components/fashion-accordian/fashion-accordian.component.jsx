import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FaPlusSquare } from "react-icons/fa";

import { FaMinusSquare } from "react-icons/fa";

import './fashion-accordian.styles.scss';

const Fashionaccordian = () => {
    const [show, setShow] = useState(false);
    const [showa, setShowa] = useState(false);
    const [showf, setShowf] = useState(false);
    const [showk, setShowk] = useState(false);

    return (
        <div className="fashion-accordian">
            <Link className="fashion-bov">
                Fashion <div className="jkn" onClick={() => setShow(!show)}>
                    {show ? <FaMinusSquare /> : <FaPlusSquare />}
                </div>
                {show &&
                    <div className="women-acc">
                        <Link className="toppp">
                            Accessories <div className="xcv" onClick={() => setShowa(!showa)}>
                                {showa ? <FaMinusSquare /> : <FaPlusSquare />}
                            </div>
                            <hr color="#ebebeb" />
                            {
                                showa &&
                                <div className="topfashion">
                                    <Link className="ppp">
                                        - Watch Fashion
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="ppp">
                                        - Shoes
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="ppp">
                                        - Bags
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="ppp">
                                        - Life Style
                                        <hr color="#ebebeb" />
                                    </Link>
                                </div>
                            }
                        </Link>
                        <Link className="toppp">
                            Footware <div className="xcv" onClick={() => setShowf(!showf)}>
                            {showf ? <FaMinusSquare /> : <FaPlusSquare />}
                        </div>
                        <hr color="#ebebeb" />
                        {
                            showf &&
                            <div className="topfashion">
                                    <Link className="ppp">
                                        - Rings
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="ppp">
                                        - Bands
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="ppp">
                                        - Diamond
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="ppp">
                                        - Silver Bands
                                        <hr color="#ebebeb" />
                                    </Link>
                                </div>
                        }
                        </Link>
                        <Link className="toppp">
                            Kids Fashion <div className="xcv" onClick={() => setShowk(!showk)}>
                            {showk ? <FaMinusSquare /> : <FaPlusSquare />}
                        </div>
                        {
                            showk &&
                            <div className="topfashion">
                                    <Link className="ppp">
                                        - Shoes
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="ppp">
                                        - Casual Shoes
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="ppp">
                                        - Spring and Autumn
                                        <hr color="#ebebeb" />
                                    </Link>
                                    <Link className="ppp">
                                        - Winter
                                        <hr color="#ebebeb" />
                                    </Link>
                                </div>
                        }
                        </Link>
                    </div>
                }
            </Link>
        </div>
    );
};

export default Fashionaccordian;