import { createContext, useContext, useState} from "react";


const ThemeContext = createContext(undefined);

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if(!ctx) {   
        throw new Error('aslkdfasdfasdf'); 
    }
    return ctx;
}

export const ThemeContextProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);

    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>{children}</ThemeContext.Provider>
    )
}