import React, { useContext, useState } from "react";

import { FaTh } from "react-icons/fa";

import { FiAlignJustify } from "react-icons/fi";

import GRID_DATA from "../../Grid.data";

import Product from '../product/product.component';

import Grid from "../mens-grid/mens-grid.component";

import { ItemContext } from "../../Providers/item/items.providers";

import Dropsort from "../sort-drop/sort-drop.component";

import './women-product.styles.scss';

const Womenproduct = () => {
    const {lists} = useContext(ItemContext);
    const [griddata] = useState(GRID_DATA);
    const [index, setIndex] = useState(1);
    const [selected, setSelected] = useState("");
    return (
        <div className="women-product">
            <div className="women-kj">
                <div className="women-pro">
                    <div className="women-th">
                        <div className="women-fath" onClick={() => { setIndex(1) }}>
                            <FaTh />
                        </div>
                        <div className="women-aifi" onClick={() => { setIndex(2) }}>
                            <FiAlignJustify />
                        </div>
                    </div>
                    <div className="women-j">
                        <span className="women-cen">
                            There are 9 Products.
                        </span>
                    </div>
                    <div className="wbox-sort">
                     <span className="sortt">
                      Sort By :
                     </span>
                     <Dropsort selected={selected} setSelected={setSelected}/>
                    </div>
                </div>
                <div className="fg" hidden={index !== 1}>
                {
                    lists
                    .map(item => (<Product key={item.id} item={item} />
                    ))
                }
                </div>
                <div className="gh" hidden={index !== 2}>
                {
                    griddata
                    .map(item => (<Grid key={item.id} item={item} />
                    ))
                }
                </div>
            </div>
        </div>
    );
};

export default Womenproduct;