import React, { PropTypes } from "react"

import ReactEcharts from 'echarts-for-react'

import './index.scss'

class ChartItem extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.colors = ["#32dadd", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
    }

    getBarYOption(data) {
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '5%',
                top: '5%',
                containLabel: true
            },
            xAxis: {
                show: true,
                type: 'value'
            },
            yAxis: {
                show: true,
                type: 'category',
                data: data.map(obj=>obj.name)
            },
            series: [
                {
                    type: 'bar',
                    barMaxWidth: 50,
                    data: data.map(obj=>obj.value)
                }
            ],
            color: this.colors
        }
    }

    getPieOption(data) {
        return {
            series: [
                {
                    type: 'pie',
                    radius: [40, 100],
                    center: ['50%', '40%'],
                    roseType: 'area',
                    data: data
                }
            ],
            color: this.colors,
            tooltip: {
                trigger: 'item',
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: data.map(obj => obj.name)
            },
            xAxis: [
                {
                    show: false
                }
            ],
            yAxis: [
                {
                    show: false
                }
            ],
            calculable: true,
        }
    }

    getBarOption(data) {
        return {
            series: [
                {
                    type: 'bar',
                    barMaxWidth: 50,
                    data: data.map(obj=>obj.value)
                }
            ],
            color: this.colors,
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '5%',
                top: '5%',
                containLabel: true
            },
            xAxis: [
                {
                    show: true,
                    type: 'category',
                    data: data.map(obj=>obj.name),
                }
            ],
            yAxis: [
                {
                    show: true,
                    type: 'value'
                }
            ],
        }
    }

    getLineOption(data) {
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line'
                }
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '5%',
                top: '5%',
                containLabel: true
            },
            color: this.colors,
            xAxis: [
                {
                    type: 'category',
                    data: data.map(obj=>obj.name)
                }
            ],
            yAxis: [
                {
                    show: true,
                    type: 'value'
                }
            ],
            series: [
                {
                    show: true,
                    type: 'line',
                    data: data.map(obj=>obj.value)
                }
            ]
        }
    }

    render() {
        let { title, data, type } = this.props, opts
        let temp = data.filter(obj => obj.value != 0)
        if(temp.length>0){
            if (type === "pie") {
                data = temp
                opts = this.getPieOption(data)
            }
            else if (type === "line") {
                data = data.filter(obj => obj.value != 0)
                opts = this.getLineOption(data)
            }
            else if (type === "bar-y") {
                opts = this.getBarYOption(data)
            }
            else {
                opts = this.getBarOption(data)
            }
        }
        return (
            <div className="search-chart-item">
                <div className="chart-title">{title}</div>
                <div className="chart-div">
                    {
                        opts ? <ReactEcharts option={opts} /> : <div className="chart-no-data-tip">无数据</div>
                    }
                </div>
            </div>
        )
    }
}

ChartItem.PropTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array,
    type: PropTypes.string
}

export default ChartItem