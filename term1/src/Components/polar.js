import React from 'react';
import { useState, useEffect } from 'react';
import { PolarArea } from 'react-chartjs-2';

function Polar({Input1, Input2}) {

    const [drivOne, setDrivOne] = useState({
        dName: "",
        points: 0
    });
    
    const [drivTwo, setDrivTwo] = useState({
        dName: "",
        points: 0
    });

    useEffect(() => {

        setDrivOne({
            dName: Input1.data.response[0].abbr,
            points: Input1.data.response[0].career_points
        });

        setDrivTwo({
            dName: Input2.data.response[0].abbr,
            points: Input2.data.response[0].career_points
        });

    }, [Input1, Input2]);
    
    const chartData = {
        labels: [
            drivOne.dName, 
            drivTwo.dName
        ],
        datasets: [{
            label: 'Career Points',
            data: [drivOne.points, drivTwo.points]
        }]
    }
    
  return (
        <PolarArea data={chartData} />
  );
}

export default Polar;
