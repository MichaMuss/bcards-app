import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteCardDialog({open,cardId, callback, handleClose}) {
  
  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete a card?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete a card will cause to lose its data perminently. Are you sure you want to delete this card?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => callback(cardId)}>Delete</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
  );
}