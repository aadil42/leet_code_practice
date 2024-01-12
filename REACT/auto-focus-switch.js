// React doesn't exist in this repo so it's just  the code.
// if you want this code to run, you have to create React environment.

import React, { useRef } from 'react';

/**
 * @typedef {Object} Element
 * @property {string} [id]
 * @property {string} type
 * @property {string} maxLength
 */

/**
 * This should work. 
 * The reason it's not passing because of the test cases.
 * In this code, we're only moving to the next element if we try to type a char and then we exceed.
 * for example. say you have type 3 char so far and the limit is 3 char also. We  won't move to the next element unless we try to type the 4th char in it.
 * 
 * @param {Object} props
 * @param {Element[]} props.elements
 * @return {JSX.Element}
 */
export const AutoFocusSwitch = ({ elements }) => {

    const refs = useRef(elements.map((element) => React.createRef()));
    const onKeyDownHandler = (e, maxLen, currIndex) => {
        if(!/[0-9]*/.test(e.key) || e.key === "e" || e.key === "E") {
            e.preventDefault();
            return;
        }
        const currentInput = refs.current[currIndex].current;

        if(/[0-9]/.test(e.key)) {
            console.log(currentInput.value.length, maxLen);
            if(currentInput.value.length === maxLen) {
                const nextInput = getNextEl(currIndex);
                console.log(nextInput, 'next', currentInput.value.length);
                if(nextInput) {
                    nextInput.focus();
                    return;
                }
                e.preventDefault();
            }
        }

        if(e.key === "Backspace") {
            if(currentInput.value.length === 0) {
                const preInput = getPreEl(currIndex);
                if(preInput) {
                    preInput.focus();
                }
            }
        }   
    }

    const getNextEl = (currIndex) => {
        let i = currIndex + 1;
        while(refs.current[i] && refs.current[i].current.type !== "number") {
            i++;
        }
        return refs.current[i] && refs.current[i].current;
    }

    const getPreEl = (currIndex) => {
        let i = currIndex - 1;
        while(refs.current[i] && refs.current[i].current.type !== "number") {
            i--;
        }

        return refs.current[i] && refs.current[i].current;
    }

    return (
        elements.map((element, index) => {
            return <>
                    <input 
                        {...element}
                        key={index}
                        ref={refs.current[index]}
                        onKeyDown={(e) => {
                            onKeyDownHandler(e, +element.maxLength, index);
                        }}
                    />
                    {(index !== elements.length - 1) && <span>-</span>}   
                   </>
        })
    )
}