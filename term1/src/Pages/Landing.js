import React from 'react'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import DoughnutChart from '../Components/DoughnutChart';
import { Col, Container, Row } from "react-bootstrap";

export default function Landing() {

  const [holding, setHolding] = useState([]);
  var colours = ["#00A19C", "#FDD900", "#EF1A2D", "#FF8000 ", "#FD4BC7", "#20394C", "#00594F", "#041E42", "#981E32", "#E6002B"]

  const options = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/rankings/teams',
    params: { season: '2021' },
    headers: {
      'X-RapidAPI-Key': '',
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
    <div className='secondary'>
      <div id='header' >
        <h1 className='pt-5'> <span className='backgrey p-2 rounded'> Welcome to Formula One Comparisons </span> </h1>
      </div>

      <Container flex className='secondary text-light pt-3 pb-3'>
        <h1 className='mb-4'>About</h1>        
        <Row>
          <Col>
            <h3 className='mb-3'>
              Formula One Comparisons allows you to compare various stats between drivers over the seasons. <br /> <br />
              The API-FORMULA-1 API has many different options for stats or data for specific seasons, tracks, teams, etc. We use data from the drivers section such as their abbreviation, career points and podiums, world championships and use the teams array to calculate an estimate of how many seasons they have raced in.  <br/> <br/> This doughnut chart compares the points between all the teams in the 2021 season.
            </h3>        
          </Col>

          <Col className=''>
            <div style={{ width:'500px'}}>
              <DoughnutChart ChartData={sendingData} />
            </div>        
          </Col>   
        </Row>


      </Container>

      <div className='text-light px-5 lightbg'>

        {/* 21262D 161B22 89929B */}

        <h4 className='pt-5'>
          On the <a id='at' href='/timeline' className='link-light'>timeline</a> page you get a breakdown of all the drivers points in any given season. Change the season to see information about the drivers and points from that season. Go as far back as 2012 and even as new as the current ongoing season!
        </h4>

        <h4 className='p-5'>
          The <a id='at' href='/compare' className='link-light'>comparisons</a> page allows you to choose two Formula One drivers and compare career stats such as career points, total podiums and total world championship titles.
        </h4>

      </div>

      <div className="text-light p-4 secondary" style={{ display: "flex"}}>

        <h4 className='mx-auto'>
          <a href='/' className='link-light nunderline'>Formula One Comp</a>
        </h4>

        <h4 className='mx-auto'>
          <a href='/compare' className='link-light nunderline'>Compare</a>
        </h4>

        <h4 className='mx-auto'>
          <a href='/timeline' className='link-light nunderline'>Timeline</a>
        </h4>

      </div>

    </div>
  )
}
