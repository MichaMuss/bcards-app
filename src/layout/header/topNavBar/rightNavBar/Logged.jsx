import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import useUsers from "../../../../users/hooks/useUsers";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";

export default function Logged() {
  const { handleLogout } = useUsers();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = ['Profile', 'Edit user', 'Logout'];
  const navigate = useNavigate();
  const handleCloseUserMenu = (setting) => {
    
    setAnchorElUser(null);
    
    if (setting===settings[0]){
      navigate(ROUTES.USER_PROFILE);  
    }else if (setting===settings[1]){
      navigate(ROUTES.EDIT_USER);
    }else if (setting===settings[2]){
      handleLogout();
      navigate(ROUTES.ROOT);
    }
  };
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const {user} = useUser();

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }} onClick={handleOpenUserMenu}>
          <Avatar src={user.url}>{user.first.charAt(0)}</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
    </>
  );
}
