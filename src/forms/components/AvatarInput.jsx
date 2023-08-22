import { Autocomplete, Avatar, Grid, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";
import Input from "./Input";
import { useMemo, useState } from "react";

function AvatarInput({name,label, data, setData, error, handleChange}) {

    const NUM_OF_AVATARS = 24;
    const BASE_URL = "http://127.0.0.1:3000/assets/images/avatars/";

    const [tfValue, setTfValue] = useState(data[name]); //text field value

    const avatarsBase = useMemo(() => Array(NUM_OF_AVATARS).fill().map((value, index) => 
        ({  
            index: index,
            label: "Avatar " + index.toString(),
            url: `${BASE_URL}avatar_${index.toString()}.png`}
        )),[]);
    
    const arbit = avatarsBase.find((a) => a.url === tfValue.toLowerCase() ) ? "" : tfValue;
        
    const avatars = [...avatarsBase, {index: NUM_OF_AVATARS, label: arbit, url: arbit}];
        

        
    return ( 
            <Grid item xs={12} >
              <Autocomplete
                    freeSolo
                    disableClearable
                    getOptionLabel={(option) =>  option.url}
                    value={avatars.find((o) => o.url.toLowerCase()===tfValue.toLowerCase())}
                    onChange={(e, value) => {
                            setTfValue(value.url);
                            handleChange({target:{name: name ,value: value.url}});
                        }}
                    id="avatar-selector"
                    options={avatars}
                    renderOption={(props, option) => <ListItem {...props}>
                                                        {option.index < NUM_OF_AVATARS && <ListItemAvatar>
                                                            <Avatar src={option.url} />
                                                        </ListItemAvatar>}
                                                            <ListItemText><Typography>{option.label}</Typography></ListItemText>
                                                        </ListItem>}
                    renderInput={(params) => <TextField
                            {...params}
                            variant="outlined"
                            name={name}
                            label={label}
                            fullWidth
                            onChange={({target}) => {
                                    setTfValue(target.value);
                                    handleChange({target:{name: name ,value: target.value}});
                            }}
                            helperText={error}
                            error={Boolean(error)}
                            
                            
                        />
                    }
                />
            </Grid>
     );
}

export default AvatarInput;