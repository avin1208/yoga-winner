import React, { createContext, useState } from "react";

import GRID_DATA from "../../Grid.data";

export const GridContext = createContext({
    lists: [GRID_DATA],
    filteruItem: () => {},
    filterrItem: () => {},
    filteItem: () => {},
    ClearallItem: () => {},
    filter:  () => {}
});

const GridProvider = ({ children }) => {

    const [lists,setlists] = useState(GRID_DATA);
    const [listsBackup] = useState(GRID_DATA);
    const [setSearchInput] = useState('');
  

    const filteruItem = (categItem) => {
        const updatedItems = GRID_DATA.filter((curElem) => {
            return curElem.category === categItem;
        })
        setlists(updatedItems);
    }
    const filterrItem = (sizeItem) => {
        const updatedItems = GRID_DATA.filter((curElem) => {
            return curElem.size === sizeItem;
        })
        setlists(updatedItems);
    }
    const filteItem = (colorItem) => {
        const updatedItems = GRID_DATA.filter((curElem) => {
            return curElem.color === colorItem;
        })
        setlists(updatedItems);
    }
    const ClearallItem = () => {
        setlists(GRID_DATA);
    }

    const filter = (e) => {
        const keyword = e.target.value; 
     
        if (keyword !== '') {
            const filteredData = listsBackup.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(keyword.toLowerCase())
            })
            setlists(filteredData);  
        } 
        else {
            setlists(GRID_DATA);
        }
    setSearchInput(keyword);
  }

    return (
        <GridContext.Provider
            value={{
                lists,
                filteruItem,
                filterrItem,
                filteItem,
                ClearallItem,
                filter
            }}
        >
            {children}
        </GridContext.Provider>
    );
};

export default GridProvider;