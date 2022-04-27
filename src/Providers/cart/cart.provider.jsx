import React, { createContext, useState } from "react";

export const CartContext = createContext({
    cartHidden: true,
    toggleAddCartHidden: () => {},
});

const CartProvider = ({ children }) => {
    const [cartHidden, setcartHidden] = useState(true);

    const toggleAddCartHidden = () => { setcartHidden(!cartHidden); };

    return (
        <CartContext.Provider
            value={{
                toggleAddCartHidden,
                cartHidden
            }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;