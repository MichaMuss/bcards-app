import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavItem from "../routes/components/NavItem";

export default function SandBox() {
  return (
    <div>
      <AppBar position="sticky" color="info">
        <Toolbar>
          <NavItem to="first" label="firstComp" sx={{ color: "black" }} />
          <NavItem to="second" label="secondComp" sx={{ color: "black" }} />
          <NavItem to="life-cycle" label="LifeCycle" sx={{ color: "black" }} />
          <NavItem to="country" label="error handling" sx={{ color: "black" }} />
          <NavItem to="memo" label="Memoization" sx={{ color: "black" }} />
          <NavItem to="counter" label="My counter" sx={{ color: "black" }} />
          <NavItem to="countries" label="Countries" sx={{ color: "black" }} />
          <NavItem to="grand" label="Context" sx={{ color: "black" }} />
          <NavItem to="form" label="My form" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
