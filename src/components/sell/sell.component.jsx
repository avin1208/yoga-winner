import React, { useState } from "react";

import PRODUCT_DATA from "../../product.data";

import Product from "../product/product.component";

import './sell.styles.scss';

const Sell = () => {
    const[productdata] = useState(PRODUCT_DATA);
    return(
        <div className="topsell">
          <div className="titlename">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAB1CAYAAAD0gkmSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRTI5NTAwQzUxQTZFNjExQTU5Rjg5MkVCQUYxRTNGMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERTFBNEUwMzFBRUUxMUU3QkExMUFFQjFBQjI5NDRBRSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERTFBNEUwMjFBRUUxMUU3QkExMUFFQjFBQjI5NDRBRSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFDOTY4N0Q1QUREN0U2MTFCMEFFQjVFNDI2NzQxQ0RCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFFMjk1MDBDNTFBNkU2MTFBNTlGODkyRUJBRjFFM0YxIi8+IDwvcmRmOkRlc2NyaXB0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" alt="" />
             <h1>
                SALE PRODUCTS
             </h1>
             <p>
              Top sell for all days
             </p>
          </div>
          <div className="filter">
           {
               productdata
               .filter((item, idx) => idx === 0 || idx === 9 || idx === 10 || idx === 8 || idx === 7 || idx === 5)
               .map(item => (<Product key={item.id} item={item} />
                ))
           }
          </div>
        </div>
    );
};


export default Sell;


