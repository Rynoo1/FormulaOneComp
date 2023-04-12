import React from 'react'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import LineChart from '../Components/LineChart';
import Form from 'react-bootstrap/Form';

export default function Time() {

  const [seasonData, setSeasonData] = useState([]);
  const [seasonYr, setSeasonYr] = useState("2012");
  const [allYears, setAllYears] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/rankings/drivers',
    params: { season: seasonYr },
    headers: {
      'X-RapidAPI-Key': '8ef8fc27c6msh7504b9ec3178fa1p1a705fjsnfb988f103d4a',
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
    }
  };

  const allSeasons = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/seasons',
    headers: {
      'X-RapidAPI-Key': '8ef8fc27c6msh7504b9ec3178fa1p1a705fjsnfb988f103d4a',
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data.response);
      setSeasonData(response.data.response);
    }).catch(function (error) {
      console.error(error);
    });

  }, [seasonYr]);


  useEffect(() => {
    axios.request(allSeasons).then(function (response) {
      setAllYears(response.data.response);
    }).catch(function (error) {
      console.error(error);
    });

  }, []);

  console.log(seasonData)

  const driveData = {
    labels: seasonData.map((seasonData) => seasonData.driver.name),
    datasets: [{
      label: seasonYr,
      data: seasonData.map((seasonData) => seasonData.points),
      tension: 0.4
    }],
  }
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <LineChart ChartData={driveData} />
      <br />

      <Form aria-label="Default select example" style={{ width: 500, marginLeft: 400 }}>
        {/* <option>Select Season</option> */}
        <select value={selected}
          onChange={e => setSeasonYr(e.target.value)}>
          {allYears.map(years => (
            <option value={years} key={years} >{years}</option>
          ))
          }
        </select>
      </Form>

    </div>

  )
}