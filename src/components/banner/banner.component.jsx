import React from 'react'

import './banner.styles.scss';


const Bannerr = ({ item }) => {

    const { title, image, description } = item;
    return (
        <div className="background-image">
            <center>
                <div className='main-back-block' style={{ backgroundImage: `url(${image})` }}>
                    <div className='namee'>{title}</div>
                    <div className='descriptionn'>{description}</div>
                </div>
            </center>

        </div>
    )
}

export default Bannerr;