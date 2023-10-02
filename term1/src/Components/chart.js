import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Radar } from 'react-chartjs-2';

function Chart({ Input1, Input2 }) {

    const [drivOne, setDrivOne] = useState({
        dname: "",
        entered: 0,
        seasons: 0,
        points: 0
    });
    const [drivTwo, setDrivTwo] = useState({
        dname: "",
        entered: 0,
        seasons: 0,
        points: 0
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

    useEffect(() => {
        axios.request(getOne).then(function (response) {
            console.log(response.data.response);
            setDrivOne({ dname: response.data.response[0].abbr, entered: response.data.response[0].grands_prix_entered, seasons: response.data.response[0].teams.length, points: response.data.response[0].career_points })
        }).catch(function (error) {
            console.error(error);
        },);
    }, []);

    useEffect(() => {
        axios.request(getTwo).then(function (response) {
            console.log(response.data.response);
            setDrivTwo({ dname: response.data.response[0].abbr, entered: response.data.response[0].grands_prix_entered, seasons: response.data.response[0].teams.length, points: response.data.response[0].career_points })
        }).catch(function (error) {
            console.error(error);
        },);
    }, []);


    const chartDataPoints = {
        labels: [
            'Grand Prix Entered',
            'Number of Seasons',
            'Career Points'
        ],
        datasets: [{
            label: drivOne.dname,
            data: [drivOne.entered, drivOne.seasons, drivOne.points]
        },
        {
            label: drivTwo.dname,
            data: [drivTwo.entered, drivTwo.seasons, drivTwo.points]
        }
        ],
    }

    return (
        <Radar data={chartDataPoints} />
    )
}

export default Chart