import React, { useContext } from "react";

import { UserContext } from "../../Providers/user/user.providers";

import './logout.styles.scss';

const LogOut = () => {

    const{SetLogOut} = useContext(UserContext)

    const handleSubmit = event => {

        event.preventDefault();
        localStorage.clear();
        SetLogOut();
    }

    return (
        <div className="logout-nav">
                <button className="logout-button" onSubmit={handleSubmit}>
                   LOG OUT
                </button>
            </div>
    );
};

export default LogOut;