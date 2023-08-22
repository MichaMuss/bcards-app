import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Country() {
  
  const getDataFromAPI1 = async () => {
    try {
      const { data } = await axios.get("http://localhost:8181/not_existed_request");
      return data;
    } catch (err) {
      console.log(err);
      //return Promise.reject(err);
    }
    return "end of function";
  };

  const wCatch = (e) => {
    getDataFromAPI1().then((data) => {
        console.log(data);
    })
    /////////.catch(error => console.log("catched_w"))
    ;
  };

  //////////////////////////////////////////////////////
  const getDataFromAPI2 = async () => {
    try {
      const { data } = await axios.get("http://localhost:8181/not_existed_request");
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  

  const woCatch = (e) => {
    getDataFromAPI2().then((data) => {
      console.log(data);
    }).catch(error => console.log("catched_wo"));;
  };

  return <div style={{padding: '40px'}}>  

    <Button onClick={woCatch} variant={"outlined"}>Call error WITHOUT catch</Button><br /><br />
    <Button onClick={wCatch} variant={"outlined"}>call error WITH catch</Button>
  </div>;
}
