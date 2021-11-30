import React, {useEffect, useState, useContext} from 'react';
import { AppContext } from "../../Context/AppContext";

import './Column.css';

function Column({row, column, color, num}) {

    const [context, setContext] = useContext(AppContext);

    const [state, setState] = useState({
        color1: null,
        color2: null,
        color3: null,
        color4: null,
        color5: null,
        color6: null,
    })

    const [real, setReal] = useState({
        color1: null,
        color2: null,
        color3: null,
        color4: null,
        color5: null,
        color6: null,
    })

    const [now, setNow] = useState({
        case: null,
        color: null,
    })

    const [count, setCount] = useState(6)

    const [stop, setStop] = useState(true) 

    useEffect(() => {
        if(column === num){
            setNow({
                case: row,
                color: color,
            })
        }
    }, [row, column]);

    useEffect(() => {
        setStop(false);
    }, [now.case]);

    useEffect(() => {
        if(context.reset === true){
            setState({
                color1: null,
                color2: null,
                color3: null,
                color4: null,
                color5: null,
                color6: null,
            });
            setReal({
                color1: null,
                color2: null,
                color3: null,
                color4: null,
                color5: null,
                color6: null,
            });
            setStop(true);
            setNow({
                case: null,
                color: null,
            });
            setContext({...context, wait: false, reset: false});
        }
    }, [context.reset]);

    useEffect(() => {
        if (count > now.case && stop !== true){
            if(count === 6){
                setState({color6: now.color});
            }
            if(count === 5){
                setState({color5: now.color});
            }
            if(count === 4){
                setState({color4: now.color});
            }
            if(count === 3){
                setState({color3: now.color});
            }
            if(count === 2){
                setState({color2: now.color});
            }
            if(count === 1){
                setState({color1: now.color});
            }
            const timeout = setTimeout(() => {
                setState({
                    color1: null,
                    color2: null,
                    color3: null,
                    color4: null,
                    color5: null,
                    color6: null,
                });
                setCount(count-1);
            }, 30)
            return () => {
                clearTimeout(timeout);
            }
        }
        else if(count === now.case && stop !== true){
            if(now.case === 1){
                setReal({...real, color1: now.color});
            }
            else if(now.case === 2){
                setReal({...real, color2: now.color});
            }
            else if(now.case === 3){
                setReal({...real, color3: now.color});
            }
            else if(now.case === 4){
                setReal({...real, color4: now.color});
            }
            else if(now.case === 5){
                setReal({...real, color5: now.color});
            }
            else if(now.case === 6){
                setReal({...real, color6: now.color});
            }
            setCount(6);
            setStop(true);
            setContext({...context, wait: false});
        }
        else{
            setCount(6);
            setStop(true);
            setContext({...context, wait: false});
        }
    }, [stop, count]);

    return (
        <div className={"column-container " + num}>
        <div className="r1 center">
            <div className={real.color6 === "Y" ? "yellow item" : real.color6 === "R" ? "red item" : "white item"} style={{ backgroundColor: `${state.color6 === "Y" ? "#fbc531" : state.color6 === "R" ? "#e84118" : ""}` }}></div>
        </div>
        <div className="r2 center">
            <div className={real.color5 === "Y" ? "yellow item" : real.color5 === "R" ? "red item" : "white item"} style={{ backgroundColor: `${state.color5 === "Y" ? "#fbc531" : state.color5 === "R" ? "#e84118" : ""}` }}></div>
        </div>
        <div className="r3 center">
            <div className={real.color4 === "Y" ? "yellow item" : real.color4 === "R" ? "red item" : "white item"} style={{ backgroundColor: `${state.color4 === "Y" ? "#fbc531" : state.color4 === "R" ? "#e84118" : ""}` }}></div>
        </div>
        <div className="r4 center">
            <div className={real.color3 === "Y" ? "yellow item" : real.color3 === "R" ? "red item" : "white item"} style={{ backgroundColor: `${state.color3 === "Y" ? "#fbc531" : state.color3 === "R" ? "#e84118" : ""}` }}></div>
        </div>
        <div className="r5 center">
            <div className={real.color2 === "Y" ? "yellow item" : real.color2 === "R" ? "red item" : "white item"} style={{ backgroundColor: `${state.color2 === "Y" ? "#fbc531" : state.color2 === "R" ? "#e84118" : ""}` }}></div>
        </div>
        <div className="r6 center">
            <div className={real.color1 === "Y" ? "yellow item" : real.color1 === "R" ? "red item" : "white item"} style={{ backgroundColor: `${state.color1 === "Y" ? "#fbc531" : state.color1 === "R" ? "#e84118" : ""}` }}></div>
        </div>
        </div>
    );
}

export default Column;
