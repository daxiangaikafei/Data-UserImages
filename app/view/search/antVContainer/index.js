import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Pagination } from 'antd'

import ChartItem from '../../../components/chartItem'

import './index.scss'

class AntVContainer extends React.Component {

    constructor(props,context) {
        super(props,context)
    }
    
    componentDidMount(){
    }

    render(){
        return (
            <div className="chart-container">
                <div className="chart-title-div">
                    <span>用户统计数：{this.props.reportNumber}</span>
                    <span>计算时间：{this.props.reports.length>0?this.props.time:0}</span>
                </div>
                {this.props.reportCount?<Pagination className="av-page" total={this.props.reportCount} current={this.props.currentPage} pageSize={this.props.pageSize} onChange={(page) => this.props.getReportData(page)} />:""}
                <div className="chart-list">
                    {
                        this.props.reports.map((obj, index) =>
                            <ChartItem key={index} title={obj.name} type={obj.type} data={obj.data} />
                        )
                    }
                </div>  
            </div>
        )
    }
}

AntVContainer.PropTypes = {
    pageSize:PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    reportCount: PropTypes.number.isRequired,
    reportNumber: PropTypes.number.isRequired,
    reports: PropTypes.array.isRequired,
    getReportData: PropTypes.func.isRequired
}

let mapStateToProps = state => ({
    reportCount: state.searchList.reportCount,
    reportNumber: state.searchList.reportNumber,
    reports: state.searchList.reportList,
    time: state.searchList.time,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AntVContainer)