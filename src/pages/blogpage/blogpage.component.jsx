import React, { useContext }  from "react";

import './blogpage.styles.scss';

import { Link } from "react-router-dom";

import Menbov from "../../components/menbox/menbox.component";

import Blogpost from "../../components/blog-post/blog-post.component";

import Blogdat from "../../components/blog-data/blog-data.component";

import MenDrop from "../../components/men-dropdown/men-dropdown.component";

import Ladrop from "../../components/l-dropdown/l-dropdown.component";

import Kiddrop from "../../components/kids-drop/kids-drop.component";

import Cartdrop from '../../components/cart-drop/cart-drop.component';

import { DropContext } from "../../Providers/drop/drop.providers";

import { CartContext } from "../../Providers/cart/cart.provider";

const Blogpage = () => {

    const { dropHidden } = useContext(DropContext);

    const { dropHidden1 } = useContext(DropContext);

    const { dropHidden2 } = useContext(DropContext);

    const {hidden} = useContext(CartContext);

    return (
        <div className="main-blogp">
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


export default Blogpage;