import React from "react";

import './aboutuspage.styles.scss';

import { Link } from "react-router-dom";

import Progress from "../../components/Progressbar/progressbar.component";

import Ourteam from "../../components/ourteam/ourteam.component";

import MenDrop from "../../components/men-dropdown/men-dropdown.component";

import Ladrop from "../../components/l-dropdown/l-dropdown.component";

import Kiddrop from "../../components/kids-drop/kids-drop.component";

import { connect } from "react-redux";

import Cartdrop from "../../components/cart-drop/cart-drop.component";

const Aboutus = ({ hidden, hidden2, hidden3, hidden4 }) => {
    return (
        <div className="main-about">
        {
            hidden ? null : <MenDrop />
        }
        {
            hidden2 ? null : <Ladrop />
        }
        {
            hidden3 ? null : <Kiddrop />
        }
        {
            hidden4 ? null : <Cartdrop />
        }
            <div className="sec-about">
                <div className="img-about">
                    <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldstaticblocks/images/banner-top.jpg" alt="" />
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
                                “ Duis dictum, neque at hendrerit euismod, elit nulla mattis mi, vel auctor sem dolor nec   <br />
                                nisl. Etiam hendrerit arcu pretium, aliquet nulla eu, placerat ipsum. Nullam suscipit nulla <br />
                                a sapien gravida euismod. Fusce quis ligula quis dui aliquam posuere vel sed lectus.        <br />
                                Duis dictum, neque at hendrerit euismod, elit nulla mattis mi”                              <br />
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

const mapStateToProps = ({ men: { hidden }, lad: { hidden2 }, kid: { hidden3 }, cart: { hidden4 } }) => ({
    hidden, hidden2, hidden3, hidden4
})

export default connect(mapStateToProps)(Aboutus);