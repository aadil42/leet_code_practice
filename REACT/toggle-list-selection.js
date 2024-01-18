// React doesn't exist in this repo so it's just  the code.
// if you want this code to run, you have to create React environment.

import React, { useState } from 'react';

/**
 * @param {Object} props
 * @param {String[]} props.elements
 * @return {JSX.Element}
 */
export const HandleItemSelection = ({ elements }) => {
    
    const [items, setItems] = useState([]);

    const doesExists = (val) => {
        if(items.indexOf(val) === -1) return false;
        return true;
    }

    const onClickHandler = (e, idx) => {
        if(items.length >= 3) {

            if(doesExists(idx)) {
                    setItems((items) => {
                        return items.filter((item) => {
                            if(item !== idx) return true;
                            return false;
                        });
                    });
                    return;
            }

            setItems((items) => {
                        items.shift();
                        items = items.map((item) => item)
                        items.push(idx);
                        return items;
                    });
            return;
        }

        if(doesExists(idx)) {
                setItems((items) => {
                    return items.filter((item) => {
                        if(item !== idx) return true;
                        return false;
                    });
                });
            }

        if(!doesExists(idx)) {
                setItems((items) => {
                    items = items.map((item) => item);
                    items.push(idx);
                    return items;
                });
        }
    }

    return (
        elements.map((element, idx) => {
            return <p 
                    className={`item ${doesExists(idx) && "selected"}`}
                    onClick={(e) => { onClickHandler(e, idx)}}
                    >
                    {element}
                   </p>
        })
    )
}