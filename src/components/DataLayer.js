import React, {createContext, useContext, useReducer} from 'react';

//Prepares the data layer
export const DataLayerContext = createContext();

//This is the wrapper for App and then the props passed in
export const DataLayer = ({initialState, reducer, children}) => (
    //Follows same concept as what is in App
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);