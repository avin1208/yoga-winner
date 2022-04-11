import React from "react";

import './footer.styles.scss';

import { GoLocation } from 'react-icons/go';

import { IoIosCall } from 'react-icons/io';

import { GrMail } from 'react-icons/gr';

import {IoMdTime} from 'react-icons/io';
import FooterCenter from "../footer-center/footer-center.component";
import FooterRight from "../footer-right/footer-right.component";



const Footer = () => {
    return (
        <div className="footer-main">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-left">
                        <div className="contact-left">
                            <h3>CONATCT US</h3>
                            <ul className="icon-footer">
                                <li>
                                    <div className="footer-cont">
                                        <div className="location">
                                            <GoLocation size="1em" />
                                        </div>
                                        <div className="details">
                                            <span className="location-title">Address:</span>
                                            <span>1234 Heaven Streets, NewYork</span>
                                        </div>
                                    </div>
                                    <div className="footer-cont">
                                        <div className="conatct-call">
                                            <IoIosCall size="1em" />
                                        </div>
                                        <div className="details">
                                            <span className="location-title">Phone:</span>
                                            <span>999988882222</span>
                                        </div>
                                    </div>
                                    <div className="footer-cont">
                                        <div className="gmail">
                                            <GrMail size="1em" />
                                        </div>
                                        <div className="details">
                                            <span className="location-title">Mail:</span>
                                            <span>avin12.tcs@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="footer-cont">
                                        <div className="time-open">
                                            <IoMdTime size="1em" />
                                        </div>
                                        <div className="details">
                                            <span className="location-title">Opening Time:</span>
                                            <span>Mon-Sun ...8:00 Am-5:00 PM</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                      </div>
                      <div className="footer-adress">
                      © 2017. All Rights Reserved. Designed by 
                      <a href="http://fieldthemes.com/">
                       Field Thems
                       </a>
                       </div>
                      </div> 
                     <FooterCenter />
                     <FooterRight />
                </div>
               
            </div>
        </div>
    );
};

export default Footer;