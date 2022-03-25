import React, { useState } from "react";

import './social-media.styles.scss'

import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
    FaTwitterSquare
} from "react-icons/fa";

const SocialMedia = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <div className="social-media">
                    <a href="https://www.youtube.com/" target="_blank">
                        <FaYoutubeSquare className="youtube" />
                    </a>

                    <a href="https://www.facebook.com/" target="_blank">
                        <FaFacebookSquare className="facebook" />
                    </a>

                    <a href="https://www.instagram.com/" target="_blank">
                        <FaInstagramSquare className="instagram" />
                    </a>

                    <a href="https://twitter.com/" target="_blank">
                        <FaTwitterSquare className="twitter" />
                    </a>
            </div>
            <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                </a>
            </div>
        </>
    );
};

export default SocialMedia;
