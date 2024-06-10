import React, { createContext, useState, useContext } from 'react';

// Create the context
const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
    const [updated, setUpdated] = useState(false);
    const [added, setAdded] = useState(false);
    const [error, setError] = useState(null);
    const UpdatedObj = () => setUpdated(true);
    const AddedObj = () => setAdded(true);
    const ResetUpdate = () => setUpdated(false);
    const ResetAdded = () => setAdded(false);
    const setErrorState = (error) => setError(error);


    return (
        <LoadingContext.Provider value={{error, updated,added,UpdatedObj,AddedObj,setErrorState,ResetAdded,ResetUpdate }}>
            {children}
        </LoadingContext.Provider>
    );
};
