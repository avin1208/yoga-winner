import React from "react";

import { Link } from "react-router-dom";

import './accessoriespage.styles.scss';

import Menbov from "../../components/menbox/menbox.component";

import Menproduct from "../../components/men-product/men-product.component";

import Checkbox from "../../components/men-checkbox/men-checkbox.component";

import MenDrop from "../../components/men-dropdown/men-dropdown.component";

import Ladrop from "../../components/l-dropdown/l-dropdown.component";

import Kiddrop from "../../components/kids-drop/kids-drop.component";

import { connect } from "react-redux";


const Accessoriespage = ({ hidden, hidden2, hidden3 }) => {
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
            <div className="namefg">
                <div className="back-imae">
                    <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldstaticblocks/images/banner-top.jpg" alt="" />
                </div>
                <div className="pagel">
                    <Link className="hm">
                        Home
                    </Link>
                    |
                    <Link className="mh">
                        Accessories
                    </Link>
                </div>
            </div>
            <div className="men-side">
                <div className="men-leftt">
                    <Menbov />
                    <Checkbox />
                </div>
                <div className="men-rightt">
                    <Menproduct />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ men: { hidden }, lad: { hidden2 }, kid: { hidden3 } }) => ({
    hidden, hidden2, hidden3
})


export default connect(mapStateToProps)(Accessoriespage);

