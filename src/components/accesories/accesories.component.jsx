import React, { useContext, useState } from "react";

import { FaTh } from "react-icons/fa";

import { FiAlignJustify } from "react-icons/fi";

import GRID_DATA from "../../Grid.data";

import { ItemContext } from "../../Providers/item/items.providers";

import Dropsort from "../sort-drop/sort-drop.component";

import './accesories.styles.scss';

import Grid from "../mens-grid/mens-grid.component";

import Product from "../product/product.component";

const Accesoriesproduct = () => {
    const {lists} = useContext(ItemContext)
    const [griddata] = useState(GRID_DATA);
    const [index, setIndex] = useState(1);
    const [selected, setSelected] = useState("")
    return (
        <div className="acce-product">
            <div className="acce-kj">
                <div className="acce-pro">
                    <div className="acce-th">
                        <div className="acce-fath" onClick={() => { setIndex(1) }} >
                            <FaTh />
                        </div>
                        <div className="acce-aifi" onClick={() => { setIndex(2) }} >
                            <FiAlignJustify />
                        </div>
                    </div>
                    <div className="acce-j">
                        <span className="acce-cen">
                            There are 9 Products.
                        </span>
                    </div>
                    <div className="box-sor">
                        <span className="so">
                            Sort By:
                        </span>
                        <Dropsort selected={selected} setSelected={setSelected}/>
                    </div>
                </div>
                <div className="fl" hidden={index !== 1}>  
                {
                    lists
                    .map(item => (<Product key={item.id} item={item} />
                    ))
                }
                </div>
                <div className="gg" hidden={index !== 2}>
                {
                    griddata
                    .map(item => (<Grid key={item.id} item={item} />))
                }
                </div>
            </div>
        </div>
    );
};


export default Accesoriesproduct;