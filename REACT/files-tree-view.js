// React doesn't exist in this repo so it's just  the code.
// if you want this code to run, you have to create React environment.

import React, { useMemo, useState } from 'react';

/**
 * @typedef {Object} Item
 * @property {string} name
 * @property {Item[]} children
 */

/**
 * @param {Object} props
 * @param {Item[]} props.items
 * @return {JSX.Element}
 */
export const TreeView = ({ items }) => {

    const hoverPointerStyle = {
    cursor: 'pointer'
    };

    items = useMemo(() => {

        const dfs = (node, id) =>  {
            node.isOpen = false;
            node.id = id;
            node.space = id;

            let i = 0;
            while(i < node.children.length) {
                dfs(node.children[i], i+id);
                i++;
            }
            return;
        };

        let i = 0;
        while(i < items.length) {
            dfs(items[i], i.toString());
            i++;
        }

        return items;
    }, []);

    const [tree, setTree] = useState(items);

    const findNode = (id, tree) => {

        const dfs = (node) => {
            if(node.id === id) return node;

            let i = 0;
            while(i < node.children.length) {
                const result = dfs(node.children[i]);
                if(result) return result;
                i++;
            }

            return false;
        }

        let  i = 0;
        
        while(i < tree.length) {
            const result = dfs(tree[i]);
            if(result) return result;
            i++;
        }

        return false;
    }
    
    const clickHandler = (e,id) => {
        console.log(e.target.textContent, id);
        
        setTree((preTree) => {

            const targetNode = findNode(id, preTree);
            if(targetNode) {
                targetNode.isOpen = !targetNode.isOpen;
                return preTree.map((node) => node);
            }

            return preTree;
        });
    }

    const renderedTree = useMemo(() => {

        const dfs = (node) => {
            return node && <ul>
                        <p 
                        style={hoverPointerStyle}
                        id={`id_${node.id}`}
                        onClick={(e) => {
                            clickHandler(e, node.id);
                        }}
                        >
                        {(node.children.length > 0) && (!node.isOpen ? "+" : "-")} {node.name}
                        </p>              {/* the below expression will always be true */}
                        {node.isOpen && (" ".repeat(node.space.length) || true) && node.children.map((child) =>  {
                            return dfs(child)
                        })}
                    </ul>;
        }

        return tree.map((node) => {
            return dfs(node);
        });

    }, [tree]);

    return (
        <div id="tree">
            {renderedTree}
        </div>
    )
}