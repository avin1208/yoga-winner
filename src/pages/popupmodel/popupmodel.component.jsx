import React from "react";

import './popupmodel.styles.scss';

import { TiSocialYoutubeCircular } from 'react-icons/ti';

import { FaFacebookF } from 'react-icons/fa';

import { AiOutlineTwitter } from 'react-icons/ai';

import { FaLinkedinIn } from 'react-icons/fa';

import { AiOutlineGooglePlus } from 'react-icons/ai';


const Modal = ({ setOpenModal }) => {
    return (
        <div className="model-container">
            <div className="model-back">
                <div className="title-butoon">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >X</button>
                </div>
                <div className="model-cont">
                    <div className="model-post">
                        <div className="model-title">
                            <h2>SIGN UP TO OUR NEWSLETTER</h2>
             
                            </div>
                        <div className="model-subtitle">
                            <p>Subscribe and get $5 off on your first purchase !</p>
                        </div>
                        <div className="model-response">
                            <input type='text' className="input" placeholder="Enter your email" required />
                            <div className="btn-close">
                                SUBSCRIBE</div>
                        </div>
                        <div className="popup-s">
                            Follow Us:
                            <div className="popup-icon">
                                <div className="facebook">
                                    <FaFacebookF size="1em" color="grey" />
                                </div>
                                <div className="twitter">
                                    <AiOutlineTwitter size="1em" color="grey" />
                                </div>
                                <div className="youtube">
                                    <TiSocialYoutubeCircular size="1.3em" color="grey" />
                                </div>
                                <div className="link-in">
                                    <FaLinkedinIn size="1em" color="grey" />
                                </div>
                                <div className="google">
                                    <AiOutlineGooglePlus size="1.3em" color="grey" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="model-bottem">
                        <input className='checkboxs' type="checkbox" />
                        <div className="label-bottem">
                            Don't Show this Popup agian
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;