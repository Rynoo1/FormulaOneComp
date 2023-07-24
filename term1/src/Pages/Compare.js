import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import CompChart from '../Components/Comp';

export default function Compare() {

  const [driverOneFin, setDriverOneFin] = useState('');
  const [driverTwoFin, setDriverTwoFin] = useState('');
  const [displayChart, setDisplayChart] = useState(false);
  const driverOneRef = useRef('');
  const driverTwoRef = useRef('');

  const handleClick = () => {
    console.log(driverOneRef);
    console.log(driverTwoRef);
    setDriverOneFin(driverOneRef.current.value);
    setDriverTwoFin(driverTwoRef.current.value);
    setDisplayChart(true);
  }

  return (
    <Container fluid className="py-3 px-4 lightbg text-light">
        <Row>
          <Col>
            <label for="driver1label" class="form-label">Driver One</label>
            <Form.Control placeholder="Driver One" ref={driverOneRef} />
          </Col>

          <Col>
            <label for="driver2label" class="form-label">Driver Two</label>
            <Form.Control placeholder="Driver Two" ref={driverTwoRef} />
          </Col>
        </Row>

        <Row>
          <Col className='mt-3'>
            <Button onClick={handleClick}>Submit</Button>
          </Col>

        </Row>

      <div className='h-50'>
        {displayChart && <CompChart Input1={driverOneFin} Input2={driverTwoFin} />}
      </div>



    </Container>
  )
}