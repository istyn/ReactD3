import React, { Component } from 'react'
import './App.css'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'

class BarChart extends Component {
    constructor(props){
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
    }

    //fire BarChart function on first mount and when receiving new props/state
    componentDidMount() {
        this.createBarChart()
    }

    componentDidUpdate() {
        this.createBarChart()
    }

    createBarChart() {
        const node = this.node
        const dataMax = max(this.props.data)
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size[1]])

	select(node)
		.selectAll('rect')
		.data(this.props.data)
		.enter()
		.append('rect')

	select(node)
		.selectAll('rect')
		.data(this.props.data)
		.exit()
		.remove()

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', '#fe9922')
            .attr('x', (d,i) => i * 25)
            .attr('y', d => this.props.size[1] - yScale(d))
            .attr('height', d=> yScale(d))
            .attr('width', 25)
	

    }

    render() {
        //svg encapsulates D3 code from React (pass DOM node between React and D3)
        return <svg ref={node => this.node = node}
        width = {500} height={500}>
        </svg>
    }
}
export default BarChart
