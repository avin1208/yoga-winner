import React, { useContext }from "react";

import Service from "../../components/service/service.component";

import Banner from "../../components/product-display/product-display.component";

import './homepage.styles.scss';

import ProductList from "../../components/product-list/product-list.component";

import NewProduct from "../../components/newproduct-list/newproduct-list.component";

import Sell from "../../components/sell/sell.component";

import BlogDisplay from "../../components/blog-display/blog-display.component";

import MenDrop from "../../components/men-dropdown/men-dropdown.component";

import Ladrop from "../../components/l-dropdown/l-dropdown.component";

import Kiddrop from "../../components/kids-drop/kids-drop.component";

import Cartdrop from "../../components/cart-drop/cart-drop.component";

import { DropContext } from "../../Providers/drop/drop.providers";

import { CartContext } from "../../Providers/cart/cart.provider";


const Homepage = () => {

    const { dropHidden } = useContext(DropContext);

    const { dropHidden1 } = useContext(DropContext);

    const { dropHidden2 } = useContext(DropContext);

    const {hidden} = useContext(CartContext);

    return (
        <div className="homepage">
        {
            dropHidden ? null : <MenDrop />
        }
        {
            dropHidden1 ? null : <Ladrop />
        }
        {
            dropHidden2 ? null : <Kiddrop />
        }
        {
            hidden ? null : <Cartdrop />
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




export default Homepage;