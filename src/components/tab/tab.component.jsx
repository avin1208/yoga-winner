import React, { useState } from "react";

import { FaTh } from "react-icons/fa";

import Menlist from "../men-list/men-list.component";

import Grid from "../mens-grid/mens-grid.component";

import { FiAlignJustify } from "react-icons/fi";

import './tab.styles.scss';

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="containerhj">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    <FaTh />
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                <FiAlignJustify />
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <Menlist />
                </div>
                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <Grid />
                </div>
            </div>
        </div>
    );
}

export default Tabs;
