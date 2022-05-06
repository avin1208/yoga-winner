import React, { createContext, useEffect, useState } from "react";

import { logInUser, signUpUser } from "./user.utils";

export const UserContext = createContext({
    user: {},
    LogInUser: () => {},
    SignUpUser: () => {}
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

    return(
        <UserContext.Provider
        value={{
            user,
            LogInUser,
            SignUpUser
        }}>
         {children}
        </UserContext.Provider>
    );
};

export default UserProvider;