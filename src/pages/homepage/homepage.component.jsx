import React from "react";

import Service from "../../components/service/service.component";

import Banner from "../../components/product-display/product-display.component";

import { connect } from "react-redux";

import './homepage.styles.scss';

import ProductList from "../../components/product-list/product-list.component";

import NewProduct from "../../components/newproduct-list/newproduct-list.component";

import Sell from "../../components/sell/sell.component";

import BlogDisplay from "../../components/blog-display/blog-display.component";

import MenDrop from "../../components/men-dropdown/men-dropdown.component";

import Ladrop from "../../components/l-dropdown/l-dropdown.component";

import Kiddrop from "../../components/kids-drop/kids-drop.component";

import Cartdrop from "../../components/cart-drop/cart-drop.component";


const Homepage = ({ hidden, hidden2, hidden3, hidden4 }) => {

    return (
        <div className="homepage">
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
            <div className="background-image">
            <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldslideshow/images/slider-111.jpg" alt="Sports Wear"></img>
                <div className="box-slider">
                    <div className="title">
                    SPORTSWEAR.</div>
                    <div className="subtitle">
                        <p>Transition into Autumn with Temperley London outerwear. Shop wool twill trench coats for <br />
                        effortless sophistication and tuxedo styles to embody the Autumn folk dandy theme.
                        </p>
                    </div>
                    <div className="price">
                     Best Price : 370$
                    </div>
                    <div className="shop">
                     SHOP NOW
                    </div>
                </div>
            </div>
            <Service />
            <Banner />
            <ProductList />
            <NewProduct />
            <Sell />
            <BlogDisplay />
        </div>
    );
};

const mapStateToProps = ({ men: { hidden }, lad: { hidden2 }, kid: { hidden3 }, cart: { hidden4 } }) => ({
    hidden, hidden2, hidden3, hidden4
})


export default connect(mapStateToProps)(Homepage);