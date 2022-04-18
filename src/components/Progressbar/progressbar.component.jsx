import React from "react";

import './progressbar.styles.scss';

const Progress = () => {
    return (
        <div className="main-progress">
            <div className="progress">
                <div className="right-progress">
                    <div className="skill">
                        OUR SKILL
                    </div>
                    <div className="prestashop">
                        <h3 className="preshop">
                            PRESTASHOP
                        </h3>
                        <div className="perc">
                            100%
                        </div>
                    </div>
                    <div className="cont">
                        <div className="progres-cont">
                            <div className="prog">
                            </div>
                        </div>
                    </div>
                    <div className="photoshop">
                        <h3 className="pohop">
                            PHOTOSHOP
                        </h3>
                        <div className="percc">
                            80%
                        </div>
                    </div>
                    <div className="cont">
                        <div className="progress-cont">
                            <div className="progg">
                            </div>
                        </div>
                    </div>
                    <div className="html">
                        <h3 className="css">
                            HTML/CSS
                        </h3>
                        <div className="percr">
                            90%
                        </div>
                    </div>
                    <div className="cont">
                        <div className="progre-cont">
                            <div className="progo">
                            </div>
                        </div>
                    </div>
                    <div className="other">
                        <h3 className="op">
                            OTHER
                        </h3>
                        <div className="pr">
                            50%
                        </div>
                    </div>
                    <div className="cont">
                        <div className="progr-cont">
                            <div className="progp">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left-progress">
                    <div className="aboutus">
                        <div className="left-aboutus">
                            Aliquam ornare hendrerit augue. Cras tellus. In pulvinar lectus a est. Lorem ipsum dolor        <br />
                            sit amet.Aliquam ornare hendrerit augue. Cras tellusCras tellus.
                        </div>
                        <div className="left-aboutus">
                            Proin euismod dui purus, non lacinia ligula. Lorem ipsum dolor sit amet, consectetur  <br />
                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna    <br />
                            aliqua.Maecenas scelerisque interdum dolor in vestibulum. Proin euismod dui purus, <br />
                            non lacinia ligula luctus aIn volutpat cursus quam, a blandit neque accumsan vitae.
                        </div>
                        <div className="left-aboutus">
                        There are many variations of passages of Lorem Ipsum available, but the majority have   <br />
                        suffered alteration in some form, by injected humour, or randomised words which don't   <br />
                        look even slightly believable.There are many variations of passages of Lorem Ipsum   <br />
                        available, but the majority have suffered alteration in some form.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;