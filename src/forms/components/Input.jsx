import React from "react";
import { string, bool, object, func, number } from "prop-types";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { makeFirstLetterCapital } from "../utils/algoMethods";

const Input = ({
  variant,
  type,
  name,
  data,
  label,
  required,
  error,
  rows,
  onChange,
  ...rest
}) => {
  return (
    <Grid item xs={12} {...rest}>
      <TextField
        variant={variant}
        label={makeFirstLetterCapital(label)}
        type={type}
        id={name}
        name={name}
        value={data[name] ? data[name] : ""}
        required={required}
        helperText={error}
        error={Boolean(error)}
        onChange={onChange}
        fullWidth
        rows={rows}
        multiline={rows ? true : false}
        autoComplete="off"
      />
    </Grid>
  );
};

Input.propTypes = {
  name: string.isRequired,
  required: bool,
  type: string.isRequired,
  error: string,
  onChange: func.isRequired,
  variant: string,
  data: object,
  rows: number,
};

Input.defaultProps = {
  required: false,
  type: "text",
  variant: "outlined",
};

export default React.memo(Input);
