import React from "react";

import './footer-center.styles.scss';

import { TiSocialYoutubeCircular } from 'react-icons/ti';

import { FaFacebookF } from 'react-icons/fa';

import { AiOutlineTwitter } from 'react-icons/ai';

import { FaLinkedinIn } from 'react-icons/fa';

import { AiOutlineGooglePlus } from 'react-icons/ai';

import { FiInstagram } from 'react-icons/fi';

const FooterCenter = () => {
    return (
        <div className="footer-center">
            <div className="center-main">
                <div className="center-title">
                    <h4 className="title-font">
                        NEWSLETTER SIGN-UP
                    </h4>
                    <p>Join the GAF fam! Sign up to our mailing <br />
                        list for exclusive weekly discounts.</p>
                    <div className="model-response">
                        <input type='text' className="input" placeholder="Enter your email" required />
                        <div className="btn-close">
                            SUBSCRIBE</div>
                    </div>
                </div>
                <div className="social-footer">
                    <h3 className=" social-name">
                        FOLLOW US:
                    </h3>
                    <div className="social-media">
                        <div className="facebook">
                            <FaFacebookF size="1em" color="grey" />
                        </div>
                        <div className="twitter">
                            <AiOutlineTwitter size="1em" color="grey" />
                        </div>
                        <div className="youtube">
                            <TiSocialYoutubeCircular size="1em" color="grey" />
                        </div>
                        <div className="link-in">
                            <FaLinkedinIn size="1em" color="grey" />
                        </div>
                        <div className="google">
                            <AiOutlineGooglePlus size="1em" color="grey" />
                        </div>
                        <div className="instagram">
                            <FiInstagram size="1em" color="grey" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterCenter;