import React, { useRef, useState } from 'react'
import axios from "axios";

export default function Compare() {
  const options = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/drivers',
    params: { search: 'lewis' },
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
        <input type="text" class="form-control" id="driver1name" placeholder='Max Verstappen'/>
        <label for="season1label" class="form-label">Season/Year</label>
        <input type="text" class="form-control" id="driver1season" placeholder="2022"></input>
      </div>

      <div class="w-50">
        <label for="driver2label" class="form-label">Driver Two</label>
        <input type="text" class="form-control" id="driver2name" placeholder="Sergio Perez"></input>
        <label for="season2label" class="form-label">Season/Year</label>
        <input type="text" class="form-control" id="driver2season" placeholder="2022"></input>
      </div>

      {/* <div>
      <input class="form-control" list="datalistOptions" id="driverdatalist" name='driverlist1' value={this.state.driverlist1} placeholder="Type to search..." onChange={e => this.setState({driverlist1: e.target.value})}/>
        <datalist id="datalistOptions1">
          <option value="San Francisco"/>
          <option value="New York"/>
          <option value="Seattle"/>
          <option value="Los Angeles"/>
          <option value="Chicago"/>
        </datalist>
      </div> */}

    </div>
  )
}