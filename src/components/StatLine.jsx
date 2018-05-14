import React from 'react'
import { mean } from 'd3-array'
//import data from '../data'

export default (props) => {
  const allLength = props.data.length
  let avgDaily = mean(props.data.map(d => d.value))
  //round to 2 decimal places
  avgDaily = Math.floor(avgDaily * 100)/100


  return <div>
    <h3><span>Number of days: </span>
      <span>{allLength}</span><br/>
	<span>Average visitors per day: </span>
      <span>{avgDaily}</span>
    </h3>
  </div>
}
