import React from "react";

import './newproduct-list.styles.scss'

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
                <div className="abc">
                    <p>
                        best seller
                    </p>
                    <p>
                        collection
                    </p>
                    <p>
                        Trending
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;