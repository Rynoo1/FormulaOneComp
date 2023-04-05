import React from 'react'
// import axios from 'axios'
// import { useState, useEffect, useRef } from 'react'
// import LineChart from '../Components/LineChart';

export default function Landing() {



  return (
    <div>
      <div id='header' >
        <h1 style={{ padding: 50 }} >
          Welcome to Formula One Comparisons.
        </h1>
      </div>

      <div id='secondary' class="bg-secondary text-light"  >
        <h3 className='mb-3'>
          Formula One Comparisons allows you to compare various stats between drivers over the seasons of Formula One.
        </h3>

        <h4>
          On the timeline page you get a breakdown of all the driveers points in any given season.
        </h4>

        <h4>
          On the comparisons page you get to choose two Formula One drivers and a season to compare each other to.
        </h4>

      </div>



    </div>
  )
}
