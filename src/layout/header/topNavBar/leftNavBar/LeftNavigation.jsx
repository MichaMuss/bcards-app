import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";
import menuListItems from "./menuListItems";
import displayListItem from "./displayListItem";
import { useUser } from "../../../../users/providers/UserProvider";

export default function LeftNavigation() {
  
  const {user} = useUser();
  
  const getItem = (to,label,key) => <NavItem to={to} label={label} key={key} />

  return (
    <Box display={"inline-flex"} alignItems="center" flexGrow={1}>
      <LogoIcon />
      <Logo />
      <Box display={"flex"}>
      {
        menuListItems.map((item) => {

          if(displayListItem(item, user))
              return getItem(item.navTo,item.title, item.title)

      })}
      </Box>
    </Box>
  );
}
