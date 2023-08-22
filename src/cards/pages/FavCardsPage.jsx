import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import useAxios from "../../hooks/useAxios";


export default function FavCardsPage() {
  useAxios();
  const { cards, setCards, isLoading, error, handleGetFavCards } = useCards();
  const navigate = useNavigate();
  const {user} = useUser();
  useEffect(() => {
    
      handleGetFavCards(user);
    
  }, [handleGetFavCards]);

  return (
    <div>
      <Container>
        <PageHeader
          title="Favorite Cards"
          subtitle="On this page you can see your favorite cards"
        />
        <CardsFeedback cards={cards} setCards={setCards} isLoading={isLoading} error={error} />
      </Container>
    </div>
  );
}
