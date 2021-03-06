import React, { useContext }  from "react";

import './aboutuspage.styles.scss';

import { Link } from "react-router-dom";

import Progress from "../../components/Progressbar/progressbar.component";

import Ourteam from "../../components/ourteam/ourteam.component";

import MenDrop from "../../components/men-dropdown/men-dropdown.component";

import Ladrop from "../../components/l-dropdown/l-dropdown.component";

import Kiddrop from "../../components/kids-drop/kids-drop.component";

import Cartdrop from "../../components/cart-drop/cart-drop.component";

import { DropContext } from "../../Providers/drop/drop.providers";

import { CartContext } from "../../Providers/cart/cart.provider";

const Aboutus = () => {

    const { dropHidden } = useContext(DropContext);

    const { dropHidden1 } = useContext(DropContext);

    const { dropHidden2 } = useContext(DropContext);

    const {hidden} = useContext(CartContext);
    return (
        <div className="main-about">
        {
            dropHidden ? null : <MenDrop />
        }
        {
            dropHidden1 ? null : <Ladrop />
        }
        {
            dropHidden2 ? null : <Kiddrop />
        }
        {
            hidden ? null : <Cartdrop />
        }
            <div className="sec-about">
                <div className="img-about">
                    <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1653892250/cropped-1900-700-775739_1_mt8st9.jpg" alt="" />
                </div>
                <div className="pagel">
                    <Link className="hm" >
                        Home
                    </Link>
                    |
                    <Link className="mh">
                        About us
                    </Link>
                </div>
                <div className="body-about">
                    <div className="body-title">
                        ABOUT US
                    </div>
                    <hr color="#ebebeb" />
                    <div className="story">
                        OUR STORY
                    </div>
                    <div className="main-aboutus">
                        <div className="aboutus">
                            <div className="left-aboutus">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent    <br />
                                mattis commyolk augue. Aliquam ornare hendrerit augue. Cras tellus. In pulvinar lectus      <br />
                                a est. Lorem ipsum dolor sit amet.
                            </div>                                                          <br />
                            <div className="left-aboutus">
                                ??? Duis dictum, neque at hendrerit euismod, elit nulla mattis mi, vel auctor sem dolor nec   <br />
                                nisl. Etiam hendrerit arcu pretium, aliquet nulla eu, placerat ipsum. Nullam suscipit nulla <br />
                                a sapien gravida euismod. Fusce quis ligula quis dui aliquam posuere vel sed lectus.        <br />
                                Duis dictum, neque at hendrerit euismod, elit nulla mattis mi???                              <br />
                            </div>
                            <div className="left-aboutus">
                                Etiam nulla nunc, aliquet vel metus nec, scelerisque tempus enim. Sed eget blandit          <br />
                                lectus. Donec facilisis ornare turpis id pretium. Maecenas scelerisque interdum dolor in    <br />
                                vestibulum. Proin euismod dui purus, non lacinia ligula luctus aIn volutpat cursus quam,    <br />
                                a blandit neque accumsan vitae. Maecenas scelerisque interdum dolor in vestibulum.
                            </div>
                        </div>
                        <div className="right-aboutus">
                            <img src="https://demo.fieldthemes.com/ps_winner/home2/img/cms/cms-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Progress />
            <Ourteam />
        </div>
    );
};



export default Aboutus;