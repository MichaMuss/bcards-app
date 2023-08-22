import { Avatar, IconButton } from "@mui/material";
import React from "react";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

export default function LogoIcon() {
  return (
    <>
      <NavBarLink to={ROUTES.ROOT}>
        <IconButton sx={{paddingRight: 2}} disableRipple>
          <Avatar title="BCards"
            src="\assets\images\business-card.png"
            alt="Bussiness card icon"
          />
        </IconButton>
      </NavBarLink>
    </>
  );
}
