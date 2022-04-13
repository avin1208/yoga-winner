import React from "react";

import { Link } from "react-router-dom";

import './menbox.styles.scss';

import { FaPlusSquare } from 'react-icons/fa';

const Menbov = () => {
    return (
        <div className="menbov">
            <div className="menbov-title">
                <Link className="home-bov">
                    Home
                </Link>
                <Link className="women-bov">
                    Women <FaPlusSquare className="squre" />
                </Link>
                <Link className="mens-bov">
                    Men <FaPlusSquare className="squre" />
                </Link>
                <Link className="fashion-bov">
                    Fashion <FaPlusSquare className="squre" />
                </Link>
            </div>
        </div>
    );
};

export default Menbov;
