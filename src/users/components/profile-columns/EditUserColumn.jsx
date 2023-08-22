import { Box, Paper, Tab, Tabs} from "@mui/material";
import { useState } from "react";
import useForm from "../../../forms/hooks/useForm";
import NamePanel from "./user-tabpanels/NamePanel";
import signupSchema from "../../models/joi-schema/signupSchema";
import AvatarPanel from "./user-tabpanels/AvatarPanel";
import AddressPanel from "./user-tabpanels/AddressPanel";
import MoreDetailsPanel from "./user-tabpanels/MoreDetailsPanel";
import PasswordPanel from "./user-tabpanels/PasswordPanel";
import UserTabPanel, { tabTitles } from "./user-tabpanels/UserTabPanel";
import useUsers from "../../hooks/useUsers";
import useFormFullSchema from "../../../forms/hooks/useFormFullSchema";
import passwordSchema from "../../models/joi-schema/passwordSchema";
import { useUser } from "../../providers/UserProvider";
import ROUTES from "../../../routes/routesModel";
import { useNavigate } from "react-router-dom";



  function a11yProps(index) {
    return {
      id: `user-tab-${index}`,
      'aria-controls': `user-tabpanel-${index}`,
    };
  }

function EditUserColumn({user: recUser, refreshCallback}) {

    const {user} = useUser();
    const navigate = useNavigate();
    
    const {handleLogout, handleUpdateUser, handleUpdatePassword} = useUsers();
    const [relog, setRelog] = useState(false);
    
    

    const initialData = {...recUser.name, 
                        ...recUser.image, 
                        ...recUser.address, 
                        email: recUser.email, 
                        phone: recUser.phone, 
                        isBusiness: recUser.isBusiness, };

    const {data,
            errors,
            handleChange,
            validateForm,
            setData,} = useForm(initialData, 
                                signupSchema);
    
    const localeHandleChange = (e) => {
      const {target} = e;
      
      switch(target.name){
        case "isBusiness":
          setRelog(true);
          setData({...data, isBusiness: target.checked});
          return;
        case "first":
        case "url":
        case "email":
          setRelog(true);
          break;
        default: 
          break;
      }

      handleChange(e);

    };

    const handleRenewClick = (e) => {
      handleUpdatePassword(recUser._id, passData).then((res) =>  {
          if(recUser._id===user._id){
              handleLogout();
              navigate(ROUTES.LOGIN);
          }
      });
    }

    const {data: passData, 
            getErrorMessage,
            handleChange: handlePassChange, 
            isFormValid, } = useFormFullSchema({password: "", repeat_password: ""},
                                          passwordSchema, handleRenewClick);
    

    const handleSaveClick = (e) => {
      handleUpdateUser(recUser._id, data).then((res) => {
        if(relog && user._id===recUser._id){
          handleLogout();
          navigate(ROUTES.LOGIN);
        }else
          refreshCallback();
      });
  }

    const [value, setValue] = useState(0);

    const handleTabChange = (event, newValue) => {
      setValue(newValue);
    };

    return ( 
        <Paper>         
          <Box sx={{ width: '100%', mb: 3, }} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleTabChange} aria-label="user tabs">
                {tabTitles.map((tab, index) => <Tab key={index} label={tab} {...a11yProps(index)} />)}
              </Tabs>
            </Box>
            <UserTabPanel value={value} index={0} submitCallback={handleSaveClick} isFormValid={validateForm()} relog={relog} >
                <NamePanel data={data} onChange={localeHandleChange} error={errors} />
            </UserTabPanel>
            <UserTabPanel value={value} index={1} submitCallback={handleSaveClick} isFormValid={validateForm()} relog={relog}>
                <AvatarPanel data={data} setData={setData} onChange={localeHandleChange} error={errors} />
            </UserTabPanel>
            <UserTabPanel value={value} index={2} submitCallback={handleSaveClick} isFormValid={validateForm()} relog={relog}>
                <AddressPanel data={data} onChange={localeHandleChange} error={errors} />
            </UserTabPanel>
            <UserTabPanel value={value} index={3} submitCallback={handleSaveClick} isFormValid={validateForm()} relog={relog}>
                <MoreDetailsPanel data={data} onChange={localeHandleChange} error={errors} setData={setData} />
            </UserTabPanel>
            <UserTabPanel value={value} index={4} submitCallback={handleRenewClick} isFormValid={isFormValid()} relog={relog}>
                <PasswordPanel data={passData} 
                               onChange={handlePassChange} 
                               getErrorMessage={getErrorMessage} />
            </UserTabPanel>
          </Box>
        </Paper> );
}

export default EditUserColumn;