import React from "react";

import { Link } from "react-router-dom";

import './menpage.styles.scss';

import Menbov from "../../components/menbox/menbox.component";

import Menproduct from "../../components/men-product/men-product.component";

const Menpagee = () => {
    return (
        <div className="main-pagehj">
            <div className=" namefg">
                <div className="back-imae">
                    <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldstaticblocks/images/banner-top.jpg" alt="" />
                </div>
                <div className="pagel">
                  <Link className="hm">
                  Home
                  </Link>
                  |
                  <Link className="mh">
                  Men
                 </Link>
                </div>
            </div>
            <Menbov />
            <Menproduct />
        </div>
    );
};

export default Menpagee;

