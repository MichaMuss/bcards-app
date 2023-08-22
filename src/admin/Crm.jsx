import { AppBar, Container, Toolbar } from "@mui/material";
import NavItem from "../routes/components/NavItem";
import { Outlet } from "react-router-dom";

function Crm() {
    return ( 
        <div>
        <AppBar position="sticky" color="info">
          <Toolbar>
            <NavItem to="users" label="Users" sx={{ color: "black" }} />
          </Toolbar>
        </AppBar>
        <Container>
          <Outlet />
        </Container>
      </div>
     );
}

export default Crm;