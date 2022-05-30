import React, { useEffect, useState } from "react";

import Collection from "../collection/collection.component";

import Newitem from "../newitem/newitem.component";

import './newarrivals.styles.scss';

const Audio = () => {

    const [poster, setPoster] = useState([]);

    const getPoster = async () => {
        const response = await fetch("https://winner-yoga.herokuapp.com/customer/get-homepage");

        const data = await response.json();
        console.log(data.poster);
        setPoster(data.poster)
    }

    useEffect(() => {
        getPoster();
    }, []);


    return (
        <div className="mnb">
            <div className="asd">
                {
                    poster.slice(3).map(item => (<div key={item.id} item={item}>
                        <img src={item.image} alt="icon" />
                    </div>))
                }
                <Collection />
            </div>
            <div className="bnm">
                <Newitem />
                {
                    poster.slice(3).map(item => (<div key={item.id} item={item}>
                        <img src={item.image} alt="icon" />
                    </div>))
                }
            </div>
        </div>
    );
};

export default Audio;