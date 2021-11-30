import React, {useContext, useState, useEffect} from 'react';
import { AppContext } from "../../Context/AppContext";
import Confetti from 'react-confetti'
import AnimateHeight from 'react-animate-height';
import { useWindowSize } from '@react-hook/window-size'
import './Win.css';

function Win() {

    const { width, height } = useWindowSize();

    const [context, setContext] = useContext(AppContext);

    const [state, setState] = useState({
        height: 0,
        position: "bottom",
        winner: null,
    })

    useEffect(() => {
        if(context.winner !== null){
            setState({
                height: "100%",
                position: "top",
                winner: context.winner,
            });
        }
    }, [context.winner])
    
    const reset = () => {
        setContext({
            ...context,
            player: "Y",
            winner: null,
            reset: true,
            c1: [0,0,0,0,0,0],
            c2: [0,0,0,0,0,0],
            c3: [0,0,0,0,0,0],
            c4: [0,0,0,0,0,0],
            c5: [0,0,0,0,0,0],
            c6: [0,0,0,0,0,0],
            c7: [0,0,0,0,0,0],    
        });
        setState({
            ...state,
            height: 0,
            position: "bottom",
        });
    }

    return (
        <AnimateHeight className={state.position === "top" ? "top win" : state.position === "bottom" ? "bottom win" : "win"} duration={ 800 } height={state.height} style={{ background: `${state.winner === "Y" ? "#fbc531" : state.winner === "R" ? "#e84118" : ""}` }}>
            <div className="win-box">
                <span className="win-text">{state.winner === "Y" ? "yellow won !" : state.winner === "R" ? "red won !" : ""}</span>
                <button className="win-button" onClick={() => reset()}>replay</button>
            </div>
            <Confetti width={width} height={height} />
        </AnimateHeight>
    );
}

export default Win;
