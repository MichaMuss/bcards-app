import { Box, CardActions, IconButton, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { bool, func, string } from "prop-types";
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CardActionBar({
  id,
  isOwnerOrAdmin,
  handleDelete,
  handleLike,
  handleShare,
  handleEdit,
  handleCall,
  isLiked, 
}) {


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditLocal = () => {
    handleClose();
    handleEdit(id);

  }
  const handleDeleteLocal = () => {
    handleClose();
    handleDelete(id);

  }

  const ITEM_HEIGHT = 48;

  return (
    <>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box>
          {( isOwnerOrAdmin) && <IconButton  
            aria-label="more"
            id="action-button"
            aria-controls={open ? 'action-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleMoreClick}>
            <MoreVertIcon title="More actions" />
          </IconButton>}
          <Menu
        id="action-menu"
        MenuListProps={{
          'aria-labelledby': 'action-button',
        }}
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{vertical: 'top', horizontal: 'left'}}
        transformOrigin={{vertical: 'bottom', horizontal: 'left'}}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        
          <MenuItem onClick={() => handleEditLocal()}>
            {handleEdit && 
              <ListItemIcon>
                <ModeEditIcon />
              </ListItemIcon>}
              <Typography variant="inherit">Edit</Typography>
          </MenuItem>
          {handleDelete && 
          <MenuItem onClick={() => handleDeleteLocal()}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
          <Typography variant="inherit">Delete</Typography>
          </MenuItem>}
      </Menu>
        </Box>
        <Box>          
          {handleShare && <IconButton title="Share this card"
            onClick={() => handleShare(id)}
          >
            <ShareIcon />
          </IconButton>}
          {handleCall && 
          <IconButton title="Call this business" onClick={() => handleCall(id)}>
              <CallIcon />
          </IconButton>}
          {handleLike && 
          <IconButton
            title={isLiked ? "Remove from favorites" : "Add to favorites"}
            onClick={() => handleLike(id)}
          >
            <FavoriteTwoToneIcon htmlColor={isLiked ? "#f00" : ""} />
          </IconButton>}
        </Box>
      </CardActions>
    </>
  );
}

CardActionBar.propTypes = {
  id: string,
  isOwnerOrAdmin: bool,
  handleDelete: func,
  handleLike: func,
  handleEdit: func,
  handleShare: func,
  handleCall: func,
  isLiked: bool,
};
