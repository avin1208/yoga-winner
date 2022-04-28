import React, { useContext, useState } from "react";

import './men-checkbox.styles.scss';

import { ItemContext } from "../../Providers/item/items.providers";


const Checkbox = () => {
    const {filterItem} = useContext(ItemContext);
    const {filterrItem} = useContext(ItemContext);
    const {filteItem} = useContext(ItemContext);
    const {ClearallItem} = useContext(ItemContext);
    const [checked, setChecked] = useState(false);
    return (
        <div className="main-check">
            <div className="drop-check">
                <div className="check-title">
                    <div className="Filter">FILTER BY</div> 
                </div>
                <div className="check-box">
                    <div className="clear-all" 
                    onChange={() => setChecked(checked)}
                    onClick={ClearallItem}>
                        x  clear all
                    </div>
                    <div className="categories">
                        <h5 className="cate">
                            CATEGORIES
                        </h5>
                        <div className="labell">
                            <div>
                                <label className="best-seller" >
                                    <input type="checkbox" 
                                    
                                   
                                    onClick={() => filterItem('BestSeller')}
                                     />
                                    BestSeller 
                                    </label>
                            </div>
                            <div>
                                <label className="collection">
                                    <input type="checkbox" 
                                    defaultChecked={checked}
                                    onChange={() => setChecked(!checked)}
                                    onClick={() => filterItem('collection')} />
                                    collection 
                                </label>
                            </div>
                            <div>
                                <label className="trending">
                                    <input type="checkbox" 
                                    defaultChecked={checked}
                                    onChange={() => setChecked(!checked)}
                                    onClick={() => filterItem('trending')} />
                                    trending
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr color="#ebebeb" />
                </div>
                <div className="check-box">
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
                                    <input type="checkbox" onClick={() => filterrItem('M')}/>
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
                    <hr color="#ebebeb" />
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
                                <label className="beige" onClick={() => filteItem('Beige')} >
                                    Beige 
                                </label>
                            </div>
                            <div>
                                <span className="color1" >
                                </span>
                                <label className="white" onClick={() => filteItem('white')} >
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

export default Checkbox;