// React doesn't exist in this repo so it's just  the code.
// if you want this code to run, you have to create React environment.

import React, {useState, useRef, useEffect } from 'react';

/**
 * @typedef {Object} Element
 * @property {string} [id]
 * @property {string} type
 * @property {string} maxLength
 */

/**
 * @param {Object} props
 * @param {Element[]} props.elements
 * @return {JSX.Element}
 */
export const AutoFocusSwitch = ({ elements }) => {
    
    const refs = useRef(elements.map((el) => React.createRef()));

    const [hyphens, setHypen] = useState(elements.map((el) => "-"));
    
    useEffect(() => {
        setHypen((hyphens) => {
            return hyphens.map((hyphen, idx) => {
                if(idx === hyphens.length - 1) {
                    return "";
                }
                return hyphen;
            });

        })
    }, []);
    
    const onChangeHandler = (e, el, idx) => {
        // change the value
        // check if it exeeds
            // if it does then move to the next el.
        const typedDigit = e.target.value.replace(/\D/g, '');

        refs.current[idx].current.value = typedDigit.slice(0, +el.maxLength);

        if(refs.current[idx].current.value.length === +el.maxLength) {
            // console.log('hehe from inside');
            let nextEl = idx+1;
            while(refs.current[nextEl] && refs.current[nextEl].current.type !== "number") {
                   nextEl++;
            }

            refs.current[nextEl]?.current.focus();
        }    
    }

    const onKeyDownHandler = (e, el, idx) => {

        if('.-'.includes(e.key)) e.preventDefault();

        if(e.key === "Backspace" && e.target.value === "") {
            let preIdx = idx-1;
            while(refs.current[preIdx] && refs.current[preIdx].current.type !== "number") {
                preIdx--;
            }

            if(refs.current[preIdx]) {
                e.preventDefault();
                refs.current[preIdx].current.value = refs.current[preIdx].current.value.slice(0, -1);
                refs.current[preIdx].current.focus();

            }
        }
    }

    
     
    return (
        elements.map((el, idx) => {
            return <> 
                        <input 
                            ref={refs.current[idx]}
                            key={idx}
                            onChange={(e) => {onChangeHandler(e, el, idx)}}
                            onKeyDown={(e) => {onKeyDownHandler(e, el, idx)}}
                            type={el.type}
                            id={el.id}
                        />
                        {hyphens[idx]}
                    </>
        })
    );
}