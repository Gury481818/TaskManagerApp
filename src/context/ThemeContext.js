import React, { useState, createContext } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// ThemeProvider component to wrap the app
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };