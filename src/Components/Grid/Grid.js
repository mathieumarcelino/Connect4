import React, {useContext, useState, useEffect} from 'react';
import './Grid.css';
import { AppContext } from "../../Context/AppContext";
import Column from '../Column/Column';

function Grid() {

    const [context, setContext] = useContext(AppContext);

    const [state, setState] = useState({
        column: null,
        row: null,
        color: null,
    })

    const [update, setUpdate] = useState(false);

    const checkColumns = (array) => {
        for (let i = 0; i < 6; i++){
            if (array[i] === 0){
                array[i] = context.player;
                return array
            }
        }
        return array
    }

    const findRow = (array) => {
        for (let i = 0; i < 6; i++){
            if (array[i] === 0){
                return i+1
            }
        }
        return null
    }

    const checkPlayer = (current) => {
        if (current === "R"){
            return "Y";
        } else {
            return "R";
        }
    }

    const checkWinRaw = (array) => {
        for (let i = 0; i < 4; i++){
            for (let j = 0; j < 6; j++){
                if (array[i][j] != 0 && array[i][j] === array[i+1][j] && array[i][j] === array[i+2][j] && array[i][j] === array[i+3][j]){
                    return context.player
                }
            }
        }
    }

    const checkWinColumn = (array) => {
        for (let i = 0; i < 7; i++){
            for (let j = 0; j < 3; j++){
                if (array[i][j] != 0 && array[i][j] === array[i][j+1] && array[i][j] === array[i][j+2] && array[i][j] === array[i][j+3]){
                    return context.player
                }
            }
        }
    }

    const checkWinDiagonalRight = (array) => {
        for (let i = 0; i < 4; i++){
            for (let j = 0; j < 3; j++){
                if (array[i][j] != 0 && array[i][j] === array[i+1][j+1] && array[i][j] === array[i+2][j+2] && array[i][j] === array[i+3][j+3]){
                    return context.player
                }
            }
        }
    }

    const checkWinDiagonalLeft = (array) => {
        for (let i = 0; i < 4; i++){
            for (let j = 5; j > 2; j--){
                if (array[i][j] != 0 && array[i][j] === array[i+1][j-1] && array[i][j] === array[i+2][j-2] && array[i][j] === array[i+3][j-3]){
                    return context.player
                }
            }
        }
    }

    const check3DiagonalRight = (array, player) => {
        for (let i = 0; i < 4; i++){
            for (let j = 0; j < 3; j++){
                if (array[i][j] === player && array[i][j] === array[i+1][j+1] && array[i][j] === array[i+2][j+2] && array[i+3][j+2] !== 0 && array[i+3][j+3] === 0){
                    return i+4;
                } else if(array[i][j] === player && array[i][j] === array[i+1][j+1] && array[i][j] === array[i+3][j+3] && array[i+2][j+1] !== 0 && array[i+2][j+2] === 0){
                    return i+3;
                } else if(array[i][j] === player && array[i][j] === array[i+2][j+2] && array[i][j] === array[i+3][j+3] && array[i+1][j] !== 0 && array[i+1][j+1] === 0){
                    return i+2;
                } else if(array[i+1][j+1] === player && array[i+1][j+1] === array[i+2][j+2] && array[i+1][j+1] === array[i+3][j+3] && array[i][j-1] !== 0 && array[i][j] === 0){
                    return i+1;
                }
            }
        }
    }

    const check3DiagonalLeft = (array, player) => {
        for (let i = 0; i < 4; i++){
            for (let j = 5; j > 2; j--){
                if (array[i][j] === player && array[i][j] === array[i+1][j-1] && array[i][j] === array[i+2][j-2] && array[i+3][j-4] !== 0 && array[i+3][j-3] === 0){
                    return i+4;
                } else if (array[i][j] === player && array[i][j] === array[i+1][j-1] && array[i][j] === array[i+3][j-3] && array[i+2][j-3] !== 0 && array[i+2][j-2] === 0){
                    return i+3;
                } else if (array[i][j] === player && array[i][j] === array[i+2][j-2] && array[i][j] === array[i+3][j-3] && array[i+1][j-2] !== 0 && array[i+1][j-1] === 0){
                    return i+2;
                } else if (array[i+1][j-1] === player && array[i+1][j-1] === array[i+2][j-2] && array[i+1][j-1] === array[i+3][j-3] && array[i][j-1] !== 0 && array[i][j] === 0){
                    return i+1;
                }
            }
        }
    }

    const check3Raw = (array, player) => {
        for (let i = 0; i < 4; i++){
            for (let j = 0; j < 6; j++){
                if (array[i][j] === player && array[i][j] === array[i+1][j] && array[i][j] === array[i+2][j] && array[i+3][j-1] !== 0 && array[i+3][j] === 0){
                    return i+4;
                } else if (array[i][j] === player && array[i][j] === array[i+1][j] && array[i][j] === array[i+3][j] && array[i+2][j-1] !== 0 && array[i+2][j] === 0){
                    return i+3;
                } else if (array[i][j] === player && array[i][j] === array[i+2][j] && array[i][j] === array[i+3][j] && array[i+1][j-1] !== 0 && array[i+1][j] === 0){
                    return i+2;
                } else if (array[i+1][j] === player && array[i+1][j] === array[i+2][j] && array[i+1][j] === array[i+3][j] && array[i][j-1] !== 0 && array[i][j] === 0){
                    return i+1;
                }
            }
        }
    }

    const check3Column = (array, player) => {
        for (let i = 0; i < 7; i++){
            for (let j = 0; j < 3; j++){
                if (array[i][j] === player && array[i][j] === array[i][j+1] && array[i][j] === array[i][j+2] && array[i][j+3] === 0){
                    return i+1;
                }
            }
        }
    }

    const randomChoice = (array) => {
        let num = [];
        for(let i=0; i<7; i++){
            if(array[i][5] === 0){
                num.push(i+1);
            }
        }
        let random = Math.floor(Math.random() * num.length);
        return num[random];
    }

    const handleClick = (event) => {

        if(context.winner === null && context.wait === false){

            if(context.mode === "duo" || context.mode === "solo" && context.player === "Y" && context.winner === null){

                if(event === 1){
                    if(context.c1[5] === 0){
                        setState({
                            column: "column1",
                            row: findRow(context.c1),
                            color: context.player,
                        });
                        setContext({
                            ...context,
                            c1: checkColumns(context.c1),
                        });
                        setUpdate(true);
                    }
                } else if (event === 2){
                    if(context.c2[5] === 0){
                        setState({
                            column: "column2",
                            row: findRow(context.c2),
                            color: context.player,
                        });
                        setContext({
                            ...context,
                            c2: checkColumns(context.c2),
                        });
                        setUpdate(true);
                    }
                } else if (event === 3){
                    if(context.c3[5] === 0){
                        setState({
                            column: "column3",
                            row: findRow(context.c3),
                            color: context.player,
                        });
                        setContext({
                            ...context,
                            c3: checkColumns(context.c3),
                        });
                        setUpdate(true);
                    }
                }
                else if (event === 4){
                    if(context.c4[5] === 0){
                        setState({
                            column: "column4",
                            row: findRow(context.c4),
                            color: context.player,
                        });
                        setContext({
                            ...context,
                            c4: checkColumns(context.c4),
                        });
                        setUpdate(true);
                    }
                }
                else if (event === 5){
                    if(context.c5[5] === 0){
                        setState({
                            column: "column5",
                            row: findRow(context.c5),
                            color: context.player,
                        });
                        setContext({
                            ...context,
                            c5: checkColumns(context.c5),
                        });
                        setUpdate(true);
                    }
                }
                else if (event === 6){
                    if(context.c6[5] === 0){
                        setState({
                            column: "column6",
                            row: findRow(context.c6),
                            color: context.player,
                        });
                        setContext({
                            ...context,
                            c6: checkColumns(context.c6),
                        });
                        setUpdate(true);
                    }
                }
                else if (event === 7){
                    if(context.c7[5] === 0){
                        setState({
                            column: "column7",
                            row: findRow(context.c7),
                            color: context.player,
                        });
                        setContext({
                            ...context,
                            c7: checkColumns(context.c7),
                        });
                        setUpdate(true);
                    }
                }

            }

        }
    }

    useEffect(() => {
        let time = Math.floor(Math.random() * (1500 - 100 + 1) + 100);
        if(context.mode === "solo" && context.player === "R" && context.wait === false && context.winner === null){
            const timeout = setTimeout(() => {
                let put = null;
                let win = null;
                let loose = null;
                let array = [context.c1, context.c2, context.c3, context.c4, context.c5, context.c6, context.c7];

                // Check if gonna win
                let winColumn = check3Column(array, "R");
                let winRaw = check3Raw(array, "R");
                let winDiagonalRight = check3DiagonalRight(array, "R");
                let winDiagonalLeft = check3DiagonalLeft(array, "R");

                if(winColumn){
                    win = winColumn;
                }
                if (winRaw){
                    win = winRaw;
                }
                if (winDiagonalRight){
                    win = winDiagonalRight;
                }
                if (winDiagonalLeft){
                    win = winDiagonalLeft;
                }

                if(win){
                    put = win;
                }

                // Check if gonna loose
                if (put === null) {
                    let looseColumn = check3Column(array, "Y");
                    let looseRaw = check3Raw(array, "Y");
                    let looseDiagonalRight = check3DiagonalRight(array, "Y");
                    let looseDiagonalLeft = check3DiagonalLeft(array, "Y");
        
                    if(looseColumn){
                        loose = looseColumn;
                    }
                    if (looseRaw){
                        loose = looseRaw;
                    }
                    if (looseDiagonalRight){
                        loose = looseDiagonalRight;
                    }
                    if (looseDiagonalLeft){
                        loose = looseDiagonalLeft;
                    }

                    if(loose){
                        put = loose;
                    }
                }

                // Random choice
                if (put === null) {
                    put = randomChoice(array);
                }

                if(put === 1){
                    setState({
                        column: "column1",
                        row: findRow(context.c1),
                        color: context.player,
                    });
                    setContext({
                        ...context,
                        c1: checkColumns(context.c1),
                    });
                    setUpdate(true);
                } else if (put === 2){
                    setState({
                        column: "column2",
                        row: findRow(context.c2),
                        color: context.player,
                    });
                    setContext({
                        ...context,
                        c2: checkColumns(context.c2),
                    });
                    setUpdate(true);
                } else if (put === 3){
                    setState({
                        column: "column3",
                        row: findRow(context.c3),
                        color: context.player,
                    });
                    setContext({
                        ...context,
                        c3: checkColumns(context.c3),
                    });
                    setUpdate(true);
                }
                else if (put === 4){
                    setState({
                        column: "column4",
                        row: findRow(context.c4),
                        color: context.player,
                    });
                    setContext({
                        ...context,
                        c4: checkColumns(context.c4),
                    });
                    setUpdate(true);
                }
                else if (put === 5){
                    setState({
                        column: "column5",
                        row: findRow(context.c5),
                        color: context.player,
                    });
                    setContext({
                        ...context,
                        c5: checkColumns(context.c5),
                    });
                    setUpdate(true);
                }
                else if (put === 6){
                    setState({
                        column: "column6",
                        row: findRow(context.c6),
                        color: context.player,
                    });
                    setContext({
                        ...context,
                        c6: checkColumns(context.c6),
                    });
                    setUpdate(true);
                }
                else if (put === 7){
                    setState({
                        column: "column7",
                        row: findRow(context.c7),
                        color: context.player,
                    });
                    setContext({
                        ...context,
                        c7: checkColumns(context.c7),
                    });
                    setUpdate(true);
                }

            }, time)
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [context.wait])

    useEffect(() => {

        if(update === true){
            let array = [context.c1, context.c2, context.c3, context.c4, context.c5, context.c6, context.c7];
            let winner = null;
            let winnerColumn = checkWinColumn(array);
            let winnerRaw = checkWinRaw(array);
            let winnerDiagonalRight = checkWinDiagonalRight(array);
            let winnerDiagonalLeft = checkWinDiagonalLeft(array);

            if(winnerColumn){
                winner = winnerColumn;
            }
            if (winnerRaw){
                winner = winnerRaw;
            }
            if (winnerDiagonalLeft){
                winner = winnerDiagonalLeft;
            }
            if (winnerDiagonalRight){
                winner = winnerDiagonalRight;
            }

            setContext({
                ...context,
                wait: true,
                player: checkPlayer(context.player),
                winner: winner,
            });

            setUpdate(false);
        }

    }, [update])
    
    return (
        <div className="grid-container">
            <div className="c1" onClick={() => handleClick(1)} >
                <Column row={state.row} column={state.column} color={state.color} num={"column1"}/>
            </div>
            <div className="c2" onClick={() => handleClick(2)}>
                <Column row={state.row} column={state.column} color={state.color} num={"column2"}/>
            </div>
            <div className="c3" onClick={() => handleClick(3)}>
                <Column row={state.row} column={state.column} color={state.color} num={"column3"}/>
            </div>
            <div className="c4" onClick={() => handleClick(4)}>
                <Column row={state.row} column={state.column} color={state.color} num={"column4"}/>
            </div>
            <div className="c5" onClick={() => handleClick(5)}>
                <Column row={state.row} column={state.column} color={state.color} num={"column5"}/>
            </div>
            <div className="c6" onClick={() => handleClick(6)}>
                <Column row={state.row} column={state.column} color={state.color} num={"column6"}/>
            </div>
            <div className="c7" onClick={() => handleClick(7)}>
                <Column row={state.row} column={state.column} color={state.color} num={"column7"}/>
            </div>
        </div>
    );
}

export default Grid;
