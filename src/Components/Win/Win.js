import React, {useContext} from 'react';
import { AppContext } from "../../Context/AppContext";
import Confetti from 'react-confetti'
import { useWindowSize } from '@react-hook/window-size'
import './Win.css';

function Win() {

    const { width, height } = useWindowSize();

    const [context, setContext] = useContext(AppContext);
    
    const reset = (event) => {
        setContext({
            player: "Y",
            winner: null,
            c1: [0,0,0,0,0,0],
            c2: [0,0,0,0,0,0],
            c3: [0,0,0,0,0,0],
            c4: [0,0,0,0,0,0],
            c5: [0,0,0,0,0,0],
            c6: [0,0,0,0,0,0],
            c7: [0,0,0,0,0,0],    
        });
    }

    if(context.winner === "Y"){
        return (
            <div className="win">
                <div className="win-box">
                    <span className="win-text yellow-text">yellow win !</span>
                    <button className="win-button" onClick={() => reset()}>replay</button>
                </div>
                <Confetti width={width} height={height} />
            </div>
        );
    } else if (context.winner === "R"){
        return (
            <div className="win">
                <div className="win-box">
                    <span className="win-text red-text">red win !</span>
                    <button className="win-button" onClick={() => reset()}>replay</button>
                </div>
                <Confetti width={width} height={height} />
            </div>
        );
    } else {
        return ("");
    }
}

export default Win;
