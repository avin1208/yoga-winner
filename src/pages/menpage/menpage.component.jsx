import React, { useContext }  from "react";

import { Link } from "react-router-dom";

import './menpage.styles.scss';

import Menbov from "../../components/menbox/menbox.component";

import Menproduct from "../../components/men-product/men-product.component";

import Checkbox from "../../components/men-checkbox/men-checkbox.component";

import MenDrop from "../../components/men-dropdown/men-dropdown.component";

import Ladrop from "../../components/l-dropdown/l-dropdown.component";

import Kiddrop from "../../components/kids-drop/kids-drop.component";

import { connect } from "react-redux";

import Cartdrop from "../../components/cart-drop/cart-drop.component";

import { DropContext } from "../../Providers/drop/drop.providers";



const Menpagee = ( { hidden4, setShowModal } ) => {

    const { dropHidden } = useContext(DropContext);

    const { dropHidden1 } = useContext(DropContext);

    const { dropHidden2 } = useContext(DropContext);
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
            hidden4 ? null : <Cartdrop />
        }
            <div className="namefg">
                <div className="back-imae">
                    <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldstaticblocks/images/banner-top.jpg" alt="" />
                </div>
                <div className="pagel">
                    <Link className="hm">
                        Home
                    </Link>
                    |
                    <Link className="mh">
                        Men
                    </Link>
                </div>
            </div>
            <div className="men-side">
                <div className="men-leftt">
                    <Menbov />
                    <Checkbox />
                </div>
                <div className="men-rightt">
                    <Menproduct setShowModal={setShowModal}/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ cart: { hidden4 }}) => ({
  hidden4
})

export default connect(mapStateToProps)(Menpagee);

