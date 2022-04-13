import React,{ useState } from "react";

import './men-product.styles.scss';

import { FaTh } from 'react-icons/fa';

import { FiAlignJustify } from 'react-icons/fi';

import { FaCaretDown } from 'react-icons/fa';

import { Link } from "react-router-dom";

import PRODUCT_DATA from "../../product.data";

import Product from "../product/product.component";


const Menproduct = () => {
    const [productdata] = useState(PRODUCT_DATA);
    return (
        <div className="men-product">
            <div className="men-pro">
                <div className="men-th">
                    <div className="men-fath">
                        <FaTh />
                    </div>
                    <div className="men-aifi">
                        <FiAlignJustify />
                    </div>
                </div>
                <div className="men-j">
                    <span className="men-cen">
                        There are 9 Products.
                    </span>
                </div>
                <div className="box-sort">
                  <span className="sort">
                  Sort By:
                  </span>
                  <div className="prefer">
                    <Link className="Relvel" to='/'>
                     Relevance
                     <FaCaretDown />
                    </Link>
                  </div>
                </div>
            </div>
            <div className="fggg">
            {
                productdata
                    .filter((item, idx) => idx === 0 || idx === 2 || idx === 15 || idx === 15 || idx === 1 || idx === 3 || idx === 4 || idx === 5 || idx === 6 || idx === 7 || idx === 8)
                    .map(item => (<Product key={item.id} item={item} />
                    ))
            }
        </div>
        </div>
    );
};

export default Menproduct;