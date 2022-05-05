import React, { createContext, useState } from "react";

export const ModalContext = createContext({
    modalHidden: true,
    // modalHidden1: true,
    toggleAddCartHidden: () => {},
    // toggleSearchCartHidden: () => {}
});

const ModalProvider = ({ children }) => {
    const [modalHidden, setmodalHidden] = useState(true);

    // const [modalHidden1, setmodalHidden1] = useState(true);

    const toggleAddCartHidden = () => { setmodalHidden(!modalHidden); };

    // const toggleSearchCartHidden = () => { setmodalHidden1(!modalHidden1)};

    return (
        <ModalContext.Provider
            value={{
                toggleAddCartHidden,
                modalHidden,
                // toggleSearchCartHidden,
                // modalHidden1
            }}>
            {children}
        </ModalContext.Provider>
    )
};

export default ModalProvider;