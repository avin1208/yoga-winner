import React from "react";

import { Link } from "react-router-dom";

import './newproduct-list.styles.scss'

import Audio from "../newarrivals/newarrivals.component";

const NewProduct = () => {
    return (
        <div className="newproductlist">
            <div className="title-card">
                <h1>
                    NEW PRODUTCS
                </h1>
                <p>
                    Top sell for today
                </p>
            </div>
            <div className="abc">
                <Link className="seller" to='/'>
                    best seller
                    </Link>
                <Link className="collect" to='/'>
                    collection
                    </Link>
                <Link className="trending" to='/'>
                    Trending
                    </Link>
            </div>
            <Audio />
        </div>
    );
};

export default NewProduct;