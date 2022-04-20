import React, { useState } from "react";

import './sort-drop.styles.scss';

import { FaCaretDown } from 'react-icons/fa';

const Dropsort = ({selected, setSelected}) => {
    const [active, setActive] = useState(false);
    const options = [' Relevance', 'Name, A to Z', 'Name, Z to A', 'Price, Low to High', 'Price, High to Low']
    return (
        <div className="prefer">
            <div className="dropdownn">
                <div className="dropdown-btn" onClick={() => {
                    setActive(!active)
                }}>
                    {selected} <FaCaretDown />
                </div>
                { active &&
                    (<div className="drop-content">
                    {options.map((option) =>(
                        <div className="dropd-item" onClick={() => {setSelected(option); setActive(false) } }>
                        {option}
                    </div>
                    ))}    
                    </div>)
                }
            </div>
        </div>
    );
};

export default Dropsort;