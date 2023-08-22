import React from "react";
import { string } from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useTheme} from "../providers/ThemeProvider";
const Error = ({ errorMessage }) => {
  const {isDark} = useTheme();
  return (
    <Container>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={12}>
          <Typography variant="h5" color="initial" textAlign={"center"} sx={{color: isDark ? "white" : "black"}}>
            Oops... something went wrong: {errorMessage}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} justifyContent="center" display="flex">
          <img
            style={{filter: `invert(${isDark ? 1 : 0})`}}
            width="100%"
            src="/assets/images/broken-robot-error.png"
            alt="broken robot"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

Error.propTypes = {
  errorMessage: string.isRequired,
};

export default Error;
