import React from "react";

import './blogpage.styles.scss';

import { Link } from "react-router-dom";

import Menbov from "../../components/menbox/menbox.component";

import Blogpost from "../../components/blog-post/blog-post.component";

import Blogdat from "../../components/blog-data/blog-data.component";

import MenDrop from "../../components/men-dropdown/men-dropdown.component";

import Ladrop from "../../components/l-dropdown/l-dropdown.component";

import Kiddrop from "../../components/kids-drop/kids-drop.component";

import { connect } from "react-redux";

const Blogpage = ({ hidden, hidden2, hidden3 }) => {
    return (
        <div className="main-blogp">
        {
            hidden ? null : <MenDrop />
        }
        {
            hidden2 ? null : <Ladrop />
        }
        {
            hidden3 ? null : <Kiddrop />
        }
            <div className="sec-blog">
                <div className="th-blog">
                    <div className="blog-imgn">
                    <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldstaticblocks/images/banner-top.jpg" alt="" />
                    </div>
                    <div className="pagel">
                        <Link className="hm" to='/home'>
                            Home
                        </Link>
                        |
                        <Link className="mh">
                            All Blog News
                        </Link>
                    </div>
                    <div className="blog-shoow">
                        <div className="blogshow-left">
                            <Menbov />
                            <Blogpost />
                        </div>
                        <div className="blogshoow-right">
                            <Blogdat />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ men: { hidden }, lad: { hidden2 }, kid: { hidden3 } }) => ({
    hidden, hidden2, hidden3
})


export default connect(mapStateToProps)(Blogpage);