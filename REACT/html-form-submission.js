// React doesn't exist in this repo so it's just  the code.
// if you want this code to run, you have to create React environment.

import React, { useState } from 'react';

/** 
 * @return {JSX.Element}
 */
export const FormHandler0 = () => {
    
    const inputStyle = {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    };

    const buttonStyle = {
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    };


    const [formData, setFormData] = useState({name: "", message: ""});
    const [displayForm, setDisplayForm] = useState(true);
    const [msg, setMsg] = useState("");

    const formStyle = {

    display: (displayForm && 'flex') || "none",
    flexDirection: 'column',
    maxWidth: '300px',
    margin: 'auto',
    };


    const getResponse = async (formData) => {
        try {
            const response = await fetch("/contact-us", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            return result.ok;
        } catch(error) {
            return false;
        }
    }

    const onChangeHandler = (e) => {

        const {name, value} = e.target;

        setFormData((preData) => {
            return {...preData, [name]: value}
        });
    }

    const submitHandler = (e) => {

        e.preventDefault();

        const sendRequest = async (formData) => {
            const response = await getResponse(formData);
            if(response) {
                setDisplayForm(false);
                setMsg("Thank you");
                return;
            } 
            setMsg("Something went wrong");
        }

        sendRequest(formData);
    }

    return (
        <>
            <form onSubmit={submitHandler} style={formStyle}>
                <input style={inputStyle} 
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        onChange={onChangeHandler}
                        />
                <textarea rows="5" 
                            style={inputStyle} 
                            type="text" 
                            placeholder="Feedback message" 
                            name="message" 
                            onChange={onChangeHandler}
                            />
                <button style={buttonStyle} type="submit">Send</button>
            </form>
            <p>{msg}</p>
        </>
    );
}

// second time solved.///////////////////////////////////////////////////////
import React, { useState, useRef } from 'react';

/** 
 * @return {JSX.Element}
 */

export const FormHandler = () => {
    
    const nameInput = useRef();
    const msgInput = useRef();
    const [submitMsg, setSubmitMsg] = useState(null);

    const submitHandler = (e) => {

        e.preventDefault();

        const name = nameInput.current.value;
        const msg = msgInput.current.value;

        const formData = {
            name: name,
            message:  msg
        }

        const p1 = new Promise((resolve, reject) => {
            resolve(fetch("/contact-us", {
                method: "POST",
                headers: {
                     'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            }));
        })
        
        p1.then((response) => {
                if(response["ok"]) {
                    setSubmitMsg("Thank you");
                } else {
                    setSubmitMsg("Something went wrong");
                }
            });

    }

    const form = <form onSubmit={(e) => {submitHandler(e)}}>
            <input 
                ref={nameInput}
                placeholder="Name"
                name="name"
            />
            <input
                ref={msgInput}
                placeholder="Feedback message"
                name="message"
            />
            <br/>
            <br/>
            <button type="submit">
                Send
            </button>
        </form>

    return (
        (submitMsg === "Thank you" && <p>{submitMsg}</p>) 
        ||
        (<>
            {form}
            {submitMsg}
        </>) 
    );
}