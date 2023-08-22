import { Box, Button, Grid } from "@mui/material";
import { PropTypes } from "prop-types";
import SaveIcon from '@mui/icons-material/Save';

export const tabTitleIndex = {
    NAME: 0,
    AVATAR: 1,
    ADDRESS: 2,
    MORE: 3,
    PASSWORD: 4,
}

export const tabTitles = ["Name", "Avatar", "Address", "More", "Password"];

export default function UserTabPanel(props) {

    const { children, value, index, submitCallback, isFormValid, relog, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`user-tabpanel-${index}`}
        aria-labelledby={`user-tab-${index}`}
        {...other}
      >
        {value === index && <Box padding={{lg:6, xs:3,}} width={"100%"}>
                              <Grid container columnSpacing={6} rowSpacing={8}>
                                  {children}
                                  <Grid item xs={12}>
                                    <Button startIcon={<SaveIcon />} 
                                            variant="contained" 
                                            onClick={(e) => submitCallback(e)} 
                                            disabled={Boolean(isFormValid)}>{index===tabTitleIndex['PASSWORD'] ? `Renew password`  : `Save details${relog ? " *" : ""}`}</Button>
                                  </Grid>
                              </Grid>
                              </Box>}
      </div>
    );
  }

    
  UserTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    submitCallback: PropTypes.func.isRequired,
    relog: PropTypes.bool,
  };