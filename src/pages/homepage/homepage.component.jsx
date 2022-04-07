import React from "react";

import Navebar from "../../components/navebar/navebar.component";

import Header from "../../components/header/header.component";

import Service from "../../components/service/service.component";

import Banner from "../../components/product-display/product-display.component";

import './homepage.styles.scss';

import ProductList from "../../components/product-list/product-list.component";

import NewProduct from "../../components/newproduct-list/newproduct-list.component";

import Sell from "../../components/sell/sell.component";

import BlogDisplay from "../../components/blog-display/blog-display.component";


const Homepage = () => {
    return (
        <div className="homepage">
            <Header />
            <Navebar />
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

export default Homepage;