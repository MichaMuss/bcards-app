import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import Favorite from "@mui/icons-material/Favorite";
import StyleIcon from '@mui/icons-material/Style';
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

export default function Footer() {
  const {user} = useUser();
  const navigate = useNavigate();

  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        {user?.isBusiness &&
        <BottomNavigationAction
          label="My Cards"
          icon={<StyleIcon />}
          onClick={() => navigate(ROUTES.MY_CARDS)}
        />}
        {user && <BottomNavigationAction
          label="Favorites"
          icon={<Favorite />}
          onClick={() => navigate(ROUTES.FAV_CARDS)}
        />}
      </BottomNavigation>
    </Paper>
  );
}
