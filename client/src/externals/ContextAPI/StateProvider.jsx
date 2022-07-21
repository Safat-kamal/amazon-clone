import React, { createContext, useReducer, useContext } from 'react';

// iniitalize to create contextapi
export const StateContext = createContext();

// create data layer use to wrap whole app
export const StateProvider = ({reducer,initalState,children})=>{
    return (
        <StateContext.Provider value={useReducer(reducer,initalState)}>
            {children}
        </StateContext.Provider>
    );
}

// pull information from data layer
export const useContextValue = () => {
    return (useContext(StateContext))
} 