import React from 'react';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

function CompChart({ Input1, Input2 }) {

    const [drivOne, setDrivOne] = useState({
        dname: "",
        seasons: 0,
        pod: 0,
        champs: 0
    });
    const [drivTwo, setDrivTwo] = useState({
        dname: "",
        seasons: 0,
        pod: 0,
        champs: 0
    });

    useEffect(() => {

        setDrivOne({
            dname: Input1.data.response[0].abbr,
            seasons: Input1.data.response[0].teams.length,
            pod: Input1.data.response[0].podiums,
            champs: Input1.data.response[0].world_championships
        });

        setDrivTwo({
            dname: Input2.data.response[0].abbr,
            seasons: Input2.data.response[0].teams.length,
            pod: Input2.data.response[0].podiums,
            champs: Input2.data.response[0].world_championships
        });

    }, [Input1, Input2]);

    const chartDataPoints = {
        labels: [drivOne.dname, drivTwo.dname],
        datasets: [{
            label: 'Seasons',
            data: [drivOne.seasons, drivTwo.seasons],
            backgroundColor: ['rgb(255, 24, 1)'],
        },
        {
            label: 'All Time Podiums',
            data: [drivOne.pod, drivTwo.pod],
            backgroundColor: ['rgb(0, 161, 155)'],
        },
        {
            label: 'Total Championships',
            data: [drivOne.champs, drivTwo.champs],
            backgroundColor: ['rgb(253, 217, 0)'],
        }
        ],
    }

    return (
        <Bar data={chartDataPoints} />
    )
}

export default CompChart