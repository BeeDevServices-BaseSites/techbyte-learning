import React from "react";
import Sun from "../assets/images/Sun.svg";
import Moon from "../assets/images/Moon.svg";

const DarkMode = () => {
    const set_dark_mode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selected_theme", "dark");
    }
    
    const set_light_mode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
        localStorage.setItem("selected_theme", "light");
    };

    const toggle_theme = (e) => {
        if (e.target.checked) set_dark_mode();
        else set_light_mode();
    };

    const selected_theme = localStorage.getItem("selected_theme");

    if (selected_theme === "dark") {
        set_dark_mode();
    }

    return (
        <div className="dark_mode">
            <input onChange={toggle_theme} defaultChecked={selected_theme === "dark"} className="dark_mode_input" type="checkbox" id="darkmode_toggle" />
            <label className="dark_mode_label" htmlFor="darkmode_toggle">
                <img src={ Sun } alt="Sun" className="sun" />
                <img src={ Moon } alt="Moon" className="moon" />
            </label>
        </div>
    );
};

export default DarkMode;