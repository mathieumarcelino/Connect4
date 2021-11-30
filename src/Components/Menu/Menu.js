import React, {useContext, useState, useEffect} from 'react';
import { AppContext } from "../../Context/AppContext";
import AnimateHeight from 'react-animate-height';
import './Menu.css';

function Menu() {

    const [context, setContext] = useContext(AppContext);

    const [state, setState] = useState({
        height: "100%",
        position: "bottom",
        winner: null,
    })

    useEffect(() => {
        if(context.mode === null){
            setState({
                height: "100%",
                position: "top",
            });
        }
    }, [context.mode])
    
    const choice = (event) => {
        setContext({
            ...context,
            mode: event,
        });
        setState({
            ...state,
            height: 0,
            position: "bottom",
        });
    }

    return (
        <AnimateHeight className={state.position === "top" ? "top menu" : state.position === "bottom" ? "bottom menu" : "menu"} duration={ 800 } height={state.height}>
            <div className="menu-box">
                <span className="menu-text">choose a mode</span>
                <div className="menu-container">
                    <button className="menu-button" onClick={() => choice("solo")}>solo</button>
                    <button className="menu-button" onClick={() => choice("duo")}>duo</button>
                </div>
            </div>
        </AnimateHeight>
    );
}

export default Menu;
