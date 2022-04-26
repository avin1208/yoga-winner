import React, { useContext, useState } from "react";

import './men-product.styles.scss';

import { FaTh } from 'react-icons/fa';

import { FiAlignJustify } from 'react-icons/fi';

import GRID_DATA from "../../Grid.data";

import Product from "../product/product.component";

import Grid from "../mens-grid/mens-grid.component";

import Dropsort from "../sort-drop/sort-drop.component";

import { ItemContext } from "../../Providers/item/items.providers";

const Menproduct = () => {
    const {lists} = useContext(ItemContext)
    const [griddata] = useState(GRID_DATA);
    const [index, setIndex] = useState(1);
    const [selected, setSelected] = useState("");

    return (
        <div className="men-product">
            <div className="men-kj">
                <div className="men-pro">
                    <div className="men-th">
                        <div className="men-fath" onClick={() => { setIndex(1) }} >
                            <FaTh />
                        </div>
                        <div className="men-aifi" onClick={() => { setIndex(2) }} >
                            <FiAlignJustify />
                        </div>
                    </div>
                    <div className="men-j">
                        <span className="men-cen">
                            There are 9 Products.
                        </span>
                    </div>
                    <div className="box-sort">
                        <span className="sort">
                            Sort By:
                        </span>
                    <Dropsort selected={selected} setSelected={setSelected}/>
                    </div>
                </div>
                <div className="fggg" hidden={index !== 1}>
                    {
                          lists
                            .map(item => (<Product key={item.id} item={item} />
                            ))
                    }
                </div>
                <div className="ghhhg" hidden={index !== 2}>
                    {
                        griddata
                        .map(item => (<Grid key={item.id} item={item} />))
                    }
                </div>
            </div>
        </div>
    );
};

export default Menproduct;