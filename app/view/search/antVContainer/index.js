import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SearchChart from '../../../components/searchChart'

import './index.scss'

class AntVContainer extends React.Component {

    constructor(props,context) {
        super(props,context)
        this.isOnScroll = false
        this.state = {
            pageIndex: 0,
            pageSize: 10
        }
    }
    
    componentDidMount(){
        this.isOnScroll = false;
        this.setState({pageIndex: 0})
        window.onscroll = (e)=>{
            this.onScrollHandler(e)
        }
    }

    onScrollHandler(e){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(this.isOnScroll) return
        if(scrollTop + document.body.offsetHeight > document.body.scrollHeight - 50){
            let val = Math.max(Math.ceil(this.props.reports.length / this.state.pageSize), this.state.pageIndex + 1)
            this.isOnScroll = true;
            setTimeout(()=>this.isOnScroll=false, 500)
            this.setState({pageIndex: val})
        }
    }

    render(){
        let temp = this.props.reports.filter((obj, index) => index < ((this.state.pageIndex+1) * this.state.pageSize))
        return (
            <div className="chart-container">
                <div className="chart-title-div">
                    <p>标签图</p>
                </div>
                <div className="chart-list">
                    {
                        temp.map((obj, index) =>
                            <SearchChart key={index} title={obj.name} type={obj.type} data={obj.data} />
                        )
                    }
                </div>  
            </div>
        )
    }
}

AntVContainer.PropTypes = {
    reports: PropTypes.array.isRequired
}

let mapStateToProps = state => ({
    reports: state.searchList.reportList
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AntVContainer)