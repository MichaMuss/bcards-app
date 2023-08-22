import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardForm from "../components/CardForm";
import useAxios from "../../hooks/useAxios";
import useCards from "../hooks/useCards";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import ReturnToolbar from "../../components/ReturnToolbar";

export default function EditCardPage() {
  useAxios();
  
  const [card, setCard] = useState(null);
  
  const {isLoading,error, handleGetCard, handleUpdateCard} = useCards();

  const {id} = useParams();

  const handleSubmit = (data) => {

      handleUpdateCard(id, data);

  }

  useEffect(() => {
    handleGetCard(id).then((crd) => {
      setCard(crd);
    });

  },[]);
  
  return (
    <div>
      <ReturnToolbar />
      <Container>
        {isLoading && <Spinner />}
        {error && <Error errorMessage={error.message} />}
        {!(isLoading || error) && <CardForm formTitle="Edit card" initialData={card} submitFunc={handleSubmit} />}
      </Container>
    </div>
  );
}
