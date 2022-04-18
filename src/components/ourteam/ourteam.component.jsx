import React from "react";

import './ourteam.styles.scss';

const Ourteam = () => {
    return (
        <div className="ourteam">
            <div className="story">
                MEET OUR TEAM
            </div>
            <div className="member">
                <div className="first-men">
                    <img src="https://demo.fieldthemes.com/ps_winner/home2/img/cms/team-1.jpg" alt="" />
                    <div className="men-tt">BRYAN JHONSON</div>
                    <div className="men-su">CEO & Co-Founder</div>
                </div>
                <div className="sec-men">
                    <img src="https://demo.fieldthemes.com/ps_winner/home2/img/cms/team-2.jpg" alt="" />
                    <div className="sec-tt">JORDAN MARK</div>
                    <div className="sec-su">Designer</div>
                </div>
                <div className="td-men">
                    <img src="https://demo.fieldthemes.com/ps_winner/home2/img/cms/team-3.jpg" alt="" />
                    <div className="td-tt">ROKAN TECH</div>
                    <div className="td-su">Developer</div>
                </div>
                <div className="fr-men">
                    <img src="https://demo.fieldthemes.com/ps_winner/home2/img/cms/team-4.jpg" alt="" />
                    <div className="fr-tt">MARIANE SMITH</div>
                    <div className="fr-su">Customer Care</div>
                </div>
            </div>
        </div>
    );
};

export default Ourteam;