import React from "react";

import Navebar from "../../components/navebar/navebar.component";

import Header from "../../components/header/header.component";

import Service from "../../components/service/service.component";

import './homepage.styles.scss';

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
        </div>
    );
};

export default Homepage;