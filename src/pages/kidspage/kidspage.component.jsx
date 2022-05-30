import React , { useContext } from "react";

import { Link } from "react-router-dom";

import './kidspage.styles.scss';

import { DropContext } from "../../Providers/drop/drop.providers";

import { CartContext } from "../../Providers/cart/cart.provider";

import Menbov from "../../components/menbox/menbox.component";

import MenDrop from "../../components/men-dropdown/men-dropdown.component";

import Ladrop from "../../components/l-dropdown/l-dropdown.component";

import Kiddrop from "../../components/kids-drop/kids-drop.component";

import Cartdrop from "../../components/cart-drop/cart-drop.component";

import Kidproduct from "../../components/kid-product/kid-product.component";

import Wcheckbox from "../../components/women-checkbox/women-checkbox.component";

const Kidspage = () => {

    const { dropHidden } = useContext(DropContext);

    const { dropHidden1 } = useContext(DropContext);

    const { dropHidden2 } = useContext(DropContext);

    const {hidden} = useContext(CartContext);
    return (
        <div className="main-pagehj">
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
            <div className=" namefg">
                <div className="back-imae">
                    <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1653892250/cropped-1900-700-775739_1_mt8st9.jpg" alt="" />
                </div>
                <div className="pagel">
                    <Link className="hm">
                        Home
                    </Link>
                    |
                    <Link className="mh">
                        Kids
                    </Link>
                </div>
            </div>
            <div className="men-side">
                <div className="men-leftt">
                    <Menbov />
                    <Wcheckbox />
                </div>
                <div className="men-rightt">
                    <Kidproduct />
                </div>
            </div>
        </div>
    );
};



export default Kidspage;

