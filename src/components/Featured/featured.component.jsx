import React from 'react'

const Featured = ({ item,  }) => {

    const { name, image } = item;

    
    return (
        <div className='featured'>
            <div className='featured-main'>
                <div className='item-name'>
                    {name}
                </div>
                <div className='main-back-block' style={{ backgroundImage: `url(${image})` }}>
                </div>
            </div>
        </div>
    )
}

export default Featured;