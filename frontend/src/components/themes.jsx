import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import "../assets/css/themes.css";

const Themes = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-theme"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="style-switcher">
      <div className="theme-toggler" onClick={toggleTheme}>
        {theme === "light-theme" ? <BsMoon /> : <BsSun />}
      </div>
    </div>
  );
};

export default Themes;
