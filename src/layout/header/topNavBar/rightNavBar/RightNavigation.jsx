import { Box, IconButton } from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../../../providers/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import SearchBox from "./searchBox/SearchBox";
import ROUTES from "../../../../routes/routesModel";

export default function RightNavigation() {
  
  const { isDark, toggleDark } = useTheme();
  const { user } = useUser();

  return (
    <Box display={"inline-flex"} alignItems={"center"}>
      <SearchBox pathName={ROUTES.CARDS} />
      <IconButton sx={{ marginLeft: 1 }}  onClick={toggleDark} >
        {isDark ? <LightModeIcon  /> : <DarkModeIcon htmlColor="white" />}
      </IconButton>

      {user ? <Logged /> : <NotLogged />}
      
    </Box>
  );
}
