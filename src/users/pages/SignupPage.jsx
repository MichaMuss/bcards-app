import useUsers from "../hooks/useUsers";
import { Checkbox, Container, FormControlLabel, Grid, Paper } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useForm from "../../forms/hooks/useForm";
import signupSchema from "../models/joi-schema/signupSchema";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import AvatarInput from "../../forms/components/AvatarInput";

export default function SignupPage() {

  const {handleSignup} = useUsers();

  const  {  data, 
            errors,
            onSubmit,
            handleChange,
            handleReset,
            validateForm,
            setData} = useForm( initialSignupForm, signupSchema, handleSignup);

  return  <Container maxWidth="md" sx={{paddingTop: 5}}>
            <Paper>
            <Form spacing={3} onReset={handleReset} onSubmit={onSubmit} validateForm={validateForm} title="Signup" >
              <Input md={6}
                  variant="outlined"
                  name="first"
                  data={data}
                  label="First Name"
                  required
                  error={errors["first"]}
                  onChange={handleChange}
              />
              <Input 
                  md={6}
                  variant="outlined"
                  name="middle"
                  data={data}
                  label="Middle Name"
                  error={errors["middle"]}
                  onChange={handleChange}
              />
              <Input 
                  md={6}
                  variant="outlined"
                  name="last"
                  data={data}
                  label="Last Name"
                  required
                  error={errors["last"]}
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
                  name="password"
                  data={data}
                  label="Password"
                  required
                  type="password"
                  error={errors["password"]}
                  onChange={handleChange}
              />
              <AvatarInput name="url" 
                            label={"Image URL"} 
                            data={data} 
                            setData={setData}
                            error={errors["url"]} 
                            handleChange={handleChange}  
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
                  name="street"
                  data={data}
                  label="Street Name"
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
                  label="state"
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
              <Grid item sm={12} md={6}>
                <FormControlLabel control={<Checkbox name={"isBusiness"} onChange={({target}) => setData({...data, isBusiness: target.checked} )} />} label="Signup as business" />
              </Grid>
            </Form>
            </Paper>
          </Container>
}
