import React from 'react';

import './men-dropdown.styles.scss';

import { Link } from 'react-router-dom';

const MenDrop = () => {
    return (
        <div className='men-drop'>
            <div className='men-down'>
                <div className='men-image'>
                    <div className='men-imgd'>
                        <img src='https://demo.fieldthemes.com/ps_winner/home2/modules/fieldmegamenu/images/img4.jpg' alt='fimg' />
                        <div className='men-title'>
                            <Link className='top' to='/'>
                                Top
                            </Link>
                            <Link className='cocktail' to='/'>
                                Cocktail
                            </Link>
                            <Link className='day' to='/'>
                                Day
                            </Link>
                            <Link className='evening' to='/'>
                                Evening
                            </Link>
                            <Link className='sundresses' to='/'>
                                Sundresses
                            </Link>
                            <Link className='Lingerie' to='/'>
                                Lingerie
                            </Link>
                        </div>
                    </div>
                    <div className='men-imgs'>
                        <img src='https://demo.fieldthemes.com/ps_winner/home2/modules/fieldmegamenu/images/img5.jpg' alt='simg' />
                        <div className='men-title'>
                            <Link className='handbag' to='/'>
                                Handbags
                            </Link>
                            <Link className='toter' to='/'>
                                Toter
                            </Link>
                            <Link className='cluthces' to='/'>
                                Cluthces
                            </Link>
                            <Link className='satchels' to='/'>
                                Satchels
                            </Link>
                            <Link className='crossbody' to='/'>
                                Cross Body
                            </Link>
                            <Link className='clothing' to='/'>
                                Clothing
                            </Link>
                        </div>
                    </div>
                    <div className='men-imga'>
                        <img src='https://demo.fieldthemes.com/ps_winner/home2/modules/fieldmegamenu/images/img6.jpg' alt='aimg' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenDrop;