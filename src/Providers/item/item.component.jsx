import React, { createContext, useState } from "react";

import PRODUCT_DATA from "../../product.data";

export const ItemContext = createContext({
    items: [],
    filterItem: () => {},
});

const ItemProvider = ({ children }) => {
    const [items, setItems] = useState(PRODUCT_DATA);

    const filterItem = (categItem) => {
        const updatedItems = PRODUCT_DATA.filter((curElem) => {
            return curElem.category === categItem;
        })
        setItems(updatedItems);
    }

    return (
        <ItemContext.Provider
            value={{
                items,
                filterItem
            }}
        >
            {children}
        </ItemContext.Provider>
    );
};

export default ItemProvider;