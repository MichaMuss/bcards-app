import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import displayListItem from "./displayListItem";
import menuListItems from "./menuListItems";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../../../users/providers/UserProvider";
import Logo from "../logo/Logo";

export default function LeftNavigationCollapsed() {

    const {user} = useUser();

    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
  
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = (to) => {
        setAnchorElNav(null);
        
        if (to)
            navigate(to);

    };

    const getItem = (to,label,key) => 
                <MenuItem key={key} onClick={() => handleCloseNavMenu(to)}>
                    <Typography textAlign="center">{label}</Typography>
                </MenuItem>



    return <Box flexGrow={1} alignItems={"center"} display={"inline-flex"}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu(null)}
            >
              {
                menuListItems.map((item) => {
                    if(displayListItem(item, user)) 
                        return getItem(item.navTo,item.title,item.title);
              })
              }
            </Menu>
            <Logo />
            </Box>
}