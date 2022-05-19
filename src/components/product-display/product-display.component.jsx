import React from "react";

import './product-display.styles.scss';

const Banner = ({item}) => {

    const { image } = item
    return (
        <div className="head">
            <div className="main-back-poster" style={{ backgroundImage: `url(${image})` }}> 
            </div>
        </div>
    )
};

export default Banner;