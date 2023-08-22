import { Avatar, Box, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Typography, styled } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StyleIcon from '@mui/icons-material/Style';
import BusinessIcon from '@mui/icons-material/Business';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PlaceIcon from '@mui/icons-material/Place';
import DomainDisabledIcon from '@mui/icons-material/DomainDisabled';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeFilledIcon  from '@mui/icons-material/AccessTimeFilled';
import { useTheme } from "../../../providers/ThemeProvider";

function ProfileColumn({userProfile}) {

    const {image,name, address, cards,} = userProfile;
    const {isDark} = useTheme();
    const lastLogin = userProfile.Logins.lastLogin || null;
    const lastLoginDate = lastLogin && new Date(lastLogin);
    const getTotalLikes = () => { 
        let sum = 0; 
        cards.forEach(element => {
            sum += element.likes.length;
        });
    return (sum || "N/A");
    }
    
    const StackTypo = styled(Typography)(({theme,fontWeight}) => ({
        display: "block",
        fontSize: 14,
        fontWeight: fontWeight,
        py: 1,
        lineHeight: "2.8rem",
    }));

    return ( 
        <Paper sx={{marginTop: "35%", mb: 3, }}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
                <Avatar src={image.url} sx={{ width: '70%', 
                                                height: 'auto', 
                                                backgroundColor:'white',
                                                marginTop: "-35%", 
                                                outline: '2px solid blue', 
                                                outlineColor: isDark ? 'lightsalmon' : 'lightblue',
                                                outlineOffset:'-2px'}} alt={image.alt} />
                <Typography py={4} textTransform={"capitalize"}><strong>{name.first} {name.middle} {name.last}</strong></Typography>
                <Stack direction={"row"} justifyContent={"space-evenly"} width={"100%"}>
                    <Box textAlign={"center"}>
                        <StackTypo fontWeight="bolder">Created at</StackTypo>
                            <AccountCircleIcon color={"info"} />
                            <StackTypo>{new Date(userProfile.createdAt).toLocaleDateString()}</StackTypo>
                    </Box>
                    <Box textAlign={"center"}>
                        <StackTypo fontWeight="bolder">Total cards</StackTypo>
                            <StyleIcon color={"info"} />
                        <StackTypo>{userProfile.cards.length || 'N/A'}</StackTypo>
                    </Box>
                    <Box textAlign={"center"}>
                        <StackTypo fontWeight="bolder">Card likes</StackTypo>
                            <FavoriteIcon color={"info"} />
                        <StackTypo>{getTotalLikes()}</StackTypo>
                    </Box>
                </Stack>
                <List>
                    <ListItem>
                        <ListItemIcon><LocalPhoneIcon /></ListItemIcon>
                        <ListItemText primary="Phone No." secondary={userProfile.phone} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><PlaceIcon /></ListItemIcon>
                        <ListItemText primary="Address" secondary={<Typography textTransform={"capitalize"}>{`${address.street} ,Apt. ${address.houseNumber.toString()} ,${address.city} ,${address.state} ,${address.country} ,${address.zip}`}</Typography>} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><AlternateEmailIcon /></ListItemIcon>
                        <ListItemText primary="Email" secondary={userProfile.email} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>{userProfile.isBusiness ? <BusinessIcon /> : <DomainDisabledIcon />}</ListItemIcon>
                        <ListItemText primary="Business account" secondary={userProfile.isBusiness ? "Registered as business" : "NOT registered as bussiness"} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><AccessTimeFilledIcon /></ListItemIcon>
                        <ListItemText primary="Last login" secondary={lastLoginDate && lastLoginDate.toLocaleDateString() + ' ' + lastLoginDate.toLocaleTimeString() || "N/A"} />
                    </ListItem>
                </List>
            </Box>
        </Paper> );
}

export default ProfileColumn;

