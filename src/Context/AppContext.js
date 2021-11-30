// ----- IMPORT -----
import React, { createContext, useState } from "react";
// ------------------


export const AppContext = createContext();

export const AppProvider = (props) => {
    const [data, setData] = useState({
        player: "Y",
        winner: null,
        wait: false,
        reset: false,
        mode: null,
        c1: [0,0,0,0,0,0],
        c2: [0,0,0,0,0,0],
        c3: [0,0,0,0,0,0],
        c4: [0,0,0,0,0,0],
        c5: [0,0,0,0,0,0],
        c6: [0,0,0,0,0,0],
        c7: [0,0,0,0,0,0],
    });

    return(
        <AppContext.Provider value={[data, setData]}>
            {props.children}
        </AppContext.Provider>
    );
};