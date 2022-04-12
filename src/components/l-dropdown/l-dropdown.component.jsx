import React from 'react';

import './l-dropdown.styles.scss'

import { Link } from 'react-router-dom';

const Ladrop = () => {
    return (
        <div className='lad-drop'>
            <div className='lad-down'>
                <div className='lad-main'>
                    <div className='lad-tl'>
                        <Link className='dress' to='/'>
                            Dresses
                        </Link>
                        <Link className='accessories' to='/' >
                            Accessories
                        </Link>
                        <Link className='Hats' to='/' >
                            Hats And Gloves
                        </Link>
                        <Link className='cloth' to='/' >
                            Clothing
                        </Link>
                        <Link className='shoes' to='/' >
                            Shoes
                        </Link>
                        <Link className='bags' to='/' >
                            Bags
                        </Link>
                        <Link className='Lingerie' to='/'>
                            Lingerie
                        </Link>
                    </div>
                    <div className='lad-center'>
                        <Link className='handbagss' to='/'>
                            Handbags
                        </Link>
                        <Link className='toters' to='/' >
                            Toter
                        </Link>
                        <Link className='clutches' to='/' >
                            Clutches
                        </Link>
                        <Link className='fashion' to='/' >
                            Fashion
                        </Link>
                        <Link className='accessoriess' to='/' >
                            Accessories
                        </Link>
                        <Link className='watch-fashion' to='/' >
                            Watch Fashion
                        </Link>
                        <Link className='bagss' to='/'>
                           Bags
                        </Link>
                    </div>
                    <div className='lad-right'>
                        <Link className='shoess' to='/'>
                            Shoes
                        </Link>
                        <Link className='clothingss' to='/' >
                           Clothing
                        </Link>
                        <Link className='coats' to='/' >
                            Coats and Jackets
                        </Link>
                        <Link className='footware' to='/' >
                            Footware
                        </Link>
                        <Link className='rings' to='/' >
                            Rings
                        </Link>
                        <Link className='bands' to='/' >
                            Bands
                        </Link>
                        <Link className='diamond' to='/'>
                           Diamond
                        </Link>
                    </div>
                    <div className='lad-image'>
                        <img src='https://demo.fieldthemes.com/ps_winner/home2/modules/fieldmegamenu/images/img3.jpg' alt='img' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ladrop;