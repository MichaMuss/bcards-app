import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { List, ListItem, ListItemButton, Typography } from '@mui/material';
import {
    EmailShareButton, 
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    FacebookIcon,
    WhatsappIcon,
    TwitterIcon,
    EmailIcon,} from 'react-share';

export default function ShareCardDialog({open, card, handleClose}) {
  
    const ListItemStyle = {py: 0};

  return (card && <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="share-dialog-title"
            aria-describedby="share-dialog-description"
        >
        <DialogTitle id="share-dialog-title">
          Choose sharing platform
        </DialogTitle>
        <List>
            <ListItem sx={ListItemStyle}>
                <ListItemButton onClick={()=>handleClose()} disableRipple sx={{flexGrow: 0}} >
                    <FacebookShareButton url={`/cards/${card._id}`} quote={card.title}>
                            <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <Typography px={2}>Facebook</Typography>
                </ListItemButton>
                
            </ListItem>
            <ListItem sx={ListItemStyle}>
                <ListItemButton onClick={()=>handleClose()} disableRipple sx={{flexGrow: 0}}>
                    <WhatsappShareButton url={`/cards/${card._id}`} title={card.title}>
                            <WhatsappIcon size={32} round={true} />        
                    </WhatsappShareButton>
                    <Typography px={2}>Whatsapp</Typography>
                </ListItemButton>
            </ListItem>
            <ListItem sx={ListItemStyle}>
                <ListItemButton onClick={()=>handleClose()} disableRipple sx={{flexGrow: 0}} >
                    <TwitterShareButton url={`/cards/${card._id}`} title={card.title}>
                            <TwitterIcon size={32} round={true} />        
                    </TwitterShareButton>
                    <Typography px={2}>Twitter</Typography>
                </ListItemButton>
            </ListItem>
            <ListItem sx={ListItemStyle}>
                <ListItemButton onClick={()=>handleClose()} disableRipple sx={{flexGrow: 0}} >
                    <EmailShareButton url={`/cards/${card._id}`} subject='Check this business card'
                            body={card.description}>
                            <EmailIcon size={32} round={true} />        
                    </EmailShareButton>
                    <Typography px={2}>Email</Typography>
                </ListItemButton>
            </ListItem>
        </List>
        <DialogActions>
          <Button onClick={handleClose} autoFocus fullWidth variant='outlined'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>);
  
}