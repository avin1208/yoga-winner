import React, { useState } from "react";

import PRODUCT_DATA from "../../product.data";

import Product from "../product/product.component";

import './collection.styles.scss';

const Collection = () => {
    const [productdata] = useState(PRODUCT_DATA);
    return (
        <div className="xcv">
            {
                productdata
                    .filter((item, idx) => idx === 13 || idx === 14 || idx === 0)
                    .map(item => (<Product key={item.id} item={item} />
                    ))
            }
        </div>
    )
}

export default Collection;