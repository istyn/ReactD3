import React from 'react'
import './App.css'
//import {json} from 'd3-fetch'
import Chart from './components/Chart'
import StatLine from './components/StatLine'
import data from './data.json'
//var url = "lamp.istyles.net/~istyles6/data.json";

export default () =>
  <div className="App">
    <div className="App-header">
      <h2>Site Visitors Dashboard</h2>
    </div>
    <div className="App-chart-container">
    <StatLine data={data} />
      <Chart />
    </div>
  </div>
