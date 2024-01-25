// React doesn't exist in this repo so it's just  the code.
// if you want this code to run, you have to create React environment.

import React from 'react';

/**
 * @typedef {Object} Option
 * @property {string} value
 * @property {string} label
 */

/**
 * @param {Object} props
 * @param {string} props.name
 * @param {Option[]} props.options
 * @param {Function} props.onChange
 * @return {JSX.Element}
 */
export const RadioGroup = ({ name, options, onChange }) => {
    
    const clickHandler = (val) => {
        onChange(val);
    }

    return (
        <>
        {options.map((option) => {
            return <>
                    <input 
                        type="radio" 
                        name={name} 
                        value={option.value} 
                        id={option.value} 
                        onClick={(e) => {clickHandler(option.value)}}
                    />
                    <label for={option.value}>{option.label}</label>
                </>
        })}
        </>
    )
}