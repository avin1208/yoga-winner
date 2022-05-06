import React, { useContext, useState } from "react";

import FormInput from "../form-input/form-input.component";

import { withRouter } from "react-router-dom";

import './login.styles.scss';

import { UserContext } from "../../Providers/user/user.providers";

const LogIn = ({ history }) => {

    const [modal, setModal] = useState(false);

    const {LogInUser} = useContext(UserContext);

    const [userCredentials, setCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    };

    const toggleModal = () => {
        setModal(!modal);
    };


    const handleSubmit = event => {

         event.preventDefault();

         LogInUser(userCredentials);

        // fetch("https://winner-yoga.herokuapp.com/login", {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": 'application/json'
        //     },
        //     body: JSON.stringify(userCredentials)
        // })

        // .then(async (res) => {

        //     const resData = await res.json();
        //     console.log(resData);

        //     if (resData.status === 0) {
        //         return window.alert(resData.ErrorDescription || resData.message);
        //     }
            //  setModal(!modal);
        //     localStorage.setItem("user-info",JSON.stringify(resData));
            
        //     return window.alert(resData.message);

        // }).catch(err => {
        //     console.log(err);
        // })
    }
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
                                    SIGN IN
                                </div>
                                <form className="login-form" onSubmit={handleSubmit}>
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
                                        SIGN IN
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
                    SIGN IN
                </button>
            </div>
        </div>
    );
};

export default withRouter(LogIn);