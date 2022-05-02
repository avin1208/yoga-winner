import React, { createContext, useState } from "react";

export const CartContext = createContext({
    cartHidden: true,
    cartHidden1: true,
    toggleAddCartHidden: () => {},
    toggleSearchCartHidden: () => {}
});

const CartProvider = ({ children }) => {
    const [cartHidden, setcartHidden] = useState(true);

    const [cartHidden1, setcartHidden1] = useState(true);

    const toggleAddCartHidden = () => { setcartHidden(!cartHidden); };

    const toggleSearchCartHidden = () => { setcartHidden1(!cartHidden1)};

    return (
        <CartContext.Provider
            value={{
                toggleAddCartHidden,
                cartHidden,
                toggleSearchCartHidden,
                cartHidden1
            }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;