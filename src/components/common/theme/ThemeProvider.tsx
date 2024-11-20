import { useEffect, useState, ReactNode } from "react";
import ThemeContext from "../../../contexts/ThemeContext";

interface ThemeProviderProps {
    children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleDarkTheme = (): void => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const htmlElement = document.querySelector("html");
        htmlElement?.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return <ThemeContext.Provider value={{ darkMode, toggleDarkTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
