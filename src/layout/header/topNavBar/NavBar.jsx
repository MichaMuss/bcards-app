import { AppBar, Toolbar, useMediaQuery } from "@mui/material";
import React from "react";
import LeftNavigation from "./leftNavBar/LeftNavigation";
import RightNavigation from "./rightNavBar/RightNavigation";
import LeftNavigationCollapsed from "./leftNavBar/LeftNavigationCollapsed";
import { useTheme } from "@emotion/react";

export default function NavBar() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <AppBar position="sticky" color="primary" elevation={5}>
      <Toolbar>
        {matches && <LeftNavigation />}
        {!matches && <LeftNavigationCollapsed />}
        <RightNavigation />
      </Toolbar>
    </AppBar>
  );
}
