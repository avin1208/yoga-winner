import React, { useState } from "react";

import Product from "../product/product.component";

import PRODUCT_DATA from "../../product.data";

import './product-list.styles.scss';

import Pagination from "../pagination/pagination.component";

const ProductList = () => {
    const [productdata] = useState(PRODUCT_DATA);
    return (
        <div className="product-list">
            <div className="title-block">
                <h1>
                    FEATURED PRODUTCS
                </h1>
                <p>
                    Top sale for all days
                </p>
            </div>
            {
                productdata.map((item) => (<Product key={item.id} item={item} />))
            }
            <Pagination />
        </div>
        
    )
};

export default ProductList;