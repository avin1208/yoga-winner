import React from "react";

import './product.styles.scss';


const Product = ({ item }) => {
    const { title, imageUrl, price } = item;
    return (
        <div className="listofproduct">
        <div className="background-image">
        <img src={`${imageUrl}`} alt="profile" />
            <div className="titleblock">
                {title}
                <div className="p-p">
                    {price}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Product;