import React from 'react'
import axios from "axios";

export default function Compare() {
    const options = {
      method: 'GET',
      url: 'https://api-formula-1.p.rapidapi.com/rankings/drivers',
      params: {season: '2022'},
      headers: {
        'X-RapidAPI-Key': '8ef8fc27c6msh7504b9ec3178fa1p1a705fjsnfb988f103d4a',
        'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return (
        <div>Compare</div>
    )
}
