import React from 'react'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import LineChart from '../Components/LineChart';
import Form from 'react-bootstrap/Form';

export default function Time() {

  const [seasonData, setSeasonData] = useState([]);
  const [driverData, setDriverData] = useState();
  const [seasonYr, setSeasonYr] = useState("2012");
  const [allYears, setAllYears] = useState([]);


  // const updateYear = (event) => {
  //   // seasonyr.current.value = Dropdown.ItemText;
  //   console.log(seasonYr.current);
  // };

  // const updateYear = (e) => {
  //   setSeasonYr(e.target.value);
  //   console.log(seasonYr);
  // };


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
      // setDriverData({
      //   labels: seasonData.map((seasonData) => seasonData.driver.name),
      //   datasets: [{
      //     label: seasonYr,
      //     data: seasonData.map((seasonData) => seasonData.points),
      //     tension: 0.4
      //   }],
      // });
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
      {/* <Line data={driverData} /> */}
      <br />
      {/* <DropdownButton id="dropdown-basic-button" title="Select Season" ref={seasonYr}>
        <Dropdown.Item name = "2022" >2022</Dropdown.Item>
        <Dropdown.Item >2021</Dropdown.Item>
        <Dropdown.Item >2020</Dropdown.Item>
        <Dropdown.Item >2019</Dropdown.Item>
        <Dropdown.Item >2018</Dropdown.Item>
        <Dropdown.Item >2017</Dropdown.Item>
        <Dropdown.Item >2016</Dropdown.Item>
        <Dropdown.Item >2015</Dropdown.Item>
        <Dropdown.Item >2014</Dropdown.Item>
        <Dropdown.Item >2013</Dropdown.Item>
        <Dropdown.Item >2012</Dropdown.Item>
        <Dropdown.Item >2011</Dropdown.Item>
      </DropdownButton> */}

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


{/* <option value="2022" onClick={updateYear}>2022</option>
<option value="2021" onClick={updateYear}>2021</option>
<option value="2020" onClick={updateYear}>2020</option>
<option value="2019" onClick={updateYear}>2019</option>
<option value="2018" onClick={updateYear}>2018</option>
<option value="2017" onClick={updateYear}>2017</option>
<option value="2016" onClick={updateYear}>2016</option>
<option value="2015" onClick={updateYear}>2015</option>
<option value="2014" onClick={updateYear}>2014</option> */}