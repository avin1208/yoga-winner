import React from "react";

import './product-display.styles.scss';

const Banner = () => {

    return (
        <div className="head">
            <div className="row">
                <div className="sportswear">
                    <img src="https://images.fancode.com/media/catalog/product/cache/c864083bf74ae97037fa23bc5340ae95/7/7/773001-01_bumrytayewhom1ji.png" alt="RCB JERSEY 2022">
                    </img>
                    <div className="subtitle">
                        <h1>
                            SPORTSWEAR
                        </h1>
                        <p>
                            Turn your pc into multimedia hub.
                        </p>
                        <div className="shop">
                            SHOP NOW
                        </div>
                    </div>
                </div>
                <div className="headphones">
                    <div className="subtitle">
                        <h1>
                            HEADPHONE
                        </h1>
                        <p>
                            High Speed load, SEO Optimization
                        </p>
                        <div className="shop">
                            SHOP NOW
                        </div>
                    </div>
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_fa68605c-8fd7-4713-be36-9855430331bb_720x.png?v=1617905193" alt="headphones">
                    </img>
                </div>
            </div>
            <div className="discount">
                <img src="https://res.cloudinary.com/dobanpo5b/image/upload/v1652432464/aa23a17adda1_p2.jpeg.jpg" alt="sale">
                </img>
            </div>
        </div>
    )
};

export default Banner;