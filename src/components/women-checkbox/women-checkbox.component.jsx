import React, {useContext} from "react";

import './women-checkbox.styles.scss';

import { ItemContext } from "../../Providers/item/items.providers";

const Wcheckbox = () => {
    const {filterrItem} = useContext(ItemContext);
    const {filteItem} = useContext(ItemContext);
    const {ClearallItem} = useContext(ItemContext);
    return (
        <div className="main-wcheck">
            <div className="drop-wcheck">
                <div className="wcheck-title">
                    <div className="Filterw">
                        FILTER BY
                    </div>
                </div>
                <div className="check-boxw">
                 <div className="clear-allw" onClick={ClearallItem}>
                 x clear all
                 </div>
                 <div className="sizee">
                        <h5 className="siz">
                            SIZE
                        </h5>
                        <div className="labell">
                            <div>
                                <label className="s">
                                    <input type="checkbox" onClick={() => filterrItem('S')} />
                                    S 
                                </label>
                            </div>
                            <div>
                                <label className="m">
                                    <input type="checkbox" onClick={() => filterrItem('M')} />
                                    M 
                                </label>
                            </div>
                            <div>
                                <label className="l">
                                    <input type="checkbox" onClick={() => filterrItem('L')}/>
                                    L 
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="check-box">
                    <div className="colorr">
                        <h5 className="col">
                            COLOR
                        </h5>
                        <div className="labell">
                            <div>
                                <span className="color" >
                                </span>
                                <label className="beige" onClick={() => filteItem('Beige')}  >
                                    Beige 
                                </label>
                            </div>
                            <div>
                                <span className="color1" >
                                </span>
                                <label className="white"  onClick={() => filteItem('white')}>
                                    White 
                                </label>
                            </div>
                            <div>
                                <span className="color2" >
                                </span>
                                <label className="black" onClick={() => filteItem('Black')} >
                                    Black 
                                </label>
                            </div>
                            <div>
                                <span className="color3" >
                                </span>
                                <label className="orange" onClick={() => filteItem('Orange')} >
                                    Orange 
                                </label>
                            </div>
                            <div>
                                <span className="color4" >
                                </span>
                                <label className="blue" onClick={() => filteItem('Blue')} >
                                    Blue 
                                </label>
                            </div>
                            <div>
                                <span className="color5" >
                                </span>
                                <label className="green" onClick={() => filteItem('Green')} >
                                    Green 
                                </label>
                            </div>
                            <div>
                                <span className="color6" >
                                </span>
                                <label className="yellow" onClick={() => filteItem('Yellow')} >
                                    Yellow 
                                </label>
                            </div>
                            <div>
                                <span className="color7" >
                                </span>
                                <label className="pink" onClick={() => filteItem('Pink')} >
                                    Pink 
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sell-ime">
                <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldstaticblocks/images/bn_left.jpg" alt="" />
            </div>
        </div>
    );
};

export default Wcheckbox;