import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";

export default function NotLogged() {
  return (
    <>
      <NavItem to={ROUTES.LOGIN} label="Login" sx={{color: "white"}} />
      <NavItem to={ROUTES.SIGNUP} label="Sign up" />
    </>
  );
}
