import { CardContent, CardHeader, Divider, Tooltip, Typography } from "@mui/material";
import { number, string } from "prop-types";
import React from "react";
import addressType from "../../models/addressType";

export default function CardBody({
  title,
  subtitle,
  phone,
  address,
  cardNumber,
}) {
  return (
    <>
      <CardHeader title={title} subheader={subtitle} titleTypographyProps={{textTransform: 'capitalize'}} 
                                                     subheaderTypographyProps={{textTransform: 'capitalize'}}/>
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Phone:</strong> {phone}
        </Typography>
        <Tooltip title={`${address.street}, Apt. ${address.houseNumber}, ${address.city}, ${address.country}, ${address.state}, ${address.zip}`}
        ><Typography variant="body2" color="text.secondary" whiteSpace={"nowrap"} overflow={"hidden"} textOverflow={"ellipsis"} textTransform={"capitalize"}>
          <strong>Address:</strong> {address.street},
          Apt. {address.houseNumber}, {address.city}, {address.country}
        </Typography></Tooltip>
        <Typography variant="body2" color="text.secondary">
          <strong>Card Number:</strong> {cardNumber}
        </Typography>
      </CardContent>
    </>
  );
}

CardBody.propTypes = {
  address: addressType.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  phone: string.isRequired,
  cardNumber: number,
};
