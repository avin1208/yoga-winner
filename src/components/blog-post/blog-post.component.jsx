import React from "react";

import './blog-post.styles.scss';

import { Link } from "react-router-dom";

const Blogpost = () => {
    return (
        <div className="main-post">
            <div className="sec-post">
                <div className="post-tile">
                    <div className="recent">RECENT POST</div>
                </div>
                <div className="post-middel">
                    <div className="blog-pot1">
                        <img src="https://demo.fieldthemes.com/ps_winner/home2/modules//smartblog/images/8-home-small.jpg" alt="" />
                        <div className="p-t">
                            <Link className="pot-titl" >
                                Summer Entertraining
                            </Link>
                            <div className="date-pot">
                                Mar 13, 2017
                            </div>
                        </div>
                    </div>
                    <div className="blog-pot1">
                        <img src="https://demo.fieldthemes.com/ps_winner/home2/modules//smartblog/images/7-home-small.jpg" alt="" />
                        <div className="p-t">
                            <Link className="pot-titl" >
                                Summer Entertraining
                            </Link>
                            <div className="date-pot">
                                Mar 13, 2017
                            </div>
                        </div>
                    </div>
                    <div className="blog-pot1">
                        <img src="https://demo.fieldthemes.com/ps_winner/home2/modules//smartblog/images/6-home-small.jpg" alt="" />
                        <div className="p-t">
                            <Link className="pot-titl" >
                                Summer Entertraining
                            </Link>
                            <div className="date-pot">
                                Mar 13, 2017
                            </div>
                        </div>
                    </div>
                    <div className="blog-pot1">
                        <img src="https://demo.fieldthemes.com/ps_winner/home2/modules//smartblog/images/5-home-small.jpg" alt="" />
                        <div className="p-t">
                            <Link className="pot-titl" >
                                Summer Entertraining
                            </Link>
                            <div className="date-pot">
                                Mar 13, 2017
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="imgb">
            <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldstaticblocks/images/bn_left.jpg" alt="" />
            </div>
        </div>
    );
};

export default Blogpost;
