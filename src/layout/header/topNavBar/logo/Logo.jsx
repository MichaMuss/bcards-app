import { Typography } from "@mui/material";
import React from "react";

export default function Logo() {
  return (
    <>
      <Typography
        margin={0}
        padding={0}
        variant="h4"
        sx={{
          display: { xs: "none", md: "inline-flex",},
          marginRight: 3,
          fontFamily: "fantasy",
          fontSize: '2rem'
        }}
      >
        BCard
      </Typography>
    </>
  );
}
