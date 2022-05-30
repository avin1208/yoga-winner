import React, { useState } from "react";

import GoogleLogin, { GoogleLogout } from "react-google-login";

const LogIng = () => {

    const clientId = "994871033836-jl00tt58hcv27anp15rdt6bo6q9hs7s7.apps.googleusercontent.com";

    const [showLogInButton, setShowLogInButton] = useState(true);

    const [showLogOutButton, setShowLogOutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log("Login Success:", res.profileObj);
        setShowLogInButton(false);
        setShowLogOutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("you have been logout succesfully.");
        console.clear();
        setShowLogInButton(true);
        setShowLogOutButton(false);
    };

    return (
        <div>
            {
                showLogInButton ?
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign In With Google"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    /> : null}

            {
                showLogOutButton ?
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="LogOut"
                        onLogoutSuccess={onSignoutSuccess}
                    >
                    </GoogleLogout> : null
            }
        </div>
    );
};

export default LogIng;