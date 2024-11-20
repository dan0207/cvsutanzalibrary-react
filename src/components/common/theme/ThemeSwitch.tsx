import { useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

interface ThemeContextType {
    darkMode: boolean;
    toggleDarkTheme: () => void;
}

function ThemeSwitch() {
    const { darkMode, toggleDarkTheme } = useContext(ThemeContext) as ThemeContextType;

    return (
        <div className="form-check form-switch d-flex align-items-center">
            <input onChange={toggleDarkTheme} className="form-check-input" type="checkbox" role="button" id="flexSwitchCheckDefault" checked={darkMode} />
            <label className="form-check-label fs-4 ps-1" htmlFor="flexSwitchCheckDefault">
                {darkMode ? <MdDarkMode /> : <CiLight />}
            </label>
        </div>
    );
}

export default ThemeSwitch;
