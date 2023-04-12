import React, { useRef, useState } from 'react'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Compare() {

  const [driverOne, setDriverOne] = useState('');
  const [dataDriver, setDataDriver] = useState('');
  const driverOneRef = useRef('');

  const handleClick = (event) => {
    console.log(driverOneRef.current.value);
    setDriverOne(driverOneRef.current.value);
  }


  const options = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/drivers',
    params: { search: driverOne },
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
    <div class="row p-3">

      <div class="w-50">
        <label for="driver1label" class="form-label">Driver One</label>
        {/* <input type="text" class="form-control" id="driver1name" placeholder='Max Verstappen' onChange={handleChange}/> */}
        <InputGroup>
          <Form.Control
            placeholder="Driver One"
            ref={driverOneRef}
          />
          <Button variant="primary" id="button-addon2" onClick={handleClick}>
            Submit
          </Button>
        </InputGroup>

        <label for="season1label" class="form-label">Season/Year</label>
        <input type="text" class="form-control" id="driver1season" placeholder="2022"></input>
      </div>

      <div class="w-50">
        <label for="driver2label" class="form-label">Driver Two</label>
        <InputGroup>
          <Form.Control
            placeholder="Driver Two"
            ref={driverOneRef}
          />
          <Button variant="primary" id="button-addon2" onClick={handleClick}>
            Submit
          </Button>
        </InputGroup>
        <label for="season2label" class="form-label">Season/Year</label>
        <input type="text" class="form-control" id="driver2season" placeholder="2022"></input>
      </div>

    </div>
  )
}