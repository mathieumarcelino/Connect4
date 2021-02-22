import React, {useContext} from 'react';
import './Grid.css';
import { AppContext } from "../../Context/AppContext";
import Column from '../Column/Column';

function Grid() {

    const [context, setContext] = useContext(AppContext);

    const checkColumns = (array) => {
        for (let i = 0; i < 6; i++){
            if (array[i] === 0){
                array[i] = context.player;
                return array
            }
        }
        return array
    }

    const checkPlayer = (current) => {
        if (current === "Y"){
            return "R";
        } else {
            return "Y";
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
        for (let i = 0; i < 3; i++){
            if (array[i] != 0 && array[i] === array[i+1] && array[i] === array[i+2] && array[i] === array[i+3]){
                return context.player
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

    const handleClick = (event) => {
        let column = null;
        let update = false;
        if(event === 1){
            if(context.c1[5] === 0){
                setContext({
                    ...context,
                    c1: checkColumns(context.c1),
                });
                column = context.c1;
                update = true;
            }
        } else if (event === 2){
            if(context.c2[5] === 0){
                setContext({
                    ...context,
                    c2: checkColumns(context.c2),
                });
                column = context.c2;
                update = true;
            }
        } else if (event === 3){
            if(context.c3[5] === 0){
                setContext({
                    ...context,
                    c3: checkColumns(context.c3),
                });
                column = context.c3;
                update = true;
            }
        }
        else if (event === 4){
            if(context.c4[5] === 0){
                setContext({
                    ...context,
                    c4: checkColumns(context.c4),
                });
                column = context.c4;
                update = true;
            }
        }
        else if (event === 5){
            if(context.c5[5] === 0){
                setContext({
                    ...context,
                    c5: checkColumns(context.c5),
                });
                column = context.c5;
                update = true;
            }
        }
        else if (event === 6){
            if(context.c6[5] === 0){
                setContext({
                    ...context,
                    c6: checkColumns(context.c6),
                });
                column = context.c6;
                update = true;
            }
        }
        else if (event === 7){
            if(context.c7[5] === 0){
                setContext({
                    ...context,
                    c7: checkColumns(context.c7),
                });
                column = context.c7;
                update = true;
            }
        }
        
        if(update === true){

            let array = [context.c1, context.c2, context.c3, context.c4, context.c5, context.c6, context.c7];
            let winner = null;
            let winnerColumn = checkWinColumn(column);
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
                player: checkPlayer(context.player),
                winner: winner,
            });
            
        }
    }

    
    return (
        <div className="grid-container">
            <div className="c1" onClick={() => handleClick(1)} >
                <Column v1={context.c1[0]} v2={context.c1[1]} v3={context.c1[2]} v4={context.c1[3]} v5={context.c1[4]} v6={context.c1[5]} num={"column1"}/>
            </div>
            <div className="c2" onClick={() => handleClick(2)}>
                <Column v1={context.c2[0]} v2={context.c2[1]} v3={context.c2[2]} v4={context.c2[3]} v5={context.c2[4]} v6={context.c2[5]} num={"column2"}/>
            </div>
            <div className="c3" onClick={() => handleClick(3)}>
                <Column v1={context.c3[0]} v2={context.c3[1]} v3={context.c3[2]} v4={context.c3[3]} v5={context.c3[4]} v6={context.c3[5]} num={"column3"}/>
            </div>
            <div className="c4" onClick={() => handleClick(4)}>
                <Column v1={context.c4[0]} v2={context.c4[1]} v3={context.c4[2]} v4={context.c4[3]} v5={context.c4[4]} v6={context.c4[5]} num={"column4"}/>
            </div>
            <div className="c5" onClick={() => handleClick(5)}>
                <Column v1={context.c5[0]} v2={context.c5[1]} v3={context.c5[2]} v4={context.c5[3]} v5={context.c5[4]} v6={context.c5[5]} num={"column5"}/>
            </div>
            <div className="c6" onClick={() => handleClick(6)}>
                <Column v1={context.c6[0]} v2={context.c6[1]} v3={context.c6[2]} v4={context.c6[3]} v5={context.c6[4]} v6={context.c6[5]} num={"column6"}/>
            </div>
            <div className="c7" onClick={() => handleClick(7)}>
                <Column v1={context.c7[0]} v2={context.c7[1]} v3={context.c7[2]} v4={context.c7[3]} v5={context.c7[4]} v6={context.c7[5]} num={"column7"}/>
            </div>
        </div>
    );
}

export default Grid;
