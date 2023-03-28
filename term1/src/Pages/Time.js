import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import LineChart from '../Components/LineChart';


export default function Time() {

  const [seasonData, setSeasonData] = useState();

  // const [driverData, setDriverData] = useState({
  //   labels: seasonData.driver.name,
  //   datasets: [{
  //     label: 'Season Points',
  //     data: seasonData.points,
  //     tension: 0.4
  //   }]
  // });


  const options = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/rankings/drivers',
    params: { season: '2022' },
    headers: {
      'X-RapidAPI-Key': '8ef8fc27c6msh7504b9ec3178fa1p1a705fjsnfb988f103d4a',
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      setSeasonData(response.data.response);
      console.log(seasonData);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])


  return (
    <div>
      {/* <LineChart ChartData={ driverData } /> */}
      hi
    </div>

  )
}
