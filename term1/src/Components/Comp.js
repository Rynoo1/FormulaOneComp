import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { Bar } from 'react-chartjs-2';

function CompChart({ Input1, Input2 }) {

    const [drivOne, setDrivOne] = useState({
        dname: "",
        points: 0,
        pod: 0,
        champs: 0
    });
    const [drivTwo, setDrivTwo] = useState({
        dname: "",
        points: 0,
        pod: 0,
        champs: 0
    });

    const getOne = {
        method: 'GET',
        url: 'https://api-formula-1.p.rapidapi.com/drivers',
        params: { search: Input1 },
        headers: {
            'X-RapidAPI-Key': '8ef8fc27c6msh7504b9ec3178fa1p1a705fjsnfb988f103d4a',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
        }
    };

    const getTwo = {
        method: 'GET',
        url: 'https://api-formula-1.p.rapidapi.com/drivers',
        params: { search: Input2 },
        headers: {
            'X-RapidAPI-Key': '8ef8fc27c6msh7504b9ec3178fa1p1a705fjsnfb988f103d4a',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
        }
    };

    axios.request(getOne).then(function (response) {
        console.log(response.data.response);
        setDrivOne({ dname: response.data.response[0].abbr, points: response.data.response[0].career_points, pod: response.data.response[0].podiums, champs: response.data.response[0].world_championships })
    }).catch(function (error) {
        console.error(error);
    }, []);

    axios.request(getTwo).then(function (response) {
        console.log(response.data.response);
        setDrivTwo({ dname: response.data.response[0].abbr, points: response.data.response[0].career_points, pod: response.data.response[0].podiums, champs: response.data.response[0].world_championships })
    }).catch(function (error) {
        console.error(error);
    }, []);

    const Abbr = ([
        drivOne.dname, drivTwo.dname
    ]);
    const Points = ([
        drivOne.points, drivTwo.points
    ]);
    const Podiums = ([
        drivOne.pod, drivTwo.pod
    ]);
    const Championships = ([
        drivOne.champs, drivTwo.champs
    ]);


    const chartDataPoints = {
        labels: Abbr,
        datasets: [{
            label: 'Career Points',
            data: Points,
            backgroundColor: ['rgb(255, 24, 1)'],
        },
        {
            label: 'All Time Podiums',
            data: Podiums,
            backgroundColor: ['rgb(0, 161, 155)'],
        },
        {
            label: 'Total Championships',
            data: Championships,
            backgroundColor: ['rgb(253, 217, 0)'],
        }
    ],
    }

    return (
        <Bar data={ chartDataPoints } />
    )
}

export default CompChart