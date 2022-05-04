import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";

import './sign-up.styles.scss';

const SignUp = () => {

    const [modal, setModal] = useState(false);

    const [userCredentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();


        if (password !== confirmPassword) {
            alert("password don't match")
            return;
        }

        let userCredentials = { name, email, password, confirmPassword }
        console.log(userCredentials);
        fetch("https://winner-yoga.herokuapp.com/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(userCredentials)
        })
            .then(data => { return data.json() })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value })
};


const togglesModal = () => {
    setModal(!modal);
}


return (
    <div>
        {
            modal &&
            (
                <div className="main-sign-up">
                    <div className="modal-sign-up">
                        <div className="sign-up-header">
                            <button className="close" onClick={togglesModal}>
                                X
                            </button>
                        </div>
                        <div className="signup-body">
                            <div className="signup-title">
                                SIGN UP
                            </div>
                            <form className="sign-up-form" onSubmit={handleSubmit}>
                                <FormInput
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={handleChange}
                                    label='Name'
                                    required
                                />
                                <FormInput
                                    name="email"
                                    type="email"
                                    value={email}
                                    handleChange={handleChange}
                                    label='Email'
                                    requried
                                />
                                <FormInput
                                    name="password"
                                    type="password"
                                    value={password}
                                    handleChange={handleChange}
                                    label='Password'
                                    required
                                />
                                <FormInput
                                    name="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    handleChange={handleChange}
                                    label="Confirm Password"
                                    required
                                />
                                <button className="sign-up-btn">
                                    SIGN UP
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
        <div className="sign-up-nav" onClick={togglesModal}>
            <button className="sign-up-button">
                SIGN UP
            </button>
        </div>
    </div>
);
};

export default SignUp;


