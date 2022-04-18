import React from "react";

import Collection from "../collection/collection.component";

import Newitem from "../newitem/newitem.component";

import './newarrivals.styles.scss';

const Audio = () => {
    return (
        <div className="mnb">
            <div className="asd">
                <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldtabcateslider/img/background_image1.jpg" alt="" />
                <Collection />
            </div>
            <div className="bnm">
            <Newitem />
            <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldstaticblocks/images/bn_2new.jpg" alt="" />
            </div>
        </div>
    );
};

export default Audio;