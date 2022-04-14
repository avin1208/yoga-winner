import React, {useState} from "react";

import './men-list.styles.scss';

import PRODUCT_DATA from "../../product.data";

import Product from "../product/product.component";

const Menlist = () => {
    const [productdata] = useState(PRODUCT_DATA);
    return(
        <div className="fggh">
        {
            productdata
                .filter((item, idx) => idx === 0 || idx === 2 || idx === 15 || idx === 15 || idx === 1 || idx === 3 || idx === 4 || idx === 5 || idx === 6 || idx === 7 || idx === 8)
                .map(item => (<Product key={item.id} item={item} />
                ))
        }
        </div>
    );
};

export default Menlist;