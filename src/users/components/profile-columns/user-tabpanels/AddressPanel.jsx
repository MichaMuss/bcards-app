
import { Button, Grid } from "@mui/material";
import Input from "../../../../forms/components/Input";

function AddressPanel({data, error, onChange}) {


    return ( <>
                <Input sm={6}
                    data={data} 
                    name={"city"}
                    error={error["city"]}
                    onChange={onChange} 
                    required={true} 
                    label={"City"} />
                <Input sm={6}
                    data={data} 
                    name={"street"}
                    error={error["street"]}
                    onChange={onChange} 
                    required={true}
                    label={"Street (No. & Name)"} />
                <Input sm={6}
                    data={data} 
                    name={"houseNumber"}
                    error={error["houseNumber"]}
                    onChange={onChange} 
                    label={"Apartment"} />
                <Input sm={6}
                    data={data} 
                    name={"state"}
                    error={error["state"]}
                    onChange={onChange} 
                    label={"State"} />
                <Input sm={6}
                    data={data} 
                    name={"country"}
                    error={error["country"]}
                    onChange={onChange} 
                    required={true}
                    label={"Country"} />
                <Input sm={6}
                    data={data} 
                    name={"zip"}
                    error={error["zip"]}
                    onChange={onChange} 
                    required={true}
                    label={"Zip Code"} />
            </>
        
    );
}

export default AddressPanel;