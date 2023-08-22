import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Badge, Box, Container, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import Spinner from "../../components/Spinner";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useTheme } from "@emotion/react";
import ReturnToolbar from "../../components/ReturnToolbar";
import MapToBusiness from "../components/business-map/MapToBusiness";
import { getCoordinates } from "../components/business-map/vhService";
import useCards from "../hooks/useCards";
import Error from "../../components/Error";


export default function CardDetailsPage() {
  
  const [card, setCard] = useState(null);
  const { id } = useParams();
  const [coordinates, setCoordinates] = useState(null);
  const {isLoading, error ,handleGetCard} = useCards();
  
  useEffect(() => {
    handleGetCard(id).then((crd) => {
      console.log(crd);
      setCard(crd);
      getCoordinates({
            street: crd.street, 
            city: crd.city, 
            country: crd.country, 
            state: crd.state, 
            zip: crd.zip}).then( geoPoints => 
        setCoordinates(geoPoints)).catch((error) => 
        {
          setCoordinates(null);
        });
          
    });
  },[]);

  const iconColor = "secondary";
  const theme = useTheme();
  
  return <div>
          <ReturnToolbar />
          <Container sx={{py: 5}}>
            {isLoading && <Spinner />}
            {(!isLoading && error) &&
            <Error errorMessage={"Some error occured"} />}
            {!(isLoading || error) &&
            <Paper> 
              <Grid container  padding={5}>
                <Grid xs={12} item order={0}>
                  <Typography variant="h3" textTransform={"capitalize"}>{card.title}</Typography>
                  <Typography variant="h4" color={theme.palette.grey[500]} py={1} textTransform={"capitalize"}>{card.subtitle}</Typography>
                </Grid>
                <Grid item xs={12} md={6} order={{xs:2 ,md: 1}}>
                  <List>
                    <ListItem>
                      <Typography variant="subtitle1" paddingRight={1}>{card.description}</Typography>
                    </ListItem>
                  <ListItem>
                      <ListItemIcon><PhoneIcon  color={iconColor}/></ListItemIcon>
                      <ListItemText primary="Phone:" secondary={<Link href={`tel:${card.phone}`}>{card.phone}</Link>} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><AlternateEmailIcon color={iconColor} /></ListItemIcon>
                      <ListItemText primary="Email:" secondary={<Link href={`mailto:${card.email}`}>{card.email}</Link>} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><HomeIcon color={iconColor} /></ListItemIcon>
                      <ListItemText primary="Website:" secondary={<Link target="_blank" href={`${card.web}`}>{card.web}</Link>} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><LocationOnIcon color={iconColor} /></ListItemIcon>
                      <ListItemText primary="Address:" secondary={<Typography textTransform={"capitalize"}>{`${card.street} Apt. ${card.houseNumber}, ${card.city}, ${card.country}, ${card.zip}`}</Typography>} />
                    </ListItem>
                  </List>
                  <Box textAlign={"center"} padding={2} >
                  <Typography variant={"h5"} color={theme.palette.grey[700]}><Badge badgeContent={card.likes.length && card.likes.length}  color="primary" sx={{mx:2}}><FavoriteRoundedIcon htmlColor="red" /></Badge>{card.likes.length ? 'Users liked this card' : 'Not likes to this card yet'}</Typography>
                    
                  </Box>
                </Grid>
                <Grid xs={12} md={6} item order={{xs: 1, md: 2}}>
                  <Paper elevation={10} sx={{padding: 1}}>
                    <img src={`${card.url}`} title={card.alt} width={"100%"} style={{border: '1px solid rgba(0,0,0,0.25)'}} align="middle" />
                  </Paper>
                </Grid>
                <Grid xs={12} item order={3}>
                  <MapToBusiness coords={coordinates} businessName={card.title} />
                </Grid>
            </Grid>
            </Paper>}
        </Container>
        </div>
}

