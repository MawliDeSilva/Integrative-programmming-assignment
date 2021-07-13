import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import TempRecordTable from "./TempReadingTable";

// const api_url ='http://localhost:8080/tempreadings/';
async function getData(){
    // const response = await fetch(api_url);
    // const data = await response.json();
    // const{id, }
        let TempData =[];
        let TimeData =[];

        axios.get("http://localhost:8080/tempreadings/")
        // axios.get("http://localhost:8080/tempreadings/")
        .then(response => {
            console.log(response) 
            //  for (const dataObj of response.data.data){
            for (const dataObj of response.data){
                TempData.push(parseFloat(dataObj.data_value))
                TimeData.push(parseFloat(dataObj.date))
            }
        })
        .catch((error) =>{
            console.log(error);
        })
        console.log(TempData, TimeData)
}


