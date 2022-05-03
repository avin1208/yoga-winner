import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";

import './login.styles.scss';

const LogIn = () => {

    const [modal, setModal] = useState(false);

    const [userCredentials, setCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    };

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <div>
            {modal &&
                (
                    <div className="main-login">
                        <div className="modal-login">
                            <div className="login-header">
                                <button className="close" onClick={toggleModal}>
                                    X
                                </button>
                            </div>
                            <div className="login-body">
                                <div className="login-title">
                                    LOG IN
                                </div>
                                <form className="login-form">
                                    <FormInput
                                        name="email"
                                        type="email"
                                        value={email}
                                        handleChange={handleChange}
                                        label='Email'
                                        required
                                    />
                                    <FormInput
                                        name="password"
                                        type="password"
                                        value={password}
                                        handleChange={handleChange}
                                        label='Password'
                                        required
                                    />
                                    <div className="sub-login">
                                        <p className="for-login">Forgot Password</p>
                                        <p className="reset-login">Reset It</p>
                                    </div>
                                    <button className="login-btn">
                                        LOG IN
                                    </button>
                                    <p className="or-login">OR</p>
                                    <div className="login-with">
                                        <div className="login-google">
                                            <img src="https://i.postimg.cc/tg01f82L/googlr.png" alt="icon" />
                                            <p className="sigin">Sign In With Google</p>
                                        </div>
                                        <div className="login-facebook">
                                            <img src="https://i.postimg.cc/wjq4NbXY/fb.png" alt="icon" />
                                            <p className="sigin">Sign In With Facebook</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            <div className="login-nav">
                <button className="login-button" onClick={toggleModal}>
                    Log In
                </button>
            </div>
        </div>
    );
};

export default LogIn;