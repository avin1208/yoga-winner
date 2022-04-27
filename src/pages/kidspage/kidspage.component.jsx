import React from "react";

import { Link } from "react-router-dom";

import './kidspage.styles.scss';

import { connect } from "react-redux";

import Menbov from "../../components/menbox/menbox.component";

import Checkbox from "../../components/men-checkbox/men-checkbox.component";

import MenDrop from "../../components/men-dropdown/men-dropdown.component";

import Ladrop from "../../components/l-dropdown/l-dropdown.component";

import Kiddrop from "../../components/kids-drop/kids-drop.component";

import Cartdrop from "../../components/cart-drop/cart-drop.component";

import Kidproduct from "../../components/kid-product/kid-product.component";

const Kidspage = ({ hidden, hidden2, hidden3, hidden4 }) => {
    return (
        <div className="main-pagehj">
        {
            hidden ? null : <MenDrop />
        }
        {
            hidden2 ? null : <Ladrop />
        }
        {
            hidden3 ? null : <Kiddrop />
        }
        {
            hidden4 ? null : <Cartdrop />
        }
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
            <div className="men-side">
                <div className="men-leftt">
                    <Menbov />
                    <Checkbox />
                </div>
                <div className="men-rightt">
                    <Kidproduct />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ men: { hidden }, lad: { hidden2 }, kid: { hidden3 }, cart: { hidden4 } }) => ({
    hidden, hidden2, hidden3, hidden4
})

export default connect(mapStateToProps)(Kidspage);

