import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import CompChart from '../Components/Comp';
import Chart from '../Components/chart';
import Polar from '../Components/polar';
import axios from 'axios';

export default function Compare() {

  const [displayChart, setDisplayChart] = useState(false);
  const [driveOne, setDriveOne] = useState();
  const [driveTwo, setDriveTwo] = useState();
  const [bar, setBar] = useState();
  const [radar, setRadar] = useState();
  const [polar, setPolar] = useState();

  const handleClick = async () => {
    setDisplayChart(true);

    const getOne = {
      method: 'GET',
      url: 'https://api-formula-1.p.rapidapi.com/drivers',
      params: { search: driveOne },
      headers: {
        'X-RapidAPI-Key': '8ef8fc27c6msh7504b9ec3178fa1p1a705fjsnfb988f103d4a',
        'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
      }
    };
    const getTwo = {
      method: 'GET',
      url: 'https://api-formula-1.p.rapidapi.com/drivers',
      params: { search: driveTwo },
      headers: {
        'X-RapidAPI-Key': '8ef8fc27c6msh7504b9ec3178fa1p1a705fjsnfb988f103d4a',
        'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
      }
    };
    try {
      const resultOne = await axios.request(getOne);
      const resultTwo = await axios.request(getTwo);
      console.log(resultOne);
      console.log(resultTwo);
      setBar(<CompChart Input1={resultOne} Input2={resultTwo} />);
      setRadar(<Chart Input1={resultOne} Input2={resultTwo} />);
      setPolar(<Polar Input1={resultOne} Input2={resultTwo} />);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container fluid className="py-3 px-4 lightbg text-light">
      <Row>
        <Col>
          <label for="driver1label" class="form-label">Driver One</label>
          <Form.Control placeholder="Driver One" onChange={(e) => setDriveOne(e.target.value)} />
        </Col>

        <Col>
          <label for="driver2label" class="form-label">Driver Two</label>
          <Form.Control placeholder="Driver Two" onChange={(e) => setDriveTwo(e.target.value)} />
        </Col>
      </Row>

      <Row>
        <Col className='mt-3'>
          <Button onClick={handleClick}>Submit</Button>
        </Col>

      </Row>

      <div className=''>
        {bar}
      </div>

      <div className=''>
        {radar}
      </div>
      
      <div className=''>
        {polar}
      </div>

    </Container>
  )
}
