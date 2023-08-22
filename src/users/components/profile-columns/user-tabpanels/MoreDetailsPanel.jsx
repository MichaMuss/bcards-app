
import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import Input from "../../../../forms/components/Input";

function MoreDetailsPanel({data, setData, error, onChange}) {
    return ( <>
                <Input 
                    data={data} 
                    name={"email"}
                    error={error["email"]}
                    onChange={onChange} 
                    required={true} 
                    label={"Email"} />
                <Input 
                    data={data} 
                    name={"phone"}
                    error={error["phone"]}
                    onChange={onChange} 
                    required={true}
                    label={"Phone No."} />
                <Grid item>
                    <FormControlLabel control={<Checkbox checked={data.isBusiness} onChange={onChange} />} label="Business account" />
                </Grid>
            </>
        
    );
}

export default MoreDetailsPanel;