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
                    <a href="https://www.youtube.com/">
                        <FaYoutubeSquare className="youtube" />
                    </a>

                    <a href="https://www.facebook.com/">
                        <FaFacebookSquare className="facebook" />
                    </a>

                    <a href="https://www.instagram.com/">
                        <FaInstagramSquare className="instagram" />
                    </a>

                    <a href="https://twitter.com/">
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
