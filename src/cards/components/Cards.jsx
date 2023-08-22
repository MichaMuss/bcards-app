import { Grid } from "@mui/material";
import { arrayOf, func } from "prop-types";
import React, { useState } from "react";
import BusinessCard from "./card/BusinessCard";
import cardType from "../models/cardType";
import useCardActions from "../hooks/useCardActions";
import DeleteCardDialog from "../dialogs/DeleteCardDialog";
import ShareCardDialog from "../dialogs/ShareCardDialog";

export default function Cards({ cards, setCards }) {
  
  const {handleDelete, handleToggleLike, handleEdit, handleCall} = useCardActions(cards, setCards);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [selectedCard,setSelectedCard] = useState(null);
  
  const openDeleteDialog = (id) => {
    setSelectedCard(cards.find((crd) => crd._id === id));
    setDeleteOpen(true);
  }

  const deleteCallback = (id) => {
    handleDeleteClose();

    if(id==null)
      return;
    
    handleDelete(id);

  }

  const handleDeleteClose = () =>{
    setDeleteOpen(false);
    setSelectedCard(null);
  }


  const openShareDialog = (id) => {
    setSelectedCard(cards.find((crd) => crd._id === id));
    setShareOpen(true);
  }


  const handleShareClose = () =>{
    setShareOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <Grid container>
        {cards.map((card) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <BusinessCard
              card={card}
              key={card._id}
              handleDelete={openDeleteDialog}
              handleLike={handleToggleLike}
              handleEdit={handleEdit}
              handleShare={openShareDialog}
              handleCall={handleCall}
            />
          </Grid>
        ))}
      </Grid>
      <DeleteCardDialog open={selectedCard ? deleteOpen : false} callback={deleteCallback} cardId={selectedCard?._id} handleClose={handleDeleteClose}  />
      <ShareCardDialog open={selectedCard ? shareOpen : false} card={selectedCard} handleClose={handleShareClose} />
    </>
  );
}

Cards.propTypes = {
  cards: arrayOf(cardType),
  setCards: func,
};
