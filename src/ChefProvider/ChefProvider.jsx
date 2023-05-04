import React, { createContext, useEffect, useState } from 'react';


export const chefsContext = createContext(null)

const ChefProvider = ({ children }) => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        const collectChef = async () => {
            const res = await fetch('https://australian-cuisine-server-mojaer.vercel.app/')
            const data = await res.json()
            setChefs(data)
        }
        collectChef()
    }, [])

    return (
        <chefsContext.Provider value={chefs}>
            {children}
        </chefsContext.Provider>
    );
};

export default ChefProvider;