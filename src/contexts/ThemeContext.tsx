import { createContext } from "react";

interface ThemeContextType {
    darkMode: boolean;
    toggleDarkTheme: () => void;
}

const defaultTheme: ThemeContextType = {
    darkMode: false,
    toggleDarkTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export default ThemeContext;
