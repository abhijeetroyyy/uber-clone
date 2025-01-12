import { createContext, useContext, useState } from 'react';

export const CaptainDataContext = createContext();

export const useCaptain = () => {
    return useContext(CaptainDataContext);
};

export const CaptainProvider = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to update captain data
    const updateCaptain = (data) => {
        setCaptain(data);
    };

    // Function to handle captain logout
    const logoutCaptain = () => {
        setCaptain(null);
        setError(null);
    };

    const value = {
        captain,
        isLoading,
        error,
        updateCaptain,
        logoutCaptain,
        setIsLoading,
        setError
    };

    return (
        <CaptainDataContext.Provider value={{ captain, setCaptain }}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainProvider;