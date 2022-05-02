import React, { createContext, useState } from "react";

import PRODUCT_DATA from "../../product.data";

export const ItemContext = createContext({
    lists: [PRODUCT_DATA],
    filterItem: () => {},
    filterrItem: () => {},
    filteItem: () => {},
    ClearallItem: () => {},
    filter:  () => {}
});

const ItemProvider = ({ children }) => {

    const [lists,setlists] = useState(PRODUCT_DATA);
    const [listsBackup] = useState(PRODUCT_DATA);
    const [setSearchInput] = useState('');
  

    const filterItem = (categItem) => {
        const updatedItems = PRODUCT_DATA.filter((curElem) => {
            return curElem.category === categItem;
        })
        setlists(updatedItems);
    }
    const filterrItem = (sizeItem) => {
        const updatedItems = PRODUCT_DATA.filter((curElem) => {
            return curElem.size === sizeItem;
        })
        setlists(updatedItems);
    }
    const filteItem = (colorItem) => {
        const updatedItems = PRODUCT_DATA.filter((curElem) => {
            return curElem.color === colorItem;
        })
        setlists(updatedItems);
    }
    const ClearallItem = () => {
        setlists(PRODUCT_DATA);
    }

    const filter = (e) => {
        const keyword = e.target.value; 
     
        if (keyword !== '') {
            console.log(keyword,'searchInput');

            const filteredData = listsBackup.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(keyword.toLowerCase())
            })
            console.log(filteredData,'filteredDatafilteredData');
            setlists(filteredData);  
        } 
        else {
            setlists(PRODUCT_DATA);
        }
    setSearchInput(keyword);
  }

    return (
        <ItemContext.Provider
            value={{
                lists,
                filterItem,
                filterrItem,
                filteItem,
                ClearallItem,
                filter
            }}
        >
            {children}
        </ItemContext.Provider>
    );
};

export default ItemProvider;