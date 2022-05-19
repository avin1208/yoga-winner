import React, { useContext, useEffect, useState } from "react";

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

import Bannerr from "../../components/banner/banner.component";

import Carousel from "react-elastic-carousel";


const Homepage = () => {

    const breakPoints = [
        {
            width: "1900px", itemsToShow: 1
        }
    ]

    const [banner, setBanner] = useState([]);

    const [poster, setPoster] = useState([]);

    const getBanners = async () => {
        const response = await fetch("https://winner-yoga.herokuapp.com/customer/get-homepage");

        const data = await response.json();
        // console.log(data.banner);
        setBanner(data.banner)


    }

    useEffect(() => {
        getBanners();
    });


    const getPoster = async () =>{
        const response = await fetch("https://winner-yoga.herokuapp.com/customer/get-homepage");

        const data = await response.json();
        // console.log(data.poster);
        setPoster(data.poster)

    }

    useEffect(() => {
        getPoster();
    });

    
    const { dropHidden } = useContext(DropContext);

    const { dropHidden1 } = useContext(DropContext);

    const { dropHidden2 } = useContext(DropContext);

    const { hidden } = useContext(CartContext);

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
            <Carousel breakPoints={breakPoints}>
            {
                banner.map(item => (<Bannerr key={item.id} item={item} />
                ))
            }
            </Carousel>
            <Service />
            {
                poster.map(item => (<Banner key={item.id} item={item} />
                ))
            }
            <ProductList />
            <NewProduct />
            <Sell />
            <BlogDisplay />
        </div>
    );
};




export default Homepage;