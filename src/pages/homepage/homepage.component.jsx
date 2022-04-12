import React from "react";

import Navebar from "../../components/navebar/navebar.component";

import Header from "../../components/header/header.component";

import Service from "../../components/service/service.component";

import Banner from "../../components/product-display/product-display.component";

import { connect } from "react-redux";

import './homepage.styles.scss';

import ProductList from "../../components/product-list/product-list.component";

import NewProduct from "../../components/newproduct-list/newproduct-list.component";

import Sell from "../../components/sell/sell.component";

import BlogDisplay from "../../components/blog-display/blog-display.component";

import Brand from "../../components/brand/brand.component";

import Footer from "../../components/footer/footer.component";

import MenDrop from "../../components/men-dropdown/men-dropdown.component";

import Ladrop from "../../components/l-dropdown/l-dropdown.component";


const Homepage = ({ hidden, hidden2 }) => {

    return (
        <div className="homepage">
            <Header />
            <Navebar />

            {
                hidden ? null : <MenDrop />
            }
            {
                hidden2 ? null : <Ladrop />
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
            <Brand />
            <Footer />
        </div>
    );
};

const mapStateToProps = ({ men: { hidden }, lad: { hidden2 } }) => ({
    hidden, hidden2
})


export default connect(mapStateToProps)(Homepage);