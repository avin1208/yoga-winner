import React, { createContext, useState } from "react";

export const DropContext = createContext({
    dropHidden: true,
    dropHidden1: true,
    dropHidden2: true,
    toggleMenHidden: () => {},
    toggleWomenHidden: () => {},
    toggleKidHidden: () => {}
});

const DropProvider = ({ children }) => {
    const [dropHidden, setDropHidden] = useState(true);

    const [dropHidden1, setDropHidden1] = useState(true);

    const [dropHidden2, setDropHidden2] = useState(true);

    const toggleMenHidden = () => {
        setDropHidden(!dropHidden);
    };

    const toggleWomenHidden = () => {
        setDropHidden1(!dropHidden1);
    }

    const toggleKidHidden = () => {
        setDropHidden2(!dropHidden2)
    }

    return (
        <DropContext.Provider
            value={{
                dropHidden,
                dropHidden1,
                dropHidden2,
                toggleMenHidden,
                toggleWomenHidden,
                toggleKidHidden
            }}>
            {children}
        </DropContext.Provider>
    )
};


export default DropProvider;