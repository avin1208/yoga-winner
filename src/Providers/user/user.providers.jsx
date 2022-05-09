import React, { createContext, useEffect, useState } from "react";

import { logInUser, signUpUser, setLogOut } from "./user.utils";

export const UserContext = createContext({
    user: {},
    LogInUser: () => {},
    SignUpUser: () => {},
    SetLogout: () => {}
});

const UserProvider = ({children}) => {
     
    const[user, setUser] = useState({});

    useEffect(() => {
        setUser(localStorage.getItem('user-info'))
    }, []);

    useEffect(() => {
        console.log(user);
    }, [user]);


    const LogInUser = userCredentials => setUser(logInUser(userCredentials));

    const SignUpUser = userCredentials => setUser(signUpUser(userCredentials));

    const SetLogOut = userCredentials => setUser(setLogOut(userCredentials));

    return(
        <UserContext.Provider
        value={{
            user,
            LogInUser,
            SignUpUser,
            SetLogOut
        }}>
         {children}
        </UserContext.Provider>
    );
};

export default UserProvider;