import { Container, FormLabel, Grid, Paper } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useForm from "../../forms/hooks/useForm";
import cardSchema from "../models/joi-schemas/cardSchema";

export default function CardForm({formTitle, initialData, initialError, submitFunc}) {

    const preSubmit = () => {
        submitFunc(data);
      }

  const  {  data, 
            errors,
            onSubmit,
            handleChange,
            handleReset,
            validateForm,} = useForm( initialData, cardSchema, preSubmit, initialError);

  

  return  <Container maxWidth="md" sx={{paddingTop: 5}}>
            <Paper>
            <Form spacing={3} onReset={handleReset} onSubmit={onSubmit} validateForm={validateForm} title={formTitle} >
                <Grid item xs={12}>
                    <FormLabel sx={{fontSize: '0.8rem'}}>Please fill the form bellow.</FormLabel><br />
                    <FormLabel sx={{fontSize: '0.8rem'}}>Fields marked with <small>*</small> are required.</FormLabel>
                </Grid>
              <Input md={6}
                  variant="outlined"
                  name="title"
                  data={data}
                  label="Card title"
                  required
                  error={errors["title"]}
                  onChange={handleChange}
              />
              <Input md={6}
                  variant="outlined"
                  name="subtitle"
                  data={data}
                  label="Subtitle"
                  required
                  error={errors["subtitle"]}
                  onChange={handleChange}
              />
              <Input 
                  md={12}
                  rows={3}
                  variant="outlined"
                  name="description"
                  data={data}
                  label="Description"
                  required
                  error={errors["description"]}
                  onChange={handleChange}
              />
              <Input 
                  variant="outlined"
                  name="url"
                  data={data}
                  label="Image URL"
                  error={errors["url"]}
                  onChange={handleChange}
              />
              
              
               <Input 
                  md={6}
                  variant="outlined"
                  name="alt"
                  data={data}
                  label="Alternative text"
                  required
                  error={errors["alt"]}
                  onChange={handleChange}
              />
              <Input 
                  md={6}
                  variant="outlined"
                  name="phone"
                  data={data}
                  label="Phone"
                  required
                  error={errors["phone"]}
                  onChange={handleChange}
              />
              <Input 
                  md={6}
                  variant="outlined"
                  name="email"
                  data={data}
                  label="Email"
                  required
                  error={errors["email"]}
                  onChange={handleChange}
              />
              <Input 
                  md={6}
                  variant="outlined"
                  name="web"
                  data={data}
                  label="Website"
                  required
                  error={errors["web"]}
                  onChange={handleChange}
              />
              
             
              <Input 
                  md={6}
                  variant="outlined"
                  name="street"
                  data={data}
                  label="Street (No. & Name)"
                  required
                  error={errors["street"]}
                  onChange={handleChange}
              />
              <Input 
                  md={6}
                  variant="outlined"
                  name="houseNumber"
                  data={data}
                  label="Apartment"
                  required
                  error={errors["houseNumber"]}
                  onChange={handleChange}
              />
              <Input 
                  md={6}
                  variant="outlined"
                  name="city"
                  data={data}
                  label="City"
                  required
                  error={errors["city"]}
                  onChange={handleChange}
              />
              <Input 
                  md={6}
                  variant="outlined"
                  name="country"
                  data={data}
                  label="Country"
                  required
                  error={errors["country"]}
                  onChange={handleChange}
              />
              <Input 
                  md={6}
                  variant="outlined"
                  name="state"
                  data={data}
                  label="state/Province"
                  error={errors["state"]}
                  onChange={handleChange}
              />
              <Input 
                  md={6}
                  variant="outlined"
                  name="zip"
                  data={data}
                  label="Zip Code"
                  required
                  error={errors["zip"]}
                  onChange={handleChange}
              />
            </Form>
            </Paper>
          </Container>
}
