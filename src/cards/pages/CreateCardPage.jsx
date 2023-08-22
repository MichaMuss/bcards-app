import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import CardForm from "../components/CardForm";
import useAxios from "../../hooks/useAxios";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import ReturnToolbar from "../../components/ReturnToolbar";

export default function CreateCardPage() {
  useAxios();
  const {user} = useUser();
  const {handleCreateCard} = useCards();
  const initialErrorState = {title: undefined,subtitle: undefined,description: undefined,phone: undefined,
                          email: undefined,web: undefined,url: undefined,alt: undefined,
                          street: undefined,city: undefined, country: undefined, state: "", 
                          zip: undefined, houseNumber: undefined,
                          user_id: ""}

  const handleSubmit = (data) => {

      handleCreateCard(data);

  }
  
  return (
    <div>
    <ReturnToolbar />
    <Container>
      <CardForm formTitle="Create card" initialData={{user_id: user.id}} submitFunc={handleSubmit} initialError={initialErrorState} />
    </Container>
    </div>  
  );
}
