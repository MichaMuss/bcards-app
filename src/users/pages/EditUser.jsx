import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditUserColumn from "../components/profile-columns/EditUserColumn";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import useUsers from "../hooks/useUsers";
import ReturnToolbar from "../../components/ReturnToolbar";
import Error from "../../components/Error";

export default function EditUser() {

  const { id } = useParams();
  const [curUser, setCurUser ] = useState(null);
  const [date, setDate] = useState(null);

  const {value, handleGetUser} = useUsers();
  const {isLoading, error} = value;

  useEffect(() => {
    handleGetUser(id).then((receivedUser) => {
      setCurUser(receivedUser);
    });
  }, [date]);

  const refresh = () => {
    setDate(Date.now());
  }


  return (<div>
          <ReturnToolbar />
          <Container>
            {isLoading && <Spinner />}
            {error && <Error />}
            {!(isLoading || error) && <>
                              <Typography variant="h3" textAlign="center" py={5}>Edit user</Typography>
                              <EditUserColumn refreshCallback={refresh} user={curUser} />
                            </>}
          </Container>
          </div>);
}
