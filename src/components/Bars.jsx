import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'

export default class Bars extends Component {
  constructor(props) {
    super(props)

    this.colorScale = scaleLinear()
      .domain([0, this.props.maxValue])
      .range(['#ccccff', '#6666ff'])
      .interpolate(interpolateLab)
  }

  render() {
    const { scales, margins, data, svgDimensions } = this.props
    const { xScale, yScale } = scales
    const { height } = svgDimensions

    const bars = (
      data.map(d =>
        <rect
          key={d.label}
          x={xScale(d.label)}
          y={yScale(d.value)}
          height={height - margins.bottom - scales.yScale(d.value)}
          width={xScale.bandwidth()}
          fill={this.colorScale(d.value)}
        />,
      )
    )

    return (
      <g>{bars}</g>
    )
  }
}
