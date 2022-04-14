import React from "react";

import { Link } from "react-router-dom";

import './kidspage.styles.scss';

import Menbov from "../../components/menbox/menbox.component";

import Menproduct from "../../components/men-product/men-product.component";

import Checkbox from "../../components/men-checkbox/men-checkbox.component";



const Kidspage = () => {
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
                       Kids
                    </Link>
                </div>
            </div>
            <Menbov />
            <Checkbox />
            <Menproduct />
            <div className="sell-ime">
                <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldstaticblocks/images/bn_left.jpg" alt="" />
            </div>
            
        </div>
    );
};

export default Kidspage;

