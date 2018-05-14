import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import data from '../data.json'
import Axes from './Axes'
import Bars from './Bars'
import ResponsiveWrapper from './ResponsiveWrapper'

class Chart extends Component {
  constructor() {
    super()
    this.xScale = scaleBand()
    this.yScale = scaleLinear()
  }

  render() {
    const margins = { top: 50, right: 20, bottom: 100, left: 40 }
    const svgDimensions = {
      width: Math.max(this.props.parentWidth, 300),
      height: 500
    }

	
    const maxValue = Math.max(...data.map(d => d.value))
    const paddedMax = maxValue + maxValue * 1 / 20

    const xScale = this.xScale
      .domain(data.map(d => d.label))
      .range([margins.left, svgDimensions.width - margins.right])

    const yScale = this.yScale
      .domain([0, paddedMax])
      .range([svgDimensions.height - margins.bottom, margins.top])

    return (
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        />
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={data}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
      </svg>
    )
  }
}

export default ResponsiveWrapper(Chart)
