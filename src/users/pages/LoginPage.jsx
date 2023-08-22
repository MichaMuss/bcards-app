import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import { Container, FormLabel, Grid, Paper } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import useUsers from "../hooks/useUsers";
import { useUser } from "../providers/UserProvider";

export default function LoginPage() {
  const {value, handleLogin, handleLogout } = useUsers();
  
  useEffect(()=>{
    handleLogout();
  },[handleLogout]);
  

  const { data, errors, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  const { error } = value;

  return (
    <Container
      sx={{
        pt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper>
      <Form
        title="Login Form"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        styles={{ maxWidth: "450px" }}
        validateForm={rest.validateForm}
        to={ROUTES.ROOT}
      >
        <Input
          label="email"
          name="email"
          data={data}
          error={errors.email}
          onChange={rest.handleChange}
        />
        <Input
          label="password"
          name="password"
          data={data}
          error={errors.password}
          onChange={rest.handleChange}
          type="password"
        />
        <Grid item xs={12} padding={1}>
          <FormLabel error>{error ? error : ""}</FormLabel>
        </Grid>
      </Form>
      </Paper>
    </Container>
  );
}
