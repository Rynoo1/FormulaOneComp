import React from 'react'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
// import LineChart from '../Components/LineChart';
import DoughnutChart from '../Components/DoughnutChart';
import { Container, Nav, NavbarBrand } from "react-bootstrap";

export default function Landing() {

  const [holding, setHolding] = useState([]);
  var colours = ["#00A19C", "#FDD900", "#EF1A2D", "#FF8000 ", "#FD4BC7", "#20394C", "#00594F", "#041E42", "#981E32", "#E6002B"]

  const options = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/rankings/teams',
    params: { season: '2021' },
    headers: {
      'X-RapidAPI-Key': '8ef8fc27c6msh7504b9ec3178fa1p1a705fjsnfb988f103d4a',
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
    }
  };


  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data.response);
      setHolding(response.data.response);
    }).catch(function (error) {
      console.error(error);
    });

  }, []);

  const sendingData = {
    labels: holding.map((holding) => holding.team.name),
    datasets: [{
      label: 2021,
      data: holding.map((holding) => holding.points),
      tension: 0.4,
      backgroundColor: colours,
    }],
  }

  return (
    <div>
      <div id='header' >
        <h1 style={{ padding: 50 }} >
          Welcome to Formula One Comparisons.
        </h1>
      </div>

      <div id='secondary' className="text-light p-3" style={{ display: "flex", alignItems: "center", height: "100%", backgroundColor: "#161B22" }}>
        <h3 className='mb-3'>
          Formula One Comparisons allows you to compare various stats between drivers over the seasons. <br /> <br />
          This doughnut chart compares the pooints of teams in the 2021 season.

        </h3>

        <div style={{ width: 600, }}>
          <DoughnutChart ChartData={sendingData} />
        </div>

      </div>

      <div className='text-light p-3' style={{ backgroundColor: "#21262D" }}>

        {/* 21262D 161B22 89929B */}

        <h4 className='pt-5'>
          On the <a id='at' href='/timeline'>timeline</a> page you get a breakdown of all the drivers points in any given season.
        </h4>

        <h4 className='p-5'>
          On the <a id='at' href='/compare'>comparisons</a> page you get to choose two Formula One drivers and a season to compare each other to.
        </h4>

      </div>

      <div className="text-light p-4" style={{ display: "flex", alignItems: "center", height: "100%", backgroundColor: "#161B22" }}>

        <h4>
          Formula One Comp
        </h4>

        <h4 className=' mx-auto'>
          Timeline
        </h4>

        <h4 className=' mx-auto'>
          Compare
        </h4>

      </div>



    </div>
  )
}
