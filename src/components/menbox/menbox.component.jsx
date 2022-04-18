import React, { useState } from "react";

import { Link } from "react-router-dom";

import './menbox.styles.scss';

import { FaPlusSquare } from 'react-icons/fa';

import { FaMinusSquare } from 'react-icons/fa';

const Menbov = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="menbov">
            <div className="menbov-title">
                <Link className="home-bov">
                    Home
                </Link>
                <Link className="women-bov">
                    Women <div className="jkl" onClick={() => setShow(!show)}>
                        {show ? <FaMinusSquare /> : <FaPlusSquare />}
                    </div>
                    {show &&
                        <div className="women-acc">
                            <Link className="toppp">
                                Top <FaPlusSquare />
                                <hr color="#ebebeb" />
                            </Link>
                            <Link className="toppp">
                                Dresses <FaPlusSquare />
                                <hr color="#ebebeb" />
                            </Link>
                            <Link className="toppp">
                                Handbags <FaPlusSquare />
                                <hr color="#ebebeb" />
                            </Link>
                            <Link className="toppp">
                                Shoes
                                <hr color="#ebebeb" />
                            </Link>
                            <Link className="toppp">
                                Clothing <FaPlusSquare />
                                <hr color="#ebebeb" />
                            </Link>
                            <Link className="toppp">
                                Accessories
                            </Link>
                        </div>
                    }
                </Link>
              
                <Link className="mens-bov">
                    Men <div className="jkn" onClick={() => setShow(!show)}>
                        {show ? <FaMinusSquare /> : <FaPlusSquare />}
                    </div>
                    {show &&
                        <div className="women-acc">
                            <Link className="toppp">
                                Clothing
                                <hr color="#ebebeb" />
                            </Link>
                            <Link className="toppp">
                                Shoes
                                <hr color="#ebebeb" />
                            </Link>
                            <Link className="toppp">
                                Bags
                                <hr color="#ebebeb" />
                            </Link>
                            <Link className="toppp">
                                Lingerie
                                <hr color="#ebebeb" />
                            </Link>
                            <Link className="toppp">
                                Best Seller
                                <hr color="#ebebeb" />
                            </Link>
                            <Link className="toppp">
                                Collction
                                <hr color="#ebebeb" />
                            </Link>
                            <Link className="toppp">
                                trending
                            </Link>
                        </div>
                    }
                </Link>
                <Link className="fashion-bov">
                    Fashion <div className="jkn" onClick={() => setShow(!show)}>
                    {show ? <FaMinusSquare /> : <FaPlusSquare />}
                </div>
                { show && 
                    <div className="women-acc">
                        <Link className="toppp">
                            Accessories <FaPlusSquare />
                            <hr color="#ebebeb" />
                        </Link>
                        <Link className="toppp">
                            Footware <FaPlusSquare />
                            <hr color="#ebebeb" />
                        </Link>
                        <Link className="toppp">
                            Kids Fashion <FaPlusSquare />
                        </Link>
                    </div>
                }
                </Link>
            </div>
        </div>
    );
};

export default Menbov;
