import React from "react";

import './men-checkbox.styles.scss';

const Checkbox = () => {
    return (
        <div className="main-check">
            <div className="drop-check">
                <div className="check-title">
                    <div className="Filter">FILTER BY</div>
                </div>
                <div className="check-box">
                    <div className="clear-all">
                        x  clear all
                    </div>
                    <div className="categories">
                        <h5 className="cate">
                            CATEGORIES
                        </h5>
                        <div className="labell">
                            <div>
                                <label className="best-seller">
                                    <input type="checkbox" id="best-seller" name="best seller" />
                                    Best Seller (3)
                                </label>
                            </div>
                            <div>
                                <label className="collection">
                                    <input type="checkbox" id="best-seller" name="trending" />
                                    collection (3)
                                </label>
                            </div>
                            <div>
                                <label className="trending">
                                    <input type="checkbox" id="trending" name="trending" />
                                    trending (3)
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr color="#ebebeb" />
                </div>
                <div className="check-box">
                    <div className="sizee">
                        <h5 className="siz">
                            SIZE
                        </h5>
                        <div className="labell">
                            <div>
                                <label className="s">
                                    <input type="checkbox" id="s" name="s" />
                                    S (17)
                                </label>
                            </div>
                            <div>
                                <label className="m">
                                    <input type="checkbox" id="m" name="m" />
                                    M (17)
                                </label>
                            </div>
                            <div>
                                <label className="l">
                                    <input type="checkbox" id="l" name="l" />
                                    L (17)
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr color="#ebebeb" />
                </div>
                <div className="check-box">
                    <div className="colorr">
                        <h5 className="col">
                            COLOR
                        </h5>
                        <div className="labell">
                            <div>
                                <span className="color" >
                                </span>
                                <label className="beige">
                                    Beige (1)
                                </label>
                            </div>
                            <div>
                                <span className="color1" >
                                </span>
                                <label className="white">
                                    White (1)
                                </label>
                            </div>
                            <div>
                                <span className="color2" >
                                </span>
                                <label className="black">
                                    Black (2)
                                </label>
                            </div>
                            <div>
                                <span className="color3" >
                                </span>
                                <label className="orange">
                                    Orange (3)
                                </label>
                            </div>
                            <div>
                                <span className="color4" >
                                </span>
                                <label className="blue">
                                    Blue (2)
                                </label>
                            </div>
                            <div>
                                <span className="color5" >
                                </span>
                                <label className="green">
                                    Green (11)
                                </label>
                            </div>
                            <div>
                                <span className="color6" >
                                </span>
                                <label className="yellow">
                                    Yellow (11)
                                </label>
                            </div>
                            <div>
                                <span className="color7" >
                                </span>
                                <label className="pink">
                                    Pink (1)
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="sell-ime">
                <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldstaticblocks/images/bn_left.jpg" alt="" />
            </div>
        </div>
    );
};

export default Checkbox;