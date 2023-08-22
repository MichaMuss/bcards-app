import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import {useTheme as bcUseTheme } from "../providers/ThemeProvider";

function ReturnToolbar() {
    const theme = useTheme();

    const {isDark} = bcUseTheme();
    const navigate = useNavigate();
    return ( <AppBar color="info" position="sticky"><Toolbar>
                <IconButton onClick={(e) => navigate(-1)}><ArrowBackIcon htmlColor={isDark ? "Orange" : "White"} /></IconButton>
        </Toolbar></AppBar>);
}

export default ReturnToolbar;