import React from 'react';
import { useState, useEffect } from 'react';
import { Radar } from 'react-chartjs-2';

function Chart({ Input1, Input2 }) {

    const [drivOne, setDrivOne] = useState({
        dname: "",
        entered: 0,
        seasons: 0,
        podiums: 0
    });
    const [drivTwo, setDrivTwo] = useState({
        dname: "",
        entered: 0,
        seasons: 0,
        podiums: 0
    });

    useEffect(() => {
        setDrivOne({
            dname: Input1.data.response[0].abbr,
            entered: Input1.data.response[0].grands_prix_entered,
            seasons: Input1.data.response[0].teams.length,
            podiums: Input1.data.response[0].podiums
        });
        setDrivTwo({
            dname: Input2.data.response[0].abbr,
            entered: Input2.data.response[0].grands_prix_entered,
            seasons: Input2.data.response[0].teams.length,
            podiums: Input2.data.response[0].podiums
        })

    }, [Input1, Input2]);


    const chartDataPoints = {
        labels: [
            'Grand Prix Entered',
            'Number of Seasons',
            'Podiums'
        ],
        datasets: [{
            label: drivOne.dname,
            data: [drivOne.entered, drivOne.seasons, drivOne.podiums]
        },
        {
            label: drivTwo.dname,
            data: [drivTwo.entered, drivTwo.seasons, drivTwo.podiums]
        }
        ],
    }

    return (
        <Radar data={chartDataPoints} />
    )
}

export default Chart
