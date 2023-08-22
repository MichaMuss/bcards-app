import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import useUsers from "../hooks/useUsers";
import ProfileColumn from "../components/profile-columns/ProfileColumn";
import EditUserColumn from "../components/profile-columns/EditUserColumn";
import Spinner from '../../components/Spinner';
import ReturnToolbar from "../../components/ReturnToolbar";
import PageHeader from "../../components/PageHeader";
import Error from "../../components/Error";


export default function UserProfile({swapColumns}) {
    const [userProfile, setProfile ] = useState(null);

    const [date, setDate] = useState(null);

    const {value, handleGetProfile} = useUsers();
    const {isLoading, error} = value;

    useEffect(() => {
      handleGetProfile().then((profile) => {
          setProfile(profile);
      });
    }, [date]);

    const refresh = () => {
      setDate(Date.now());
    }

  return (<>
    <ReturnToolbar />
    <Container maxWidth={false}>
      {isLoading && <Spinner />}
      {error && <Error />}
      {!(isLoading || error) && (<>
        <Grid container direction={"row"} columnSpacing={4} justifyContent={"center"}>
          <Grid item xs={12} sm={7} md={5} lg={4}></Grid>
          <Grid item xs={12} sm={12} md={7} lg={8}>
          <PageHeader
              title="Profile"
              subtitle="Here your can view and edit your profile"
            />
          </Grid>
          <Grid item xs={12} sm={7} md={5} lg={4} order={{xs: swapColumns ? 4 : 3, md: 3}}><ProfileColumn userProfile={userProfile}  /></Grid>
          <Grid item xs={12} sm={12} md={7} lg={8} order={{xs: swapColumns ? 3 : 4, md: 4}}><EditUserColumn user={userProfile} refreshCallback={refresh} /></Grid>
        </Grid>
        </>)}
    </Container></>);
}
