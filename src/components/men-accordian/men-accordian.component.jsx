import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FaMinusSquare } from "react-icons/fa";

import { FaPlusSquare } from "react-icons/fa";

import './men-accordian.styles.scss';

const Menaccordian = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="men-accordian">
            <Link className="menjklll-bov">
                Men <div className="jkn" onClick={() => setShow(!show)}>
                    {show ? <FaMinusSquare /> : <FaPlusSquare />}
                </div>
                <hr color="#ebebeb" />
                {
                    show &&
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
                            <hr color="#ebebeb" />
                        </Link>
                    </div>
                }
            </Link>
        </div>
    );
};

export default Menaccordian;