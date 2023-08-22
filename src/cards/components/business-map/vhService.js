import axios from "axios";
import { createSearchParams } from "react-router-dom";
const vhBaseUrl = "http://dev.virtualearth.net/REST/v1/Locations";

export const getCoordinates = async (address) => {

    const bingRestUrl = vhBaseUrl + "?" +
              createSearchParams({postalCode: address.zip,
                        addressLine: `${address.street},${address.city},${address.country},${address.state}`,
                        maxResults: 1,
                        key: process.env.REACT_APP_BING_KEY,
                        }).toString();
    try{
    
        const response = await axios.get(bingRestUrl);
        
        if (response.status===200){
            return response.data.resourceSets[0]?.resources[0]?.geocodePoints[0]?.coordinates;
        }else{
            return Promise.reject({error: "failed to fetch geoPoints"})    
        }

    }catch(error){
        return Promise.reject(error);
    }
    
                      
  }