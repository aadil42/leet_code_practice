// React doesn't exist in this repo so it's just  the code.
// if you want this code to run, you have to create React environment.

import React, { useState } from 'react';

/**
 * @return {JSX.Element}
 */

export const SignUpFormValidation = () => {
    
    const [userName, setUserName] = useState ("");
    const [password, setPassword] = useState("");

    const [userNameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [validationMsg, setValidationMsg] = useState("");

    const inputStyle = {
    marginBottom: '25px', 
    };

    const labelStyle = {
        marginBottom: '5px', 
        display: 'block', 
    };

    const error = {
        color: "red"
    }

    const success = {
        color: "green"
    }

    const userNameChangeHandler = (e) => {
        setUserName(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        // if userName is empty
        if(!userName) {
            setUsernameError("Username is required");
        } 

        // if password is empty
        if(!password) {
            setPasswordError("Password is required");
        } 

        const isUserNameValid = /^[a-zA-Z0-9]+$/.test(userName); 
        // if userName is not valid
        if(userName && !isUserNameValid) {
            setUsernameError("Username must contain only alphanumeric characters");
        }

        const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
        // if password is not valid.
        if(password && !isPasswordValid) {
            setPasswordError("Password must contain at least 8 characters, with uppercase, lowercase, and digit(s)");
        } 

        if(userName && isUserNameValid) {
            setUsernameError("");
        }
        if(password && isPasswordValid) {
            setPasswordError("");
        }

        if(!userName || !password || !isUserNameValid || !isPasswordValid) {
            setValidationMsg("");
            return;
        } 

        // all test pass set success msg
        setValidationMsg("Sign Up Successful");
    }

    return (
    <form onSubmit={submitHandler}>
            <div>
                <label style={labelStyle} 
                       htmlFor="username">Username:</label>
                <input style={inputStyle} 
                       placeholder="Enter your username" 
                       name="username" 
                       id="username"
                       value={userName}
                       onChange={userNameChangeHandler}
                        />
                <p className={error}>{userNameError}</p>        
            </div>
            <div>
                <label style={labelStyle}
                       htmlFor="password">Password:</label>
                <input style={inputStyle} 
                       placeholder="Enter your password" 
                       name="password" 
                       id="password" 
                       type="password"
                       value={password}
                       onChange={passwordChangeHandler}
                        />
                <p className={error}>{passwordError}</p>
            </div>
            <p className={success}>{validationMsg}</p>
            <button type="submit"> Sign up </button>
        </form>
    );
}