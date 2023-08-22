import { Container } from "@mui/material";
import React, { useEffect, } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { useSearchParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

export default function CardsPage() {
  useAxios();
  const { setCards, filterCards, isLoading, error, handleGetCards } = useCards();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    
      handleGetCards().then();
    
  }, []);

  const textToSearch = searchParams.get("t");

  return (
    <div>
      <Container>
        <PageHeader
          title="Cards"
          subtitle={textToSearch ? `Displays search result for - \'${textToSearch}\'` : "On this page you can find all bussines cards from all categories"}
        />
        <CardsFeedback cards={filterCards(searchParams.get("t"))} setCards={setCards} isLoading={isLoading} error={error} />
      </Container>
    </div>
  );
}
