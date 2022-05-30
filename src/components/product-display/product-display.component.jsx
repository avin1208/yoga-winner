import React, { useState, useEffect } from "react";

import './product-display.styles.scss';

const Banner = () => {

    const [poter, setPoter] = useState([]);

    const getPoter = async () => {
        const response = await fetch("https://winner-yoga.herokuapp.com/customer/get-homepage");

        const data = await response.json();
        // console.log(data.poster);
        setPoter(data.poster)

    }
    useEffect(() => {
        getPoter();
    },[]);

    return (
        <div className="head">
        {
            poter.slice(0, 2).map(item => (<div key={item.id} item={item}>
                <div className="item-text">
                    {item.title}
                </div>
                <img src={item.image}
                alt="" />
            </div>
            ))
        }
        </div>
    )
};

export default Banner;