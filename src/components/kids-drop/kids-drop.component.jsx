import React from "react";

import './kids-drop.styles.scss';

import { Link } from 'react-router-dom';

const Kiddrop = () => {
    return (
        <div className="kids-drop">
            <div className="kids-down">
                <div className="kids-main">
                    <div className="kids-tl">
                        <Link className='dress' to='/'>
                            Dresses
                        </Link>
                        <Link className='accessories' to='/' >
                            Accessories
                        </Link>
                        <Link className='Hats' to='/' >
                            Hats And Gloves
                        </Link>
                        <Link className='Lingerie' to='/'>
                            Lingerie
                        </Link>
                        <Link className='brass' to='/' >
                            Bras
                        </Link>
                        <Link className='clothingd' to='/'>
                            Clothing
                        </Link>
                        <Link className='coats-j' to='/' >
                            Coats and Jackets
                        </Link>
                        <Link className='blazers' to='/' >
                            Blazers
                        </Link>
                        <Link className='raincoats' to='/'>
                            Raincoats
                        </Link>
                        <Link className='jacketss' to='/'>
                            Jackets
                        </Link>
                    </div>
                    <div className="kids-cn">
                        <Link className='Handbagsss' to='/'>
                            Handbags
                        </Link>
                        <Link className='toterr' to='/' >
                            Toter
                        </Link>
                        <Link className='clutchese' to='/' >
                            Clutches
                        </Link>
                        <Link className='satchelss' to='/'>
                            Satchels
                        </Link>
                        <Link className='cross-body' to='/' >
                            Cross Body
                        </Link>
                        <Link className='clothingd' to='/'>
                            Clothing
                        </Link>
                        <Link className='shoesss' to='/' >
                            Shoes
                        </Link>
                        <Link className='bagsss' to='/' >
                            Bags
                        </Link>
                        <Link className='Lingerie' to='/'>
                            Lingerie
                        </Link>
                        <Link className='best-seller' to='/'>
                            Best Seller
                        </Link>
                    </div>
                    <div className="kids-image">
                        <div className="kids-imga">
                            <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldmegamenu/images/img1.jpg" alt="" />
                            <div className="kidimg-tl">
                                <h4 className="kidtl">Girl Collection 2017</h4>
                                <p>Do more of what makes you happy.</p>
                                <div className="shop">
                                    SHOP NOW
                                </div>
                            </div>
                        </div>
                        <div className="kids-imgv">
                            <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldmegamenu/images/img2.jpg" alt="" />
                            <div className="kidimg-tl">
                                <h4 className="kidtl">Boys Collection 2017</h4>
                                <p>Do more of what makes you happy.</p>
                                <div className="shop">
                                    SHOP NOW
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Kiddrop;