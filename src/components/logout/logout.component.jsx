import React, { useContext } from "react";

import { UserContext } from "../../Providers/user/user.providers";

import './logout.styles.scss';

const LogOut = () => {

    const{Logout} = useContext(UserContext);

    const handlelogout = () => {
        Logout();
    }

    return (
        <div className="logout-nav">
                <button className="logout-button" onClick={handlelogout}>
                   LOG OUT
                </button>
            </div>
    );
};

export default LogOut;