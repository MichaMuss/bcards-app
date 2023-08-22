import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const {isDark} = useTheme();
  const navigate = useNavigate();
  return <Container>
  <Grid container spacing={2} justifyContent={"center"}>
    <Grid item xs={12}>
      <Typography sx={{color: isDark ? "white" : "black"}} variant="h4" color="initial" textAlign={"center"} pt={4}>
        Opps... We couldn't find the page.
      </Typography>
    </Grid>
    <Grid item xs={12} md={5} textAlign={"center"}>
      <img
        style={{filter: `invert(${isDark ? 1 : 0})`}}
        width="100%"
        src="/assets/images/broken-robot-error.png"
        alt="broken robot"
      />
    </Grid>
    <Grid item xs={12} display={"flex"} justifyContent={"center"}>
        <Button variant={"contained"} onClick={() => navigate(-1)}>Return</Button>
    </Grid>
  </Grid>
</Container>;
}
