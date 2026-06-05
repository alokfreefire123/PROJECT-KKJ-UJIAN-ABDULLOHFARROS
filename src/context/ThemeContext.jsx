import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [totalLikes, setTotalLikes] = useState(0);

    const incrementTotalLikes = () => setTotalLikes(prev => prev + 1);

    return (
    <AppContext.Provider value={{ totalLikes, incrementTotalLikes }}>
    {children}
    </AppContext.Provider>
    );
};