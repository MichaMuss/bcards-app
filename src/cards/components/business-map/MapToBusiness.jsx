import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

function MapToBusiness({coords,businessName}) {
        useEffect(() => {
            
            if(coords===null || coords===undefined)
                return;

            const funcScript = document.createElement("script");
            const func = `function GetMap()
            {
                var map = new Microsoft.Maps.Map('#myMap',{
                    credentials: '${process.env.REACT_APP_BING_KEY}',
                    center: new Microsoft.Maps.Location(${coords[0]}, ${coords[1]}),
                    mapTypeId: Microsoft.Maps.MapTypeId.road,
                    zoom: 18}
                );

                var center = map.getCenter();

                var pin = new Microsoft.Maps.Pushpin(center, {
                    title: '${businessName}',
                    text: '!'
                });

                //Add the pushpin to the map
                map.entities.push(pin);

            }`;

            
            
            funcScript.append(func);

            const script = document.createElement("script");

            script.src = `http://www.bing.com/api/maps/mapcontrol?callback=GetMap`;
            script.async = true;
            script.defer = true;


                document.head.appendChild(funcScript);
                document.head.appendChild(script);
            
                return (() => {

                    document.head.removeChild(funcScript);
                    document.head.removeChild(script);

                });

        } ,[coords]);
    
    return ((coords) && <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography variant="h3" textAlign={"center"} py={3}>Map to business</Typography>
         <div id="myMap" style={{position: 'relative',width:'600px',
                                                      height:'400px'}}></div>
    </Box> );
}

export default MapToBusiness;