import React, { useContext, useState } from "react";

import { FaTh } from "react-icons/fa";

import { FiAlignJustify } from "react-icons/fi";

import Product from "../product/product.component";

import Grid from "../mens-grid/mens-grid.component";

import GRID_DATA from "../../Grid.data";

import { ItemContext } from "../../Providers/item/items.providers";

import Dropsort from "../sort-drop/sort-drop.component";

import './kid-product.styles.scss';

const Kidproduct = () => {
    const {lists} = useContext(ItemContext);
    const [griddata] = useState(GRID_DATA);
    const [index, setIndex] = useState(1);
    const [selected, setSelected] = useState("")
    return (
        <div className="kid-product">
            <div className="kid-kj">
                <div className="kid-pro">
                    <div className="kid-th">
                        <div className="kid-fath" onClick={() => { setIndex(1) }}>
                            <FaTh />
                        </div>
                        <div className="kid-aifi" onClick={() => { setIndex(2) }}>
                            <FiAlignJustify />
                        </div>
                    </div>
                    <div className="kid-j">
                        <span className="kid-cen">
                            There are 9 Products.
                        </span>
                    </div>
                    <div className="kbox-sort">
                        <span className="sor">
                            Sort By :
                        </span>
                        <Dropsort selected={selected} setSelected={setSelected}/>
                    </div>
                </div>
                <div className="fd" hidden={index !== 1}>
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

export default Kidproduct;