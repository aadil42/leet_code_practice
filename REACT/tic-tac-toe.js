// React doesn't exist in this repo so it's just  the code.
// if you want this code to run, you have to create React environment.

import React, { useState, useEffect, useMemo } from 'react';

/**
 * @return {JSX.Element}
 */
export const TicTacToe = () => {
    
    const gridStyle = {

    };

    const rowStyle = {
        display: 'flex',
        justifyContent: "center",
        gap: "15px"
    };

    const cellStyle = {
        width: '40px',
        height: '40px',
        border: '1px solid #000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        cursor: 'pointer',
        background: 'lightgrey'
        /* Add additional styling for hover effects, colors, etc. */
    };


    const [grid, setGrid] = useState([["", "", ""],
                                      ["", "", ""],
                                      ["", "", ""]]);

    const clickedCells = useMemo(() => new Set(), []);

    const [nextPlayer, setNextPlayer] = useState("X");
    const [winner, setWinner] = useState("");
    const [isDraw, setDraw] = useState(false);

    const validateGame = () => {

        // check horizontal lines
        for(let i = 0; i < 3; i++) {
            let j = 0;
            while(j < 3) {
                if(!grid[i][j] || grid[i][0] !== grid[i][j]) break;
                j++;
            }

            if(j === 3) return true;
        }

        // check vertical lines
        for(let i = 0; i < 3; i++) {
            let j = 0;
            while(j < 3) {
                if(!grid[j][i] || grid[0][i] !== grid[j][i]) break;
                j++;
            }

            if(j === 3) return true;
        }

        // check cross top-left to bottom-right
        let i = 0;
        while(i < 3) {
            if(!grid[i][i] || grid[i][i] !== grid[0][0]) break;
            i++;
        }
        if(i === 3) return true;

        // check cross top-right to bottom-left
        i = 0;
        while(i < 3) {
            if(!grid[i][2-i] || grid[i][2-i] !== grid[0][2]) break;
            i++;
        }
        if(i === 3) return true;

        return false;
    }

    const areCellsFull = () => {

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(!grid[i][j]) return false;
            }
        }

        return true;
    }

    const isGridEmpty = () => {
        
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(grid[i][j]) return false;
            }
        }

        return true;
    }
    const clickHandler = (r,c) => {
        
        const id = `cell_${3*r + c}`;

        // trying to click same cells
        if(clickedCells.has(id)) return;

        // if the winner is decided then do nothing.
        if(winner) return;

        clickedCells.add(id);

        setGrid((preGrid) => {
            
            if(nextPlayer === "X") {
                preGrid[r][c] = "X";
            } else if(nextPlayer === "O") {
                preGrid[r][c] = "O";
            }


            return preGrid.map((row) => {
                return row.map((col) => {
                    return col;
                });
            });
        });

    }

    const restartClickHandler = () => {

        setGrid((preGrid) => {
            return preGrid.map((row) => {
                return row.map((col) => {
                    return ""
                });
            });
        });
        
        setDraw(false);
        setNextPlayer("X");
        setWinner("");
        clickedCells.clear();
    }

    useEffect(() => {
        
        // check if someone won.
        if(validateGame()) {
            setDraw(false);
            setNextPlayer("");
            setWinner(nextPlayer);
            return;
        };

        // check if draw
        if(areCellsFull()) {
            setDraw(true);
            setNextPlayer("");
            setWinner("");
            return;
        }

        // update ui
        if(!isGridEmpty()) {
            if(nextPlayer === "X") {
                setNextPlayer("O");
            } else if(nextPlayer === "O") {
                setNextPlayer("X");
            }
        }

    }, [grid]);


    return (
       <div>
            <h2>{winner &&  `Winner: ${winner}`}</h2>
            <h2>{isDraw && "Draw"}</h2>
            <h2>{nextPlayer && `Next Player: ${nextPlayer}`}</h2>

            <div style={gridStyle}>
                {grid.map(((row, rowIdx) => {
                    return <div style={rowStyle}>
                            {row.map((cell, colIdx) => {
                                return <p 
                                        id={`cell_${3*rowIdx + colIdx}`}
                                        style={cellStyle}
                                        onClick={() => {clickHandler(rowIdx, colIdx)}}
                                        >
                                        {grid[rowIdx][colIdx]}
                                </p>;
                            })}
                        </div>
                }))}
            </div>

            <button onClick={restartClickHandler}>Restart</button>
       </div> 
    );
}