import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ROUTES from "../../routes/routesModel";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";


export default function MyCardsPage() {
  useAxios();
  const { cards, setCards, isLoading, error, handleGetMyCards } = useCards();
  const navigate = useNavigate();

  useEffect(() => {
    
      handleGetMyCards();
    
  }, []);

  return (
    <div>
      <Container>
        <PageHeader
          title=" My Cards"
          subtitle="On this page you can see your own cards"
        />
        <CardsFeedback cards={cards} setCards={setCards} isLoading={isLoading} error={error} />
        <Fab color="primary" aria-label="add" sx={{position: 'fixed', right: '5%', bottom: '10%'}} onClick={() => navigate(ROUTES.CREATE_CARD) }>
            <AddIcon />
        </Fab>
      </Container>
    </div>
  );
}
