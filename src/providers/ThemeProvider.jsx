import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import React from "react";
import {CssBaseline, useTheme as MuiUseTheme} from "@mui/material";
import { getDarkMode, setDarkMode } from "../users/services/localStorageService";

const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {

  const lsDarkMode = getDarkMode();

  const [isDark, setDark] = useState(lsDarkMode);

  const toggleDark = useCallback(() => {
    
    setDarkMode(!isDark);
    setDark(!isDark);
    
  }, [isDark]);

  
  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  const value = useMemo(() => ({isDark, toggleDark, theme}) 
  , [isDark, theme]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a NameProvider");
  return context;
};
