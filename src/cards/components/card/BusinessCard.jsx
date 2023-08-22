import { Card, CardActionArea } from "@mui/material";
import React from "react";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import cardType from "../../models/cardType";
import { func } from "prop-types";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../../users/providers/UserProvider";
import ROUTES from "../../../routes/routesModel";

export default function BusinessCard({
  card,
  handleDelete,
  handleLike,
  handleEdit,
  handleShare,
  handleCall,
}) {

  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <>
      <Card sx={{ width: 250, m: 2 }} elevation={4}> 
        <CardActionArea
          onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}`)}
        >
          <CardHead image={card.image} />
          <CardBody
            title={card.title}
            subtitle={card.subtitle}
            phone={card.phone}
            address={card.address}
            cardNumber={card.bizNumber}
          />
        </CardActionArea>
        <CardActionBar
          id={card._id}
          isOwnerOrAdmin={card.user_id===user?.id || user?.isAdmin}
          handleDelete={handleDelete}
          handleLike={user ? handleLike : null}
          handleEdit={ handleEdit }
          handleShare={ handleShare }
          handleCall={ handleCall }
          isLiked={card.likes.includes(user?.favoriteIdentifier) ? true : false}
        />
      </Card>
    </>
  );
}

BusinessCard.propTypes = {
  card: cardType.isRequired,
  handleDelete: func,
  handleLike: func,
  handleEdit: func,
  handleShare: func,
  handleCall: func,
};
