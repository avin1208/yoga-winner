import React, { useState } from "react";

import PRODUCT_DATA from "../../product.data";

import Product from "../product/product.component";

import './newitem.styles.scss';

const Newitem = () => {
    const [productdata] = useState(PRODUCT_DATA);
    return (
        <div className="fgh">
            {
                productdata
                    .filter((item, idx) => idx === 0 || idx === 2 || idx === 15)
                    .map(item => (<Product key={item.id} item={item} />
                    ))
            }
        </div>
    );
};

export default Newitem;

