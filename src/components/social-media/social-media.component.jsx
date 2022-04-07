import React from "react";

import './social-media.styles.scss'

import { TiSocialYoutubeCircular } from 'react-icons/ti';

import { FaFacebookF } from 'react-icons/fa';

import { AiOutlineTwitter } from 'react-icons/ai';

import { FaLinkedinIn } from 'react-icons/fa';

import { AiOutlineGooglePlus } from 'react-icons/ai';

const SocialMedia = () => {
    return (
        <div className="social-media">
            <div className="facebook">
                <FaFacebookF size="0.5em" color="grey" />
            </div>
            <div className="twitter">
                <AiOutlineTwitter size="0.5em" color="grey" />
            </div>
            <div className="youtube">
                <TiSocialYoutubeCircular size="0.8em" color="grey" />
            </div>
            <div className="link-in">
                <FaLinkedinIn size="0.5em" color="grey" />
            </div>
            <div className="google">
                <AiOutlineGooglePlus size="0.8em" color="grey" />
            </div>
        </div>
    )
};

export default SocialMedia;
